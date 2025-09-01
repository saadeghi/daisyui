<script>
  let { markdownUrl, sourceCodeUrl } = $props()
  let clipboardState = $state("idle") // 'idle' | 'loading' | 'done'

  async function copyMarkdownFromUrl() {
    if (!markdownUrl) return
    clipboardState = "loading"
    try {
      const res = await fetch(markdownUrl)
      if (!res.ok) throw new Error("Failed to fetch markdown")
      const text = await res.text()
      await navigator.clipboard.writeText(text)
      clipboardState = "done"
      setTimeout(() => {
        clipboardState = "idle"
      }, 2000)
    } catch (e) {
      clipboardState = "loading"
      console.error("Failed to get the file. Please report this issue in GitHub.")
    }
  }
</script>

<div class="join">
  <button
    class="btn join-item btn-sm lg:min-w-28"
    aria-label="Copy markdown to clipboard"
    onclick={copyMarkdownFromUrl}
  >
    {#if clipboardState === "done"}
      <svg class="size-3.5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"> </rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <path d="m9 14 2 2 4-4"></path>
        </g>
      </svg>
      Copied!
    {:else if clipboardState === "loading"}
      <svg
        class="size-3.5 stroke-current/50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path>
          <path d="M16 4h2a2 2 0 0 1 2 2v4"></path>
          <path d="M21 14H11"></path>
          <path d="m15 10-4 4 4 4" class="stroke-current"></path>
        </g>
      </svg>
      Copy docs
    {:else}
      <svg class="size-3.5 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linejoin="round" stroke-linecap="round" stroke-width="2" fill="none">
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1"> </rect>
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        </g>
      </svg>
      Copy docs
    {/if}
  </button>

  <div class="dropdown dropdown-end not-prose">
    <div tabindex="0" class="join-item btn btn-square btn-sm -ms-[var(--border)]" role="button">
      <svg class="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.21967 8.21967C5.51256 7.92678 5.98744 7.92678 6.28033 8.21967L10 11.9393L13.7197 8.21967C14.0126 7.92678 14.4874 7.92678 14.7803 8.21967C15.0732 8.51256 15.0732 8.98744 14.7803 9.28033L10.5303 13.5303C10.3897 13.671 10.1989 13.75 10 13.75C9.80109 13.75 9.61032 13.671 9.46967 13.5303L5.21967 9.28033C4.92678 8.98744 4.92678 8.51256 5.21967 8.21967Z"
          fill="currentColor"
        >
        </path>
      </svg>
    </div>
    <ul
      tabindex="0"
      class="dropdown-content menu-sm menu bg-base-200 rounded-box my-2 w-52 border border-white/5 shadow-2xl outline-[length:var(--border)] outline-black/5"
    >
      <li>
        <a
          class="group"
          href={`https://chat.openai.com/?hints=search&q=I%20am%20using%20daisyUI%205.%0ARead%20this%20doc%20so%20I%20can%20ask%20questions%20about%20it.%0A%0A${encodeURIComponent(markdownUrl)}%0A`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="currentColor"
            class="h-3 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
            />
          </svg>
          Open in ChatGPT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="ms-1 inline-block size-3 fill-current opacity-0 group-hover:opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
            />
          </svg>
        </a>
      </li>
      <li>
        <a
          class="group"
          href={`https://claude.ai/new?q=I+am+using+daisyUI+5.%0ARead+this+doc+so+I+can+ask+questions+about+it.%0A%0A${encodeURIComponent(markdownUrl)}%0A`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            fill="currentColor"
            class="h-3 w-5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z"
            >
            </path>
          </svg>
          Open in Claude
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="ms-1 inline-block size-3 fill-current opacity-0 group-hover:opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
            />
          </svg>
        </a>
      </li>
      <li></li>
      <li>
        <a class="group" href={markdownUrl} target="_blank" rel="noopener noreferrer">
          <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path
              d="M25.674 9.221H6.326c-.899 0-1.63.731-1.63 1.63V21.72c0 .899.731 1.63 1.63 1.63h19.348c.899 0 1.63-.731 1.63-1.63V10.851c0-.899-.731-1.63-1.63-1.63zm-8.261 11.301l-2.826.003v-4.239l-2.12 2.717-2.12-2.717v4.239H7.521v-8.478h2.826l2.12 2.826 2.12-2.826 2.826-.003v8.478zm4.219.707l-3.512-4.943h2.119v-4.239h2.826v4.239h2.119l-3.553 4.943z"
            >
            </path>
          </svg>
          Markdown doc
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="ms-1 inline-block size-3 fill-current opacity-0 group-hover:opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
            />
          </svg>
        </a>
      </li>
      {#if sourceCodeUrl}
        <li>
          <a class="group" target="_blank" rel="noopener noreferrer" href={sourceCodeUrl}>
            <svg class="h-3.5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
                >
                </path>
              </g>
            </svg>
            Source code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="ms-1 inline-block size-3 fill-current opacity-0 group-hover:opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19,14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18.9971001,6.41421356 Z"
              />
            </svg>
          </a>
        </li>
      {/if}
      <li></li>

      <li>
        <a href="/docs/editor/">
          <svg
            width="18"
            height="18"
            viewBox="0 0 48 48"
            class="h-3.5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7H16C20.4183 7 24 10.5817 24 15V42C24 38.6863 21.3137 36 18 36H5V7Z"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linejoin="bevel"
            >
            </path>
            <path
              d="M43 7H32C27.5817 7 24 10.5817 24 15V42C24 38.6863 26.6863 36 30 36H43V7Z"
              fill="none"
              stroke="currentColor"
              stroke-width="5"
              stroke-linejoin="bevel"
            >
            </path>
          </svg>
          How to use LLMs?
        </a>
      </li>
    </ul>
  </div>
</div>
