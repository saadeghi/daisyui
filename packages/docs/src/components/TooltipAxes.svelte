<div class="my-6">
  <!-- Geometry of the tooltip custom properties: main axis (--tt-off/--tt-tail) vs cross axis (--tt-inset/--tt-tail-inset) -->
  <svg
    style="width: 100%; max-width: 520px; height: auto"
    viewBox="0 0 460 1020"
    xmlns="http://www.w3.org/2000/svg"
    font-family="ui-sans-serif, system-ui, sans-serif"
    font-size="12"
  >
    <defs>
      <marker
        id="tt-axes-ar"
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="6"
        markerHeight="6"
        orient="auto-start-reverse"
      >
        <path d="M0,0 L10,5 L0,10 z" fill="var(--color-primary)"></path>
      </marker>
    </defs>

    <!-- tooltip-top · start -->
    <text x="16" y="20" fill="currentColor" opacity="0.6" font-size="13">tooltip-top · start</text>
    <text x="16" y="36" fill="currentColor" opacity="0.6">(--tt-trans is 0 here)</text>
    <path d="M150,60 V240" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3 4"></path>
    <text x="120" y="62" fill="currentColor" opacity="0.6" text-anchor="end">start edge</text>
    <rect
      x="150"
      y="150"
      width="150"
      height="42"
      rx="6"
      fill="var(--color-base-100)"
      stroke="var(--color-base-300)"
    ></rect>
    <text x="225" y="176" fill="currentColor" text-anchor="middle">trigger</text>
    <rect x="174" y="70" width="160" height="34" rx="6" fill="currentColor"></rect>
    <text x="254" y="92" fill="var(--color-base-100)" text-anchor="middle">tooltip</text>
    <path d="M196,104 L218,104 L207,114 z" fill="currentColor"></path>
    <path
      d="M126,104 V150"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="120" y="131" fill="var(--color-primary)" text-anchor="end">--tt-off</text>
    <path
      d="M150,214 H174"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="152" y="206" fill="var(--color-primary)">--tt-inset</text>
    <path
      d="M290,114 V150"
      stroke="var(--color-primary)"
      stroke-dasharray="2 3"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="296" y="136" fill="var(--color-primary)">--tt-tail</text>
    <path
      d="M246,104 L268,104 L257,114 z"
      fill="none"
      stroke="var(--color-primary)"
      stroke-dasharray="2 2"
      opacity="0.5"
    ></path>
    <path d="M174,118 V134" stroke="currentColor" stroke-opacity="0.4"></path>
    <path
      d="M174,124 H196"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="192" y="118" fill="var(--color-primary)" text-anchor="end" font-size="11"
      >--tt-tail-off</text
    >
    <path
      d="M196,134 H246"
      stroke="var(--color-primary)"
      stroke-dasharray="2 3"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="200" y="146" fill="var(--color-primary)" font-size="11">--tt-tail-inset</text>

    <!-- tooltip-left · start -->
    <text x="16" y="290" fill="currentColor" opacity="0.6" font-size="13">tooltip-left · start</text
    >
    <text x="16" y="306" fill="currentColor" opacity="0.6">(--tt-trans is 0 here)</text>
    <path d="M40,330 H440" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3 4"></path>
    <text x="440" y="326" fill="currentColor" opacity="0.6" text-anchor="end">start edge</text>
    <rect
      x="360"
      y="330"
      width="80"
      height="42"
      rx="6"
      fill="var(--color-base-100)"
      stroke="var(--color-base-300)"
    ></rect>
    <text x="400" y="362" fill="currentColor" text-anchor="middle">trigger</text>
    <rect x="142" y="354" width="120" height="120" rx="6" fill="currentColor"></rect>
    <text x="202" y="418" fill="var(--color-base-100)" text-anchor="middle">tooltip</text>
    <path d="M262,374 L262,394 L272,384 z" fill="currentColor"></path>
    <path
      d="M262,424 L262,444 L272,434 z"
      fill="var(--color-primary)"
      fill-opacity="0.18"
      stroke="var(--color-primary)"
      stroke-width="1.5"
      stroke-dasharray="3 3"
    ></path>
    <path
      d="M262,312 H360"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="311" y="306" fill="var(--color-primary)" text-anchor="middle">--tt-off</text>
    <path
      d="M364,330 V354"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="370" y="342" fill="var(--color-primary)">--tt-inset</text>
    <path
      d="M272,384 H360"
      stroke="var(--color-primary)"
      stroke-dasharray="2 3"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="366" y="388" fill="var(--color-primary)">--tt-tail</text>
    <path d="M262,354 H276" stroke="currentColor" stroke-opacity="0.4"></path>
    <path
      d="M276,354 V374"
      stroke="var(--color-primary)"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="282" y="366" fill="var(--color-primary)">--tt-tail-off</text>
    <path
      d="M276,374 V424"
      stroke="var(--color-primary)"
      stroke-dasharray="2 3"
      marker-start="url(#tt-axes-ar)"
      marker-end="url(#tt-axes-ar)"
    ></path>
    <text x="284" y="400" fill="var(--color-primary)">--tt-tail-inset</text>

    <g transform="translate(0,80)">
      <!-- tooltip-top · default (centred): --tt-trans -->
      <text x="16" y="500" fill="currentColor" opacity="0.6" font-size="13"
        >tooltip-top · default (centred)</text
      >
      <path d="M230,540 V772" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3 4"
      ></path>
      <text x="236" y="556" fill="currentColor" opacity="0.6">anchor line (trigger centre)</text>
      <rect
        x="155"
        y="700"
        width="150"
        height="42"
        rx="6"
        fill="var(--color-base-100)"
        stroke="var(--color-base-300)"
      ></rect>
      <text x="230" y="726" fill="currentColor" text-anchor="middle">trigger</text>
      <rect x="145" y="620" width="170" height="34" rx="6" fill="currentColor"></rect>
      <text x="230" y="642" fill="var(--color-base-100)" text-anchor="middle">tooltip</text>
      <path
        d="M145,612 H315"
        stroke="currentColor"
        stroke-opacity="0.4"
        marker-start="url(#tt-axes-ar)"
        marker-end="url(#tt-axes-ar)"
      ></path>
      <text x="230" y="606" fill="currentColor" opacity="0.6" text-anchor="middle"
        >its own width</text
      >
      <path d="M230,654 V672" stroke="var(--color-primary)" stroke-dasharray="2 3"></path>
      <path
        d="M145,672 H230"
        stroke="var(--color-primary)"
        marker-start="url(#tt-axes-ar)"
        marker-end="url(#tt-axes-ar)"
      ></path>
      <text x="187" y="690" fill="var(--color-primary)" text-anchor="middle">--tt-trans: -50%</text>
      <text x="330" y="690" fill="currentColor" opacity="0.6">= half of it</text>

      <!-- tooltip-left · default (centred): --tt-trans on the vertical axis -->
      <text x="16" y="820" fill="currentColor" opacity="0.6" font-size="13"
        >tooltip-left · default (centred)</text
      >
      <path d="M40,881 H440" stroke="currentColor" stroke-opacity="0.4" stroke-dasharray="3 4"
      ></path>
      <text x="16" y="856" fill="currentColor" opacity="0.6">anchor line (trigger centre)</text>
      <rect
        x="300"
        y="860"
        width="140"
        height="42"
        rx="6"
        fill="var(--color-base-100)"
        stroke="var(--color-base-300)"
      ></rect>
      <text x="370" y="886" fill="currentColor" text-anchor="middle">trigger</text>
      <rect x="142" y="864" width="120" height="34" rx="6" fill="currentColor"></rect>
      <text x="202" y="886" fill="var(--color-base-100)" text-anchor="middle">tooltip</text>
      <path d="M262,874 L262,884 L272,879 z" fill="currentColor"></path>
      <path
        d="M126,864 V881"
        stroke="var(--color-primary)"
        marker-start="url(#tt-axes-ar)"
        marker-end="url(#tt-axes-ar)"
      ></path>
      <text x="120" y="874" fill="var(--color-primary)" text-anchor="end">--tt-trans: -50%</text>
      <text x="120" y="896" fill="currentColor" opacity="0.6" text-anchor="end"
        >= half its height</text
      >
    </g>
  </svg>
</div>
