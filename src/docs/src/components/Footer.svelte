<script>
  import Sponsors from "@components/Sponsors.svelte"
  import { t } from "@src/lib/i18n"

  const newtabicon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="inline-block w-4 fill-current opacity-0 group-hover:opacity-50"><path fill-rule="evenodd" d="M19,14 L19,19 C19,20.1045695 18.1045695,21 17,21 L5,21 C3.8954305,21 3,20.1045695 3,19 L3,7 C3,5.8954305 3.8954305,5 5,5 L10,5 L10,7 L5,7 L5,19 L17,19 L17,14 L19 14 Z M18.9971001,6.41421356 L11.7042068,13.7071068 L10.2899933,12.2928932 L17.5828865,5 L12.9971001,5 L12.9971001,3 L20.9971001,3 L20.9971001,11 L18.9971001,11 L18 9971001,6.41421356 Z" /></svg>`
</script>

<div>
  <div class="bg-base-100 text-base-content">
    <footer class="footer mx-auto max-w-6xl px-4 py-20">
      <div>
        <div class="font-title inline-flex text-3xl font-black">
          <span class="text-primary lowercase">daisy</span>
          <span class="text-base-content uppercase">UI</span>
        </div>
        <p class="opacity-50">
          {@html $t("footer-tagline")}
        </p>
        <p>
          <a href="/docs/changelog" class="link link-hover">
            {$t("changelog")}
          </a>
          –
          <a
            target="_blank"
            rel="noopener, noreferrer"
            href="https://github.com/saadeghi/daisyui/blob/master/LICENSE"
            class="link link-hover group">
            {$t("license")}
            {@html newtabicon}
          </a>
        </p>
      </div>
      <div>
        <span class="footer-title">{$t("pages")}</span>
        <a href="/docs/install" class="link link-hover">{$t("how-to-install")}</a>
        <a href="/docs/use" class="link link-hover">{$t("how-to-use-components")}</a>
        <a href="/docs/customize" class="link link-hover">{$t("how-to-customize")}</a>
        <a href="/docs/themes" class="link link-hover">{$t("how-to-use-themes")}</a>
        <a href="/docs/colors" class="link link-hover">{$t("color-system")}</a>
        <a href="/docs/config" class="link link-hover">{$t("config")}</a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md"
          class="link link-hover group">
          {$t("contributing")}
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title">{$t("available-on")}</span>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/daisyui"
          class="link link-hover group">
          Github
          {@html newtabicon}
        </a>

        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://opencollective.com/daisyui"
          class="link link-hover group">
          OpenCollective
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://www.npmjs.com/package/daisyui"
          class="link link-hover group">
          NPM
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://unpkg.com/browse/daisyui/"
          class="link link-hover group">
          Unpkg CDN
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://www.jsdelivr.com/package/npm/daisyui"
          class="link link-hover group">
          JSdeliver CDN
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title">{$t("try-online")}</span>
        <a
          href="/tailwindplay"
          class="link link-hover group"
          target="_blank"
          rel="noopener, noreferrer">
          Tailwind Play
          {@html newtabicon}
        </a>
        <a target="_blank" rel="noopener, noreferrer" href="/codepen" class="link link-hover group">
          Codepen
          {@html newtabicon}
        </a>
      </div>
      <div>
        <span class="footer-title">{$t("related projects")}</span>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/daisyui/react-daisyui"
          class="link link-hover group">
          React daisyUI
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/daief/daisyui-vue"
          class="link link-hover group">
          daisyUI Vue (WIP)
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/kidonng/unocss-preset-daisy"
          class="link link-hover group">
          daisyUI UnoCSS preset
          {@html newtabicon}
        </a>
        <a
          target="_blank"
          rel="noopener, noreferrer"
          href="https://github.com/saadeghi/theme-change"
          class="link link-hover group">
          Theme Change
          {@html newtabicon}
        </a>
      </div>
    </footer>
  </div>
  <footer
    class="footer footer-center border-base-200 bg-base-200 text-base-content border-t px-4 py-4">
    <div class="flex w-full max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
      <a
        href="https://github.com/saadeghi"
        rel="noopener, noreferrer"
        target="_blank"
        class="inline-flex items-center justify-center hover:opacity-90">
        <div class="avatar mr-3">
          <div class="mask mask-squircle bg-neutral h-14 w-14 p-px">
            <img
              loading="lazy"
              width="54"
              height="54"
              src="/pouya-saadeghi.jpg"
              alt="Pouya Saadeghi"
              class="mask mask-squircle" />
          </div>
        </div>
        <div class="text-left">
          <p class="text-base-content text-xs text-opacity-50">{$t("created-by")}</p>
          <h2 class="text-base-content text-lg font-bold">Pouya Saadeghi</h2>
        </div>
      </a>
      <div class="flex flex-col items-center gap-4 text-left sm:flex-row">
        <Sponsors wrapperClasses="flex-col sm:flex-row" classes="bg-base-100" />
      </div>
    </div>
  </footer>
</div>
