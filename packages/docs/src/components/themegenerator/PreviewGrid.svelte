<script>
  const componentGrid = {
    button: {
      element: "button",
      icon: true,
      baseClass: "btn",
      types: [
        "",
        // "btn-outline",
        // "btn-dash",
        // "btn-soft"
      ],
      colors: [
        "",
        "btn-primary",
        "btn-secondary",
        "btn-accent",
        "btn-info",
        "btn-success",
        "btn-warning",
        "btn-error",
        "btn-ghost",
      ],
      sizes: ["btn-xl", "btn-lg", "btn-md", "btn-sm", "btn-xs"],
      label: "Button",
    },
    badge: {
      element: "button",
      icon: true,
      baseClass: "badge",
      types: [
        "",
        // "badge-outline",
        // "badge-dash",
        // "badge-soft"
      ],
      colors: [
        "",
        "badge-primary",
        "badge-secondary",
        "badge-accent",
        "badge-info",
        "badge-success",
        "badge-warning",
        "badge-error",
      ],
      sizes: ["badge-xl", "badge-lg", "badge-md", "badge-sm", "badge-xs"],
      label: "Badge",
    },
    input: {
      element: "input",
      icon: false,
      baseClass: "input max-w-32",
      types: [""],
      colors: [
        "",
        "input-primary",
        "input-secondary",
        "input-accent",
        "input-info",
        "input-success",
        "input-warning",
        "input-error",
      ],
      sizes: ["input-xl", "input-lg", "input-md", "input-sm", "input-xs"],
      label: false,
      attributes: {
        type: "text",
        placeholder: "Input",
      },
    },
    toggle: {
      element: "input",
      icon: false,
      baseClass: "toggle",
      types: [""],
      colors: [
        "",
        "toggle-primary",
        "toggle-secondary",
        "toggle-accent",
        "toggle-info",
        "toggle-success",
        "toggle-warning",
        "toggle-error",
      ],
      sizes: ["toggle-xl", "toggle-lg", "toggle-md", "toggle-sm", "toggle-xs"],
      label: false,
      attributes: {
        type: "checkbox",
        checked: "checked",
      },
    },
    checkbox: {
      element: "input",
      icon: false,
      baseClass: "checkbox",
      types: [""],
      colors: [
        "",
        "checkbox-primary",
        "checkbox-secondary",
        "checkbox-accent",
        "checkbox-info",
        "checkbox-success",
        "checkbox-warning",
        "checkbox-error",
      ],
      sizes: ["checkbox-xl", "checkbox-lg", "checkbox-md", "checkbox-sm", "checkbox-xs"],
      label: false,
      attributes: {
        type: "checkbox",
        checked: "checked",
      },
    },
    radio: {
      element: "input",
      icon: false,
      baseClass: "radio",
      types: [""],
      colors: [
        "",
        "radio-primary",
        "radio-secondary",
        "radio-accent",
        "radio-info",
        "radio-success",
        "radio-warning",
        "radio-error",
      ],
      sizes: ["radio-xl", "radio-lg", "radio-md", "radio-sm", "radio-xs"],
      label: false,
      attributes: {
        type: "radio",
        checked: "checked",
      },
    },
    // range: {
    //   element: "input",
    //   icon: false,
    //   baseClass: "range max-w-28",
    //   types: [""],
    //   colors: [
    //     "",
    //     "range-primary",
    //     "range-secondary",
    //     "range-accent",
    //     "range-info",
    //     "range-success",
    //     "range-warning",
    //     "range-error",
    //   ],
    //   sizes: ["range-xl", "range-lg", "range-md", "range-sm", "range-xs"],
    //   label: false,
    //   attributes: {
    //     type: "range",
    //     min: 0,
    //     max: 100,
    //     value: 50,
    //   },
    // },
    alert: {
      element: "div",
      icon: true,
      baseClass: "alert",
      types: [
        "",
        // "alert-outline",
        // "alert-dash",
        // "alert-soft"
      ],
      colors: [""],
      sizes: ["alert-info", "alert-success", "alert-warning", "alert-error"],
      label: "4 New Messages",
      content: "<button class='btn btn-xs'>View</button>",
    },
    text: {
      element: "div",
      icon: false,
      baseClass: "w-full rounded-box p-12",
      types: [""],
      colors: [
        "bg-base-100 text-base-content",
        "bg-primary text-primary-content",
        "bg-secondary text-secondary-content",
        "bg-accent text-accent-content",
        "bg-neutral text-neutral-content",
        "bg-info text-info-content",
        "bg-success text-success-content",
        "bg-warning text-warning-content",
        "bg-error text-error-content",
      ],
      sizes: [""],
      label: "",
      content:
        "<div class='text-xs'>Daisy grows happily under the warm sunlight</div><div class='text-sm'>Daisy grows happily under the warm sunlight</div><div class='text-md'>Daisy grows happily under the warm sunlight</div><div class='text-lg'>Daisy grows happily under the warm sunlight</div><div class='text-xl font-semibold'>Daisy grows happily under the warm sunlight</div><div class='text-2xl font-bold'>Daisy grows happily under the warm sunlight</div><div class='text-3xl font-black'>Daisy grows happily under the warm sunlight</div>",
    },
  }
</script>

<h3 class="font-bold text-lg px-2 my-4">Component Variants</h3>
<div>
  {#each Object.entries(componentGrid) as [key, { element, icon, baseClass, types, colors, sizes, label, attributes, content }]}
    <h5 class="font-semibold py-2 px-3 mt-10">{key}</h5>
    {#each types as type}
      {#if type}
        <h5 class="font-semibold py-2 px-3 mt-10">{type}</h5>
      {/if}
      {#each colors as color}
        <div class="flex flex-wrap gap-3 my-6">
          {#each sizes as size}
            {#if element === "input"}
              <svelte:element
                this={element}
                class="{baseClass} {size} {color} {type}"
                {...attributes}
              />
            {:else}
              <svelte:element
                this={element}
                class="{baseClass} {size} {color} {type}"
                {...attributes}
              >
                {#if icon}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="size-[1em]"
                  >
                    <path
                      d="m9.653 16.915-.005-.003-.019-.01a20.759 20.759 0 0 1-1.162-.682 22.045 22.045 0 0 1-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 0 1 8-2.828A4.5 4.5 0 0 1 18 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 0 1-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 0 1-.69.001l-.002-.001Z"
                    />
                  </svg>
                {/if}
                {#if label}
                  {label}
                {/if}
                {#if content}
                  <div>{@html content}</div>
                {/if}
              </svelte:element>
            {/if}
          {/each}
        </div>
      {/each}
    {/each}
  {/each}
</div>
