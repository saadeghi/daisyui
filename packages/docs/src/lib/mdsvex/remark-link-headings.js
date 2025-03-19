import { visit } from "unist-util-visit"

export function remarkLinkHeadings() {
  return (tree) => {
    visit(tree, "heading", (node) => {
      if (node.depth >= 2) {
        // Collect text from text nodes for the ID
        let headingText = ""
        node.children.forEach((child) => {
          if (child.type === "text") {
            headingText += child.value
          } else if (child.type === "html" && child.value.includes('<Translate text="')) {
            // Extract text from Translate component
            const match = child.value.match(/<Translate text="([^"]+)"/)
            if (match && match[1]) {
              headingText += match[1].replace(/&quot;/g, '"')
            }
          }
        })

        // Create id from heading text
        const id = headingText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-")

        // Create the link icon element wrapped in an anchor tag
        const linkIconWithAnchor = {
          type: "html",
          value: `<a href="#${id}" class="no-underline">
            <span class="heading-anchorlink-icon bg-base-content/5 hover:bg-primary/10 size-[1em] text-base-content/30 hover:text-primary/50 rounded-field border border-base-content/5 hover:border-primary/20 inline-grid place-content-center hover:shadow-sm hover:shadow-base-200 align-text-bottom me-3 lg:absolute lg:ms-[-1.5em] lg:mt-1 transition-all group">
              <svg class="group-hover:scale-100 scale-90 transition-transform" fill="currentColor" width=".5em" height=".5em" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                <path d="M216,148H172V108h44a12,12,0,0,0,0-24H172V40a12,12,0,0,0-24,0V84H108V40a12,12,0,0,0-24,0V84H40a12,12,0,0,0,0,24H84v40H40a12,12,0,0,0,0,24H84v44a12,12,0,0,0,24,0V172h40v44a12,12,0,0,0,24,0V172h44a12,12,0,0,0,0-24Zm-108,0V108h40v40Z"/>
              </svg>
            </span>
          </a>`,
        }

        // Add the link icon at the beginning of the heading
        node.children.unshift(linkIconWithAnchor)

        // Add id to the heading for linking
        if (!node.data) node.data = {}
        if (!node.data.hProperties) node.data.hProperties = {}
        node.data.hProperties.id = id
      }
    })
  }
}
