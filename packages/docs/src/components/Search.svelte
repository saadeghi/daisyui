<script>
  import { onMount } from "svelte"

  // Search functionality
  let searchData = $state([])
  let searchQuery = $state("")
  let isSearchLoading = $state(false)
  let selectedIndex = $state(-1) // -1 means input is focused, 0+ means result item is focused
  let searchModal // Dialog element binding
  let recentSearches = $state([])
  let bookmarkedSearches = $state([])

  // URL priority configuration - higher priority URLs show up first
  const urlPriorities = ["/components/", "/docs/", "/theme-generator/", "/store/"]

  // Initial search data - predefined items that show up initially as CSV string
  const initialSearchCSV = `Install daisyUI as a Tailwind plugin,/docs/install/
Use daisyUI from CDN,/docs/cdn/
Components,/components/
Button,/components/button/
Dropdown,/components/dropdown/
Modal,/components/modal/
Toggle,/components/toggle/
Drawer,/components/drawer/
Card,/components/card/`

  // Helper function to get URL priority
  function getUrlPriority(url) {
    for (let i = 0; i < urlPriorities.length; i++) {
      if (url.startsWith(urlPriorities[i])) {
        return i // Lower number = higher priority
      }
    }
    return urlPriorities.length // Lowest priority for others
  }

  // Helper function to extract words from URL
  function extractWordsFromUrl(url) {
    // Split URL into path and fragment parts
    const [pathPart, fragmentPart] = url.split("#")
    const cleanPath = pathPart.split("?")[0] // Remove query params from path

    // Extract segments from path
    const pathSegments = cleanPath.split("/").filter(Boolean)

    // Extract words from all segments (both path and fragment)
    const words = []

    // Process path segments
    pathSegments.forEach((segment) => {
      // Add the original segment as is
      words.push(segment.toLowerCase())

      // Split on hyphens, underscores, and camelCase
      const segmentWords = segment
        .replace(/[-_]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => word.length > 1) // Only include words longer than 1 character

      words.push(...segmentWords)
    })

    // Process fragment part (after #) if it exists
    if (fragmentPart) {
      // Add the original fragment as is
      words.push(fragmentPart.toLowerCase())

      // Split fragment on hyphens, underscores, and camelCase
      const fragmentWords = fragmentPart
        .replace(/[-_]/g, " ")
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .split(/\s+/)
        .filter((word) => word.length > 1)

      words.push(...fragmentWords)
    }

    // Remove duplicates and filter out empty strings
    const uniqueWords = [...new Set(words)].filter((word) => word && word.length > 0)

    return uniqueWords
  }

  // Helper function to check if item matches search query
  function matchesSearchQuery(item, query) {
    // Normalize the query by trimming whitespace and collapsing multiple spaces
    const normalizedQuery = query.trim().replace(/\s+/g, " ")
    const lowercaseQuery = normalizedQuery.toLowerCase()

    // Skip empty queries
    if (!lowercaseQuery) {
      return false
    }

    // Check title
    if (item.title.toLowerCase().includes(lowercaseQuery)) {
      return true
    }

    // Check URL words
    const urlWords = extractWordsFromUrl(item.url)
    const urlMatch = urlWords.some((word) => word.includes(lowercaseQuery))

    return urlMatch
  }

  // Helper function to highlight search terms in text
  function highlightSearchTerms(text, searchQuery) {
    // Normalize the search query by trimming whitespace and collapsing multiple spaces
    const normalizedQuery = searchQuery.trim().replace(/\s+/g, " ")
    if (!normalizedQuery) return text

    const regex = new RegExp(`(${normalizedQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
    return text.replace(regex, '<span class="underline">$1</span>')
  }

  // Derived state for filtered results
  let filteredResults = $derived.by(() => {
    // Normalize the search query by trimming whitespace and collapsing multiple spaces
    const normalizedQuery = searchQuery.trim().replace(/\s+/g, " ")

    if (!normalizedQuery) {
      // Show recent searches and bookmarks if available, otherwise show initial data
      if (recentSearches.length > 0 || bookmarkedSearches.length > 0) {
        // Combine recent and bookmarked searches (recent first)
        // Items should already be clean since we clean them before saving
        return [...recentSearches, ...bookmarkedSearches]
      } else {
        // Show initial search data when no query and no recent/bookmarks
        return searchData.slice(0, initialSearchCSV.split("\n").length)
      }
    }

    // Filter items that match the search query
    const matchingItems = searchData.filter((item) => matchesSearchQuery(item, normalizedQuery))

    // Remove duplicates based on URL and add highlighting for search results
    const uniqueItems = []
    const seenUrls = new Set()

    matchingItems.forEach((item) => {
      if (!seenUrls.has(item.url)) {
        seenUrls.add(item.url)
        uniqueItems.push({
          ...item,
          highlightedTitle: highlightSearchTerms(item.title, normalizedQuery),
          highlightedUrl: highlightSearchTerms(item.url, normalizedQuery),
        })
      }
    })

    // Sort by multiple criteria with proper prioritization
    return uniqueItems.sort((a, b) => {
      const query = normalizedQuery.toLowerCase()

      // 1. Pages before sections (pages don't have # in URL) - HIGHEST PRIORITY
      const aIsPage = !a.url.includes("#")
      const bIsPage = !b.url.includes("#")

      if (aIsPage !== bIsPage) {
        return aIsPage ? -1 : 1 // Pages first
      }

      // 2. Exact match priority: exact title match > exact URL segment match
      const aExactTitleMatch = a.title.toLowerCase() === query
      const bExactTitleMatch = b.title.toLowerCase() === query

      if (aExactTitleMatch !== bExactTitleMatch) {
        return aExactTitleMatch ? -1 : 1
      }

      // Check for exact URL segment match (extract last segment for comparison)
      const getLastUrlSegment = (url) => {
        const pathPart = url.split("?")[0].split("#")[0]
        const segments = pathPart.split("/").filter(Boolean)
        return segments[segments.length - 1] || ""
      }

      const aExactUrlMatch = getLastUrlSegment(a.url).toLowerCase() === query
      const bExactUrlMatch = getLastUrlSegment(b.url).toLowerCase() === query

      if (aExactUrlMatch !== bExactUrlMatch) {
        return aExactUrlMatch ? -1 : 1
      }

      // 3. URL priority (components > docs > others)
      const aPriority = getUrlPriority(a.url)
      const bPriority = getUrlPriority(b.url)

      if (aPriority !== bPriority) {
        return aPriority - bPriority
      }

      // 4. Shorter URLs have higher priority (within same category)
      const aUrlLength = a.url.length
      const bUrlLength = b.url.length

      if (aUrlLength !== bUrlLength) {
        return aUrlLength - bUrlLength // Shorter URLs first
      }

      // 5. Finally, alphabetical order by title
      return a.title.localeCompare(b.title)
    })
  })

  // Update selected index when filtered results change
  $effect(() => {
    selectedIndex = filteredResults.length > 0 ? 0 : -1
  })

  // LocalStorage management functions
  function getFromLocalStorage(key, defaultValue = []) {
    if (typeof window === "undefined") return defaultValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.warn(`Error reading from localStorage key ${key}:`, error)
      return defaultValue
    }
  }

  function saveToLocalStorage(key, value) {
    if (typeof window === "undefined") return
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.warn(`Error saving to localStorage key ${key}:`, error)
    }
  }

  function addToRecentSearches(item) {
    // Clean the item to only keep essential properties (no highlighted text)
    const cleanItem = {
      title: item.title,
      url: item.url,
      isSection: item.isSection,
      parentPageTitle: item.parentPageTitle,
    }
    // Remove if already exists
    const filtered = recentSearches.filter((search) => search.url !== cleanItem.url)
    // Add to beginning and limit to 10 items
    recentSearches = [cleanItem, ...filtered].slice(0, 10)
    saveToLocalStorage("daisyui_recent_searches", recentSearches)
  }

  function removeFromRecentSearches(url) {
    recentSearches = recentSearches.filter((search) => search.url !== url)
    saveToLocalStorage("daisyui_recent_searches", recentSearches)
  }

  function toggleBookmark(item) {
    const isBookmarked = bookmarkedSearches.some((search) => search.url === item.url)
    if (isBookmarked) {
      bookmarkedSearches = bookmarkedSearches.filter((search) => search.url !== item.url)
    } else {
      // Clean the item to only keep essential properties (no highlighted text)
      const cleanItem = {
        title: item.title,
        url: item.url,
        isSection: item.isSection,
        parentPageTitle: item.parentPageTitle,
      }
      bookmarkedSearches = [...bookmarkedSearches, cleanItem]
    }
    saveToLocalStorage("daisyui_bookmarked_searches", bookmarkedSearches)
  }

  function isItemBookmarked(url) {
    return bookmarkedSearches.some((search) => search.url === url)
  }

  // Function to handle result selection
  function handleResultClick(result) {
    try {
      addToRecentSearches(result)
      const modal = document.getElementById("searchModal")
      if (modal && typeof modal.close === "function") {
        modal.close()
      }
      window.location.href = result.url
    } catch (error) {
      console.error("Error handling result click:", error)
    }
  }

  // Action button handlers
  function handleBookmarkToggle(event, item) {
    try {
      event.preventDefault()
      event.stopPropagation()
      toggleBookmark(item)
      // The derived state will automatically update the display
    } catch (error) {
      console.error("Error handling bookmark toggle:", error)
    }
  }

  function handleDeleteFromRecent(event, url) {
    try {
      event.preventDefault()
      event.stopPropagation()
      removeFromRecentSearches(url)
      // The derived state will automatically update the display
    } catch (error) {
      console.error("Error handling delete from recent:", error)
    }
  }

  // Export functions to be called by parent components
  export function openModal() {
    openSearchModal()
  }

  export function preFetchData() {
    fetchSearchData()
  }

  // Cache DOM elements for performance
  let searchInput

  // Function to scroll selected item into view
  function scrollToSelectedItem() {
    if (selectedIndex >= 0) {
      const selectedElement = document.getElementById(`search-result-${selectedIndex}`)
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
        })
      }
    }
  }

  // Keyboard navigation functions
  function handleKeyDown(event) {
    if (event.key === "ArrowDown") {
      event.preventDefault()
      if (filteredResults.length === 0) return

      if (selectedIndex < filteredResults.length - 1) {
        selectedIndex++
      } else {
        // Loop back to first item
        selectedIndex = 0
      }
      scrollToSelectedItem()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      if (filteredResults.length === 0) return

      if (selectedIndex > 0) {
        selectedIndex--
      } else {
        // Loop to last result
        selectedIndex = filteredResults.length - 1
      }
      scrollToSelectedItem()
    } else if (event.key === "Enter") {
      event.preventDefault()
      if (filteredResults.length === 0) return

      // Use the currently selected item (selectedIndex should always be valid when there are results)
      if (filteredResults[selectedIndex]) {
        addToRecentSearches(filteredResults[selectedIndex])
        window.location.href = filteredResults[selectedIndex].url
        const modal = document.getElementById("searchModal")
        if (modal && typeof modal.close === "function") {
          modal.close()
        }
      }
    } else if (event.key === "Escape") {
      const modal = document.getElementById("searchModal")
      if (modal && typeof modal.close === "function") {
        modal.close()
      }
    }
  }

  // Function to fetch search data
  async function fetchSearchData() {
    if (searchData.length > 0) return // Already loaded

    isSearchLoading = true

    try {
      // Parse initial CSV data first
      const parseCSVData = (csvText) => {
        const lines = csvText.trim().split("\n")
        return lines
          .map((line) => {
            // Simple CSV parsing - handle quoted values
            const parts = []
            let current = ""
            let inQuotes = false

            for (let i = 0; i < line.length; i++) {
              const char = line[i]
              if (char === '"') {
                inQuotes = !inQuotes
              } else if (char === "," && !inQuotes) {
                parts.push(current.trim())
                current = ""
              } else {
                current += char
              }
            }
            parts.push(current.trim())

            return {
              title: parts[0]?.replace(/^"|"$/g, "") || "",
              url: parts[1]?.replace(/^"|"$/g, "") || "",
            }
          })
          .filter((item) => item.title && item.url)
      }

      // Parse initial data
      const initialResults = parseCSVData(initialSearchCSV)

      let csvResults = []
      try {
        const response = await fetch("/search.csv")
        if (response.ok) {
          const csvText = await response.text()
          // Parse CSV data (skip header row for external CSV)
          const lines = csvText.trim().split("\n")
          csvResults = parseCSVData(lines.slice(1).join("\n"))
        }
      } catch (error) {
        console.warn("Could not fetch external search data:", error)
      }

      // Combine initial data with CSV data
      const allResults = [...initialResults, ...csvResults]

      // Build page mapping for sections
      const pageMap = new Map()
      allResults.forEach((item) => {
        if (!item.url.includes("#")) {
          // This is a page - store it for later reference
          pageMap.set(item.url, item.title)
        }
      })

      // Add parent page info to sections
      const enrichedResults = allResults.map((item) => {
        if (item.url.includes("#")) {
          // This is a section - find its parent page
          const baseUrl = item.url.split("#")[0]
          // Ensure baseUrl ends with / for consistent lookup
          const normalizedBaseUrl = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/"
          const parentPageTitle = pageMap.get(normalizedBaseUrl)
          return {
            ...item,
            isSection: true,
            parentPageTitle: parentPageTitle || "Unknown Page",
          }
        }
        return {
          ...item,
          isSection: false,
        }
      })

      searchData = enrichedResults
    } catch (error) {
      console.error("Failed to fetch search data:", error)
    } finally {
      isSearchLoading = false
    }
  }

  // Function to handle search modal open
  function openSearchModal() {
    // Load data from localStorage
    recentSearches = getFromLocalStorage("daisyui_recent_searches", [])
    bookmarkedSearches = getFromLocalStorage("daisyui_bookmarked_searches", [])
    // fetchSearchData is now called on hover, not when opening modal
    fetchSearchData() // Still call it as fallback in case hover didn't trigger
    if (searchModal && typeof searchModal.showModal === "function") {
      searchModal.showModal()
      // Focus on input after modal opens
      setTimeout(() => {
        if (searchInput && typeof searchInput.focus === "function") {
          searchInput.focus()
        }
      }, 100)
    } else {
      console.error("searchModal element not found or showModal not available")
    }
  }

  // Handle keyboard shortcuts
  function handleGlobalKeydown(event) {
    // Cmd+K or Ctrl+K to open search
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault()
      openSearchModal()
    }
  }

  // Add global keyboard listener
  onMount(() => {
    document.addEventListener("keydown", handleGlobalKeydown)
    return () => {
      document.removeEventListener("keydown", handleGlobalKeydown)
    }
  })
</script>

{#snippet searchResultItem(result, index, type)}
  {@const isSelected = selectedIndex === index}
  {@const needsActionButtons = type === "recent" || type === "bookmarked"}

  {#if needsActionButtons}
    <!-- Container for items with action buttons (recent and bookmarked) -->
    <div
      id="search-result-{index}"
      class="has-[a:focus-visible]:bg-primary focus-visible:bg-primary rounded-box focus-visible:text-primary-content aria-selected:bg-primary aria-selected:text-primary-content flex w-full items-center p-4 focus-visible:outline-none"
      tabindex="0"
      aria-selected={isSelected}
      onmouseenter={() => {
        selectedIndex = index
      }}
    >
      <a
        href={result.url}
        class="min-w-0 flex-1 cursor-pointer appearance-none focus-visible:outline-none"
        onclick={() => handleResultClick(result)}
      >
        {@render resultContent(result)}
      </a>
      <div class="ml-2 flex gap-1">
        <!-- Bookmark button -->
        <button
          class="btn btn-ghost btn-xs btn-square"
          onclick={(event) => handleBookmarkToggle(event, result)}
          title={isItemBookmarked(result.url) ? "Remove bookmark" : "Add bookmark"}
        >
          {#if isItemBookmarked(result.url)}
            <!-- Filled bookmark icon -->
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path
                fill="currentColor"
                d="M8.529,15.222c.297,.155,.644,.155,.941,0,1.57-.819,6.529-3.787,6.529-8.613,.008-2.12-1.704-3.846-3.826-3.859-1.277,.016-2.464,.66-3.173,1.72-.71-1.06-1.897-1.704-3.173-1.72-2.123,.013-3.834,1.739-3.826,3.859,0,4.826,4.959,7.794,6.529,8.613Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
          {:else}
            <!-- Empty bookmark icon -->
            <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
              <path
                fill="none"
                d="M8.529,15.222c.297,.155,.644,.155,.941,0,1.57-.819,6.529-3.787,6.529-8.613,.008-2.12-1.704-3.846-3.826-3.859-1.277,.016-2.464,.66-3.173,1.72-.71-1.06-1.897-1.704-3.173-1.72-2.123,.013-3.834,1.739-3.826,3.859,0,4.826,4.959,7.794,6.529,8.613Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
          {/if}
        </button>
        {#if type === "recent"}
          <!-- Delete button (only for recent searches) -->
          <button
            class="btn btn-ghost btn-xs btn-square"
            onclick={(event) => handleDeleteFromRecent(event, result.url)}
            title="Remove from recent"
          >
            <!-- Delete icon -->
            <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        {/if}
      </div>
    </div>
  {:else}
    <!-- Simple link for search results and popular pages -->
    <a
      id="search-result-{index}"
      class="has-[a:focus-visible]:bg-primary focus-visible:bg-primary rounded-box focus-visible:text-primary-content aria-selected:bg-primary aria-selected:text-primary-content block w-full p-4 focus-visible:outline-none"
      href={result.url}
      tabindex="0"
      aria-selected={isSelected}
      onmouseenter={() => {
        selectedIndex = index
      }}
      onclick={() => handleResultClick(result)}
    >
      {@render resultContent(result)}
    </a>
  {/if}
{/snippet}

{#snippet resultContent(result)}
  {#if result.isSection}
    <div class="text-sm">
      <span class="text-[0.625rem] opacity-60">{result.parentPageTitle}</span>
      <span class="block">
        <svg
          class="mx-2 inline-block size-3 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M15 10L20 15 15 20"></path>
            <path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
          </g>
        </svg>
        {#if result.highlightedTitle}
          {@html result.highlightedTitle}
        {:else}
          {result.title}
        {/if}
      </span>
    </div>
    <div class="ms-8 pt-1 font-mono text-[0.625rem] tracking-tighter opacity-30">
      {#if result.highlightedUrl}
        {@html result.highlightedUrl}
      {:else}
        {result.url}
      {/if}
    </div>
  {:else}
    <div class="flex items-center gap-2 text-sm">
      <span>
        {#if result.highlightedTitle}
          {@html result.highlightedTitle}
        {:else}
          {result.title}
        {/if}
      </span>
    </div>
    <div class="pt-1 font-mono text-[0.625rem] tracking-tighter opacity-30">
      {#if result.highlightedUrl}
        {@html result.highlightedUrl}
      {:else}
        {result.url}
      {/if}
    </div>
  {/if}
{/snippet}

<!-- search modal -->
<dialog
  dir="ltr"
  bind:this={searchModal}
  id="searchModal"
  class="modal max-md:modal-bottom md:items-start"
  onkeydown={handleKeyDown}
>
  <div
    class="modal-box relative w-11/12 max-w-2xl p-0 max-md:h-[75vh] md:mt-[10vh] md:h-[clamp(13rem,80vh,80vh)]"
  >
    <div class="rounded-box h-full overflow-y-auto" style="scroll-padding-top: 3.5rem;">
      <label
        class="input input-lg lg:input-xl bg-base-100 border-base-300 sticky top-0 z-1 mb-2 w-full rounded-none border-0 border-b shadow-none focus-within:shadow-none focus-within:outline-none lg:px-6"
      >
        <svg
          class="size-5 shrink-0 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <g fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.96544 11.0261C9.13578 11.6382 8.11014 12 7 12C4.23858 12 2 9.76142 2 7C2 4.23858 4.23858 2 7 2C9.76142 2 12 4.23858 12 7C12 8.11014 11.6382 9.13578 11.0261 9.96544L13.7803 12.7197C14.0732 13.0126 14.0732 13.4874 13.7803 13.7803C13.4874 14.0732 13.0126 14.0732 12.7197 13.7803L9.96544 11.0261ZM10.5 7C10.5 8.933 8.933 10.5 7 10.5C5.067 10.5 3.5 8.933 3.5 7C3.5 5.067 5.067 3.5 7 3.5C8.933 3.5 10.5 5.067 10.5 7Z"
              fill="currentColor"
            ></path>
          </g>
        </svg>
        <input
          bind:this={searchInput}
          id="search-input"
          type="text"
          autocomplete="off"
          placeholder="Type to search..."
          bind:value={searchQuery}
        />
        {#if filteredResults.length > 0}
          <span class="badge badge-xs">
            {filteredResults.length} result{filteredResults.length === 1 ? "" : "s"}
          </span>
        {/if}
      </label>

      <div>
        <!-- Loading state -->
        {#if isSearchLoading}
          <div class="flex flex-col items-center justify-center gap-4 py-8">
            <span class="loading loading-spinner loading-md"></span>
            <span class="ml-2">Loading...</span>
          </div>
        {/if}

        <!-- Search results -->
        {#if !isSearchLoading && searchQuery.trim() && filteredResults.length > 0}
          <div data-sveltekit-preload-data class="px-2">
            {#each filteredResults as result, index}
              {@render searchResultItem(result, index, "search")}
            {/each}
          </div>
        {/if}

        <!-- No results message -->
        {#if !isSearchLoading && searchQuery.trim() && filteredResults.length === 0}
          <button
            class="text-base-content/60 block w-full appearance-none py-8 text-center"
            onclick={() => {
              const input = document.getElementById("search-input")
              if (input) input.focus()
            }}
          >
            <div class="mb-2 text-lg">
              <!-- animated balloon icon -->
              <svg
                class="bg-base-200 rounded-box text-base-content mx-auto size-[150px] p-2 lg:size-[180px]"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="150"
                viewBox="0 0 200 200"
              >
                <g
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                  stroke-width="2"
                  fill="none"
                >
                  <!-- Balloon body -->
                  <path
                    d="M20 8.93333C20 14 14.4615 18 12 18C9.53846 18 4 14 4 8.93333C4 5.10416 7.58172 2 12 2C16.4183 2 20 5.10416 20 8.93333Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="10,10; 80,20; 150,40; 180,80; 160,130; 100,170; 40,160; 10,120; 10,10"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <!-- Balloon inner lines -->
                  <path
                    d="M15 8.93333C15 14 12.9231 18 12 18C11.0769 18 9 14 9 8.93333C9 5.10416 10.3431 2 12 2C13.6569 2 15 5.10416 15 8.93333Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="10,10; 80,20; 150,40; 180,80; 160,130; 100,170; 40,160; 10,120; 10,10"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <!-- Balloon basket -->
                  <path
                    d="M9 20C9 19.535 9 19.3025 9.05111 19.1118C9.18981 18.5941 9.59413 18.1898 10.1118 18.0511C10.3025 18 10.535 18 11 18H13C13.465 18 13.6975 18 13.8882 18.0511C14.4059 18.1898 14.8102 18.5941 14.9489 19.1118C15 19.3025 15 19.535 15 20C15 20.465 15 20.6975 14.9489 20.8882C14.8102 21.4059 14.4059 21.8102 13.8882 21.9489C13.6975 22 13.465 22 13 22H11C10.535 22 10.3025 22 10.1118 21.9489C9.59413 21.8102 9.18981 21.4059 9.05111 20.8882C9 20.6975 9 20.465 9 20Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="10,10; 80,20; 150,40; 180,80; 160,130; 100,170; 40,160; 10,120; 10,10"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                    <!-- Slight swaying motion for the basket -->
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 12 20; 2 12 20; -1 12 20; 1 12 20; 0 12 20"
                      dur="15s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </path>
                </g>
              </svg>
            </div>
            <div class="mt-1 text-sm">We couldn't find anything captain!</div>
            <div class="mt-1 text-sm">Try a different word.</div>
          </button>
        {/if}

        <!-- Initial state - show recent/bookmarked items or popular components -->
        {#if !isSearchLoading && !searchQuery.trim() && filteredResults.length > 0}
          <div class="px-2 pb-2">
            <!-- Recent Searches Section -->
            {#if recentSearches.length > 0}
              <div
                class="text-base-content px-4 py-2 font-mono text-[0.625rem] tracking-wider uppercase opacity-40"
              >
                <svg
                  class="inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <g fill="currentColor">
                    <polygon
                      points="4.367 3.044 3.771 6.798 7.516 6.145 4.367 3.044"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      fill="currentColor"
                    ></polygon>
                    <polyline
                      points="10 7 10 10 12 12"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polyline>
                    <path
                      d="m5,5.101c1.271-1.297,3.041-2.101,5-2.101,3.866,0,7,3.134,7,7s-3.134,7-7,7c-3.526,0-6.444-2.608-6.929-6"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
                Recent Searches
              </div>
              {#each recentSearches as result, index}
                {@render searchResultItem(result, index, "recent")}
              {/each}
            {/if}

            <!-- Bookmarked Searches Section -->
            {#if bookmarkedSearches.length > 0}
              <div
                class="text-base-content px-4 py-2 font-mono text-[0.625rem] tracking-wider uppercase opacity-40"
                class:mt-4={recentSearches.length > 0}
              >
                <svg
                  class="inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                >
                  <g fill="currentColor">
                    <path
                      d="M8.529,15.222c.297,.155,.644,.155,.941,0,1.57-.819,6.529-3.787,6.529-8.613,.008-2.12-1.704-3.846-3.826-3.859-1.277,.016-2.464,.66-3.173,1.72-.71-1.06-1.897-1.704-3.173-1.72-2.123,.013-3.834,1.739-3.826,3.859,0,4.826,4.959,7.794,6.529,8.613Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                    ></path>
                  </g>
                </svg>
                Bookmarks
              </div>
              {#each bookmarkedSearches as result, index}
                {@const displayIndex = recentSearches.length + index}
                {@render searchResultItem(result, displayIndex, "bookmarked")}
              {/each}
            {/if}

            <!-- Popular Components (fallback when no recent/bookmarked) -->
            {#if recentSearches.length === 0 && bookmarkedSearches.length === 0}
              <div
                class="text-base-content px-4 py-2 font-mono text-[0.625rem] tracking-wider uppercase opacity-40"
              >
                <svg
                  class="inline-block size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
                    <path
                      d="M14.182,9.966S15.125,4.412,11.273,2A6.8,6.8,0,0,1,8.709,6.92C7.063,8.368,3.967,11.616,4,15.089a7.962,7.962,0,0,0,4.368,7.164,5.046,5.046,0,0,1,1.765-3.487A4.113,4.113,0,0,0,11.71,16a7.412,7.412,0,0,1,3.926,6.179V22.2a7.449,7.449,0,0,0,4.336-6.463A11.574,11.574,0,0,0,17.309,8"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="square"
                      stroke-miterlimit="10"
                      stroke-width="2"
                    ></path>
                  </g>
                </svg>
                Popular Pages
              </div>
              {#each filteredResults as result, index}
                {@render searchResultItem(result, index, "popular")}
              {/each}
            {/if}
          </div>
        {/if}
      </div>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
