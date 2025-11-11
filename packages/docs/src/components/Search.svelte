<script>
  import { onMount } from "svelte"

  // Search functionality
  let searchData = $state([])
  let searchQuery = $state("")
  let isSearchLoading = $state(false)
  let selectedIndex = $state(-1) // -1 means input is focused, 0+ means result item is focused
  let debounceTimer
  // eslint-disable-next-line no-unassigned-vars
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
    // Normalize for dash, underscore, parentheses, comma, and case
    const normalize = (str) =>
      str
        .toLowerCase()
        .replace(/[-_,()]/g, " ")
        .replace(/\s+/g, " ")
        .trim()
    const normalizedQuery = normalize(query)
    if (!normalizedQuery) {
      return false
    }

    // Check normalized title
    if (normalize(item.title).includes(normalizedQuery)) {
      return true
    }

    // Check normalized classnames (only for page items)
    if (
      item.classnames &&
      normalize(item.classnames).includes(normalizedQuery) &&
      !item.url.includes("#")
    ) {
      return true
    }

    // Check normalized URL words
    const urlWords = extractWordsFromUrl(item.url).map(normalize)
    const urlMatch = urlWords.some((word) => word.includes(normalizedQuery))
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

  // Debounced input handler
  function handleSearchInput(event) {
    clearTimeout(debounceTimer)
    debounceTimer = setTimeout(() => {
      searchQuery = event.target.value
    }, 100)
  }

  // Derived state for filtered results
  let filteredResults = $derived.by(() => {
    // Normalize the search query by trimming whitespace and collapsing multiple spaces
    const normalizedQuery = searchQuery.trim().replace(/\s+/g, " ")

    if (!normalizedQuery || normalizedQuery.length <= 1) {
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
    for (const item of matchingItems) {
      if (!seenUrls.has(item.url)) {
        seenUrls.add(item.url)
        uniqueItems.push({
          ...item,
          highlightedTitle: highlightSearchTerms(item.title, normalizedQuery),
          highlightedUrl: highlightSearchTerms(item.url, normalizedQuery),
        })
      }
    }

    return uniqueItems.sort((a, b) => {
      const query = normalizedQuery.toLowerCase()

      // 1. Pages before sections (pages don't have # in URL) - HIGHEST PRIORITY
      const aIsPage = !a.url.includes("#")
      const bIsPage = !b.url.includes("#")
      if (aIsPage !== bIsPage) {
        return aIsPage ? -1 : 1 // Pages first
      }

      // Normalize for dash, underscore, parentheses, comma
      const normalize = (str) =>
        str
          .toLowerCase()
          .replace(/[-_,()]/g, " ")
          .replace(/\s+/g, " ")
          .trim()
      const normQuery = normalize(query)
      const aNormTitle = normalize(a.title)
      const bNormTitle = normalize(b.title)

      // 2. Title match priority: exact normalized title match > partial normalized title match > exact section title match > class name match
      const aExactTitleMatch = aNormTitle === normQuery
      const bExactTitleMatch = bNormTitle === normQuery
      if (aExactTitleMatch !== bExactTitleMatch) {
        return aExactTitleMatch ? -1 : 1
      }

      // Partial normalized title match (query is contained in normalized title)
      const aPartialTitleMatch = aNormTitle.includes(normQuery)
      const bPartialTitleMatch = bNormTitle.includes(normQuery)
      if (aPartialTitleMatch !== bPartialTitleMatch) {
        return aPartialTitleMatch ? -1 : 1
      }

      // Section title match (for sections only)
      const aSectionTitleMatch =
        a.isSection && a.parentPageTitle && a.parentPageTitle.toLowerCase() === query
      const bSectionTitleMatch =
        b.isSection && b.parentPageTitle && b.parentPageTitle.toLowerCase() === query
      if (aSectionTitleMatch !== bSectionTitleMatch) {
        return aSectionTitleMatch ? -1 : 1
      }

      // Class name match (only for pages)
      const aClassNameMatch = a.classnames && aIsPage && a.classnames.toLowerCase().includes(query)
      const bClassNameMatch = b.classnames && bIsPage && b.classnames.toLowerCase().includes(query)
      if (aClassNameMatch !== bClassNameMatch) {
        return aClassNameMatch ? -1 : 1
      }

      // If both are class name matches, prioritize:
      // 1. classnames that start with the query
      // 2. classnames that contain the query as a full word (not just substring)
      if (aClassNameMatch && bClassNameMatch) {
        const aClassnames = a.classnames.toLowerCase()
        const bClassnames = b.classnames.toLowerCase()
        const aStartsWith = aClassnames.startsWith(query)
        const bStartsWith = bClassnames.startsWith(query)
        if (aStartsWith !== bStartsWith) {
          return aStartsWith ? -1 : 1
        }
        // Check for full word match
        const aWords = aClassnames.split(/\s+/)
        const bWords = bClassnames.split(/\s+/)
        const aFullWord = aWords.includes(query)
        const bFullWord = bWords.includes(query)
        if (aFullWord !== bFullWord) {
          return aFullWord ? -1 : 1
        }
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

  // Derived state for displayed results (limited to 20 items)
  let displayedResults = $derived(filteredResults.slice(0, 20))

  // Update selected index when displayed results change
  $effect(() => {
    selectedIndex = displayedResults.length > 0 ? 0 : -1
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
  // eslint-disable-next-line no-unassigned-vars
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
      if (displayedResults.length === 0) return

      if (selectedIndex < displayedResults.length - 1) {
        selectedIndex++
      } else {
        // Loop back to first item
        selectedIndex = 0
      }
      scrollToSelectedItem()
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      if (displayedResults.length === 0) return

      if (selectedIndex > 0) {
        selectedIndex--
      } else {
        // Loop to last result
        selectedIndex = displayedResults.length - 1
      }
      scrollToSelectedItem()
    } else if (event.key === "Enter") {
      event.preventDefault()
      if (displayedResults.length === 0) return

      // Use the currently selected item (selectedIndex should always be valid when there are results)
      if (displayedResults[selectedIndex]) {
        addToRecentSearches(displayedResults[selectedIndex])
        window.location.href = displayedResults[selectedIndex].url
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
              classnames: parts[2]?.replace(/^"|"$/g, "") || "",
            }
          })
          .filter((item) => item.title && item.url)
      }

      // Parse initial data
      const initialResults = parseCSVData(initialSearchCSV)

      let csvResults = []
      try {
        const today = new Date().toISOString().slice(0, 10)
        const response = await fetch(`/search.csv?t=${today}`)
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
    // Don't trigger shortcuts if user is typing in an input/textarea or contenteditable element
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA" ||
      event.target.isContentEditable
    ) {
      return
    }

    // Cmd+K or Ctrl+K to open search
    if ((event.metaKey || event.ctrlKey) && event.key === "k") {
      event.preventDefault()
      openSearchModal()
    }

    // Pressing / to open search
    if (event.key === "/") {
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
      class="has-[a:focus-visible]:bg-neutral rounded-box aria-selected:bg-neutral aria-selected:text-neutral-content flex w-full items-center pe-4"
      role="option"
      tabindex="-1"
      aria-selected={isSelected}
      onmouseenter={() => {
        selectedIndex = index
      }}
      onfocuscapture={() => {
        selectedIndex = index
      }}
    >
      <a
        href={result.url}
        class="flex min-w-0 flex-1 cursor-pointer appearance-none items-center py-4 ps-4 focus-visible:outline-none"
        onclick={() => handleResultClick(result)}
      >
        {@render resultContent(result)}
      </a>
      <div class="ml-2 flex w-13 justify-end gap-1">
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
      class="has-[a:focus-visible]:bg-neutral focus-visible:bg-neutral rounded-box focus-visible:text-neutral-content aria-selected:bg-neutral aria-selected:text-neutral-content flex w-full items-center p-4 focus-visible:outline-none"
      href={result.url}
      tabindex="0"
      aria-selected={isSelected}
      onmouseenter={() => {
        selectedIndex = index
      }}
      onfocuscapture={() => {
        selectedIndex = index
      }}
      onclick={() => handleResultClick(result)}
    >
      {@render resultContent(result)}
    </a>
  {/if}
{/snippet}

{#snippet resultContent(result)}
  <!-- icons -->
  <div class="shrink-0 ps-3 pe-8 max-lg:hidden">
    {#if result.url.startsWith("/docs/install")}
      <svg
        class="size-4 text-orange-400"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke="currentColor"
      >
        <path
          d="M26 6H9C7.34315 6 6 7.34315 6 9V31C6 32.6569 7.34315 34 9 34H39C40.6569 34 42 32.6569 42 31V25"
        ></path>
        <path d="M24 34V42"></path>
        <path d="M14 42L34 42"></path>
        <path d="M32 13L37 18L42 13"></path>
        <path d="M37 6L37 18"></path>
      </svg>
    {:else if result.url.startsWith("/docs/faq")}
      <svg class="size-4 text-orange-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="currentColor" stroke-linejoin="miter" stroke-linecap="butt">
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
          ></circle>
          <circle cx="12" cy="17.25" r="1.25" fill="currentColor" stroke-width="2"></circle>
          <path
            d="m9.244,8.369c.422-1.608,1.733-2.44,3.201-2.364,1.45.075,2.799.872,2.737,2.722-.089,2.63-2.884,2.273-3.197,4.773h.011"
            fill="none"
            stroke="currentColor"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="2"
          ></path>
        </g>
      </svg>
    {:else if result.url.startsWith("/docs/")}
      <svg
        width="18"
        height="18"
        viewBox="0 0 48 48"
        class="size-4 text-orange-400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="bevel"
        >
        </path>
      </svg>
    {:else if result.url.startsWith("/components/")}
      <svg
        class="size-4 text-green-600"
        width="18"
        height="18"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 29H6V43H20V29Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M24 4L34 21H14L24 4Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M36 44C40.4183 44 44 40.4183 44 36C44 31.5817 40.4183 28 36 28C31.5817 28 28 31.5817 28 36C28 40.4183 31.5817 44 36 44Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
      </svg>
    {:else if result.url.startsWith("/theme-generator/")}
      <svg
        class="size-4 text-fuchsia-400"
        width="18"
        height="18"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.1005 8.1005L24.3431 12.3431M30 4V10V4ZM39.8995 8.1005L35.6569 12.3431L39.8995 8.1005ZM44 18H38H44ZM39.8995 27.8995L35.6569 23.6569L39.8995 27.8995ZM30 32V26V32ZM20.1005 27.8995L24.3431 23.6569L20.1005 27.8995ZM16 18H22H16Z"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M29.5856 18.4143L5.54395 42.4559"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
      </svg>
    {:else if result.url.startsWith("/store/")}
      <svg
        class="size-4 text-blue-400"
        width="16"
        height="16"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.0391 22V42H8.03906V22"
          stroke="currentColor"
          stroke-width="4"
          stroke-linecap="butt"
          stroke-linejoin="bevel"
        >
        </path>
        <path
          d="M5.84231 13.7766C4.31276 17.7377 7.26307 22 11.5092 22C14.8229 22 17.5276 19.3137 17.5276 16C17.5276 19.3137 20.2139 22 23.5276 22H24.546C27.8597 22 30.546 19.3137 30.546 16C30.546 19.3137 33.2518 22 36.5655 22C40.8139 22 43.767 17.7352 42.2362 13.7723L39.2337 6H8.84523L5.84231 13.7766Z"
          fill="none"
          stroke="currentColor"
          stroke-width="4"
          stroke-linejoin="bevel"
        >
        </path>
      </svg>
    {:else}
      <svg class="size-4 text-pink-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          fill="none"
          d="M19.5 14.25V11.625C19.5 9.76104 17.989 8.25 16.125 8.25H14.625C14.0037 8.25 13.5 7.74632 13.5 7.125V5.625C13.5 3.76104 11.989 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.00368 2.25 4.5 2.75368 4.5 3.375V20.625C4.5 21.2463 5.00368 21.75 5.625 21.75H18.375C18.9963 21.75 19.5 21.2463 19.5 20.625V11.25C19.5 6.27944 15.4706 2.25 10.5 2.25Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    {/if}
  </div>
  <div class="grid w-full items-center gap-2 md:grid-cols-5">
    <div class="col-span-3 text-sm">
      {#if result.isSection}
        <span class="text-[0.625rem] opacity-60">{result.parentPageTitle}</span>
      {/if}
      <span class="block">
        {#if result.highlightedTitle}
          {@html result.highlightedTitle}
        {:else}
          {result.title}
        {/if}
      </span>
    </div>
    <div
      class="col-span-2 truncate pt-1 font-mono text-[0.625rem] tracking-tighter opacity-25 lg:tracking-wide"
    >
      {#if result.highlightedUrl}
        {@html result.highlightedUrl.replace(/^\/|\/$/g, "")}
      {:else}
        {result.url.replace(/^\/|\/$/g, "")}
      {/if}
    </div>
  </div>
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
    class="modal-box relative max-w-4xl p-0 max-md:h-[85vh] md:mt-[10vh] md:h-[clamp(13rem,80vh,80vh)] md:w-11/12"
  >
    <div
      class="rounded-box h-full overflow-y-auto [scrollbar-width:thin]"
      style="scroll-padding-top: 3.5rem;"
    >
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
          value={searchQuery}
          oninput={handleSearchInput}
        />

        {#if isSearchLoading}
          <span class="loading loading-dots loading-xs"></span>
        {:else if filteredResults.length > 0}
          <span class="badge badge-xs">
            {filteredResults.length} result{filteredResults.length === 1 ? "" : "s"}
          </span>
        {/if}
      </label>

      <div class="pb-2 lg:pt-2 lg:pb-6">
        <!-- Search results -->
        {#if !isSearchLoading && searchQuery.trim() && searchQuery.trim().length > 1 && filteredResults.length > 0}
          <div data-sveltekit-preload-data class="px-2 lg:px-6">
            {#each displayedResults as result, index}
              {@render searchResultItem(result, index, "search")}
            {/each}
          </div>
        {/if}

        <!-- No results message -->
        {#if !isSearchLoading && searchQuery.trim() && searchQuery.trim().length > 1 && filteredResults.length === 0}
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
        {#if (!searchQuery.trim() || searchQuery.trim().length <= 1) && filteredResults.length > 0}
          <div class="px-2 lg:px-6">
            <!-- Recent Searches Section -->
            {#if recentSearches.length > 0}
              <div
                class="text-base-content px-4 py-2 font-mono text-[0.625rem] tracking-wider uppercase opacity-40"
              >
                <svg
                  class="inline-block size-4"
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
                  class="inline-block size-4"
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
                  class="inline-block size-4"
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
              {#each displayedResults as result, index}
                {@render searchResultItem(result, index, "popular")}
              {/each}
            {/if}
          </div>
        {/if}

        {#if isSearchLoading}
          {#each Array(3) as _}
            <div class="rounded-boxflex w-full items-center p-4">
              <div class="flex min-w-0 flex-1 items-center">
                <div class="skeleton me-4 size-14 rounded"></div>
                <div>
                  <div class="skeleton mb-2 h-6 w-20 rounded"></div>
                  <div class="skeleton h-4 w-40 rounded"></div>
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
