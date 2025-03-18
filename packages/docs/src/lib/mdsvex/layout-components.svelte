<script>
  import { page } from "$app/stores"
  import AlternativeSidebar from "$components/AlternativeSidebar.svelte"
  import ComponentFooter from "$components/ComponentFooter.svelte"
  import PrefixEdit from "$components/PrefixEdit.svelte"
  import BrowserSupport from "$components/BrowserSupport.svelte"
  import ComponentPageTabs from "$components/ComponentPageTabs.svelte"
  import SEO from "$components/SEO.svelte"
  import { prefix } from "$lib/stores"
  import { t } from "$lib/i18n.svelte.js"
  let { data, title, desc, classnames, browserSupport, showComponentPageTabs, alert, children } =
    $props()
</script>

<SEO
  title={`Tailwind ${title} ${$t("Component")}`}
  desc={`Tailwind ${title} examples: ${desc} component`}
  img={`https://img.daisyui.com/images${$page.url.pathname.replace(/\/$/, "")}.webp`}
/>

<div class="flex flex-col-reverse justify-between gap-6 xl:flex-row">
  <div class="prose prose-sm md:prose-base w-full max-w-4xl grow pt-10">
    {#if title}
      <h1>{@html $t(title)}</h1>
    {/if}
    {#if desc}
      <p>{@html $t(desc)}</p>
    {/if}
    {#if import.meta.env.DEV && showComponentPageTabs}
      <ComponentPageTabs />
    {/if}
    {#if browserSupport}
      <BrowserSupport data={browserSupport} />
    {/if}
    {#if alert}
      <div class="alert alert-warning">
        {alert}
      </div>
    {/if}
    {#if classnames}
      <div class="not-prose relative mt-6 mb-10 max-h-[25rem] overflow-x-auto">
        <table class="table-xs md:table-sm table-pin-rows table w-full">
          <thead>
            <tr class="border-b-0">
              <th class="bg-base-200 rounded-s-box flex items-center gap-2 lg:py-3">
                <PrefixEdit />
                <span>{@html $t("Class name")}</span>
              </th>
              <th class="bg-base-200 lg:py-3">{@html $t("Type")}</th>
              <th class="bg-base-200 rounded-e-box lg:py-3"></th>
            </tr>
          </thead>
          <tbody>
            {#if $prefix}
              <tr>
                <td colspan="3" class="!px-0">
                  <div
                    class="text-info-content bg-info relative inline-flex items-center gap-2 rounded-lg p-2 px-3"
                  >
                    <svg
                      class="fill-info absolute -top-1.5 left-8 scale-x-150"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="8"
                      viewBox="0 0 512 512"
                    >
                      <polygon points="256 32 20 464 492 464 256 32"></polygon>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="stroke-info-content h-4 w-4 shrink-0"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      >
                      </path>
                    </svg>
                    <div class="text-xs">
                      {@html $t(
                        "To use a custom prefix, <a class='link' href='/docs/config/#prefix'>add your prefix string to config</a>",
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            {/if}
            {#each Object.entries(classnames) as [type, items]}
              {#each items as item}
                <tr>
                  <th class="w-3/12 font-normal">
                    <span class="font-mono whitespace-nowrap lowercase">
                      {item.ignoreprefix ? "" : $prefix}{item.class}
                    </span>
                  </th>
                  <td class="w-1/12">
                    {#if type == "component"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Main component class")}
                      >
                        <span class="badge badge-sm badge-soft whitespace-nowrap">
                          {@html $t("Component")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "modifier"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Modifies behavior of component or part")}
                      >
                        <span class="badge badge-info badge-sm badge-soft whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                              ></path></g
                            ></svg
                          >
                          {@html $t("Modifier")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "part"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Part of a component")}
                      >
                        <span class="badge badge-soft badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
                              ></path></g
                            ></svg
                          >
                          {@html $t("Part")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "style"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Visual style of component or part")}
                      >
                        <span class="badge badge-soft badge-error badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="size-3"
                            ><g fill="currentColor"
                              ><circle
                                cx="13.5"
                                cy="6"
                                r="3.25"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></circle><rect
                                x="4.75"
                                y="10.75"
                                width="5.5"
                                height="5.5"
                                rx="1"
                                ry="1"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></rect><path
                                d="M3.818,1.99L1.189,6.498c-.194,.333,.046,.752,.432,.752H6.879c.386,0,.626-.419,.432-.752L4.682,1.99c-.193-.331-.671-.331-.864,0Z"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                              ></path></g
                            ></svg
                          >
                          {@html $t("Style")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "behavior"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Behavioural style of component or part")}
                      >
                        <span class="badge badge-soft badge-info badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
                              ></path><circle cx="12" cy="12" r="3"></circle></g
                            ></svg
                          >
                          {@html $t("Behavior")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "color"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("color of component or part")}
                      >
                        <span class="badge badge-soft badge-success badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
                              ></path><path d="m5 2 5 5"></path><path d="M2 13h15"></path><path
                                d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
                              ></path></g
                            ></svg
                          >
                          {@html $t("Color")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "size"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("size of component or part")}
                      >
                        <span class="badge badge-soft badge-warning badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="M12 19.875c0 .621 -.512 1.125 -1.143 1.125h-5.714a1.134 1.134 0 0 1 -1.143 -1.125v-15.875a1 1 0 0 1 1 -1h5.857c.631 0 1.143 .504 1.143 1.125z"
                              ></path><path d="M12 9h-2"></path><path d="M12 6h-3"></path><path
                                d="M12 12h-3"
                              ></path><path d="M12 18h-3"></path><path d="M12 15h-2"></path><path
                                d="M21 3h-4"
                              ></path><path d="M19 3v18"></path><path d="M21 21h-4"></path></g
                            ></svg
                          >
                          {@html $t("Size")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "placement"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Placement of component or part")}
                      >
                        <span class="badge badge-soft badge-primary badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g
                              stroke-linejoin="round"
                              stroke-linecap="round"
                              stroke-width="2"
                              fill="none"
                              stroke="currentColor"
                              ><path
                                d="M3 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                                fill="currentColor"
                              ></path><path
                                d="M3 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                              ></path><path
                                d="M17 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                              ></path><path
                                d="M17 17m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"
                              ></path><path d="M11 5h2"></path><path d="M5 11v2"></path><path
                                d="M19 11v2"
                              ></path><path d="M11 19h2"></path></g
                            ></svg
                          >
                          {@html $t("Placement")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "direction"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("Direction of component or part")}
                      >
                        <span class="badge badge-soft badge-secondary badge-sm whitespace-nowrap">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="size-3"
                            ><g fill="currentColor"
                              ><path
                                d="M9,1H3A2,2 0 0,0 1,3V16A2,2 0 0,0 3,18H9A2,2 0 0,0 11,16V3A2,2 0 0,0 9,1M9,15H3V3H9V15M21,13H13V15H21V21H9V20H6V21A2,2 0 0,0 8,23H21A2,2 0 0,0 23,21V15A2,2 0 0,0 21,13M23,10L19,8L20.91,7.09C19.74,4.31 17,2.5 14,2.5V1A9,9 0 0,1 23,10Z"
                              ></path></g
                            ></svg
                          >
                          {@html $t("direction")}
                        </span>
                      </div>
                    {/if}
                    {#if type == "variable"}
                      <div
                        class="tooltip cursor-help before:text-[0.6875rem]"
                        data-tip={$t("CSS variable")}
                      >
                        <span class="badge badge-soft badge-info badge-sm whitespace-nowrap">
                          {@html $t("CSS variable")}
                        </span>
                      </div>
                    {/if}
                  </td>
                  <td class="w-8/12 min-w-[20rem]">
                    {item.desc}
                    {#if item.default}
                      <span class="text-base-content/30 text-xs">[Default]</span>
                    {/if}
                  </td>
                </tr>
              {/each}
            {/each}
          </tbody>
        </table>
        <div
          class="bg-base-100 pointer-events-none sticky bottom-0 -mt-6 flex h-16 [mask-image:linear-gradient(transparent,#000000)]"
        ></div>
      </div>
    {/if}
    {@render children?.()}
    <ComponentFooter pages={data.pages} />
  </div>
  <AlternativeSidebar />
</div>
