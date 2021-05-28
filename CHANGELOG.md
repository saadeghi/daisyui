# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.2.0](https://github.com/saadeghi/daisyui/compare/v1.1.2...v1.2.0) (2021-05-27)


### Bug Fixes

* .prose colors ([2fab3af](https://github.com/saadeghi/daisyui/commit/2fab3af57fd3d0431bfe793e9d03bb00b6d6d15a))

### [1.1.2](https://github.com/saadeghi/daisyui/compare/v1.1.1...v1.1.2) (2021-05-26)

### [1.1.1](https://github.com/saadeghi/daisyui/compare/v1.1.0...v1.1.1) (2021-05-26)

## [1.1.0](https://github.com/saadeghi/daisyui/compare/v1.0.2...v1.1.0) (2021-05-26)


### Features

* change default theme from config ([545fe70](https://github.com/saadeghi/daisyui/commit/545fe70126e85b2740421a46156ebcf29ad81040))

### [1.0.2](https://github.com/saadeghi/daisyui/compare/v1.0.1...v1.0.2) (2021-05-23)


### Bug Fixes

* [#29](https://github.com/saadeghi/daisyui/issues/29) ([f251dc1](https://github.com/saadeghi/daisyui/commit/f251dc1c5c49c05dde19b19234e3b71d7a25e9a5))
* mask base style ([a8a7e10](https://github.com/saadeghi/daisyui/commit/a8a7e1036919795a7ca2247c95d93e45dcac8b1f))
* menu focus color ([2d9cc31](https://github.com/saadeghi/daisyui/commit/2d9cc31f40e287d1d30f12016f333aa6c21d6a4a))

### [1.0.1](https://github.com/saadeghi/daisyui/compare/v1.0.0...v1.0.1) (2021-05-23)


### Bug Fixes

* [#53](https://github.com/saadeghi/daisyui/issues/53), [#55](https://github.com/saadeghi/daisyui/issues/55) ([3196165](https://github.com/saadeghi/daisyui/commit/31961650c518c466c407e7093d56e2ed1828a4fa))
* code mockup indent margin ([d340440](https://github.com/saadeghi/daisyui/commit/d34044026460c4403757fa2bea71ad981ac58a13))

## [1.0.0](https://github.com/saadeghi/daisyui/compare/v0.28.0...v1.0.0) (2021-05-21)


### ♻️ Breaking Changes

* `accordion` component is now removed and insted, there's `collapse` with a different markup. [[see examples](https://daisyui.com/components/collapse)].  
  HTML Changes:
  - Old `accordion`:
    ```html
    <ul class="accordion">
      <li class="accordion-item">
        <input id="item-923499" type="checkbox"> 
        <label for="item-923499" class="text-xl font-medium accordion-title">
        Aperiam iure expedita non fugit?
      </label> 
        <div class="accordion-body">
          <p>Aperiam iure expedita non fugit. Voluptatem est repellat a aut sit est nostrum maiores aut. Voluptas nisi totam eius architecto eius mollitia quos assumenda non. Iusto rerum doloribus. Architecto dolorum explicabo omnis quidem. Quibusdam ipsam beatae soluta et dolores iure ut debitis ad.</p>
        </div>
      </li>
    </ul>
    ```
  - New `collapse`:
    ```html
    <div tabindex="0" class="collapse">
      <div class="collapse-title text-xl font-medium">
        I open with focus
      </div> 
      <div class="collapse-content"> 
        <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using `collapse-open` and `collapse-close` classes.</p>
      </div>
    </div> 
    ```

### Features

* add avatar-group component ([b5f37bc](https://github.com/saadeghi/daisyui/commit/b5f37bc10fa496ae7beeef8886c56327dc735c03))
* add stat component ([ceba7d0](https://github.com/saadeghi/daisyui/commit/ceba7d0bc7abe5acfe9ee0a766fadec56f113346))
* add steps component ([19b402d](https://github.com/saadeghi/daisyui/commit/19b402de95c34e28de3e07d9fd07a4e126f8e23c))
* add table component ([7d4d246](https://github.com/saadeghi/daisyui/commit/7d4d246b5f5b076d9887c3a10bc2acf284c49c4c))
* add tooltip component ([0e276d1](https://github.com/saadeghi/daisyui/commit/0e276d19e9801de5cf377ff9b974e74bd8a43f60))


### Bug Fixes

* more strict menu style ([494bc7a](https://github.com/saadeghi/daisyui/commit/494bc7ac1a5cbcf45b81945ba796fa09cb39690c))

## [0.28.0](https://github.com/saadeghi/daisyui/compare/v0.27.2...v0.28.0) (2021-05-16)


### Features

* add focus style for breadcrumbs ([1ac20b5](https://github.com/saadeghi/daisyui/commit/1ac20b518be0c1e387b74c59ad28ae75bb24fe02))
* add focus style for link ([475ba8b](https://github.com/saadeghi/daisyui/commit/475ba8b78b108b40aaf1b71c4273f97d618f89ae))
* add focus style for menu item ([bc7f110](https://github.com/saadeghi/daisyui/commit/bc7f110e1d18158ae454e4585ff4621ad1649ef7))
* add focus style for tab ([2ff73af](https://github.com/saadeghi/daisyui/commit/2ff73af15e2aceeb18a3869616b1b97410184d40))
* better menu title color contrast ([6149345](https://github.com/saadeghi/daisyui/commit/61493454284638777ae45e277ec187d31ed30c69))


### Bug Fixes

* improve accordion border color ([7003a6d](https://github.com/saadeghi/daisyui/commit/7003a6db9c56ba2740dcaeea4052e75c7c91bf75))

### [0.27.2](https://github.com/saadeghi/daisyui/compare/v0.27.1...v0.27.2) (2021-05-14)


### Bug Fixes

* avatar component online indicator z-index ([5d7efe4](https://github.com/saadeghi/daisyui/commit/5d7efe4e3fe88adb54691d7dd00826864e65faea))
* dropdown focus style ([7b014ad](https://github.com/saadeghi/daisyui/commit/7b014ad605566fd4ea9ab00d6841d1edb8eb578d))

### [0.27.1](https://github.com/saadeghi/daisyui/compare/v0.26.2...v0.27.1) (2021-05-13)


### Features

* themes config can now be array ([bf33256](https://github.com/saadeghi/daisyui/commit/bf33256435876917134503149c6e370ebac32714))


### Bug Fixes

* [#27](https://github.com/saadeghi/daisyui/issues/27) ([71ac32e](https://github.com/saadeghi/daisyui/commit/71ac32e0c375479379bc5b02b877dc1febbe8bd9))
* [#31](https://github.com/saadeghi/daisyui/issues/31), improve build scripts ([60c583b](https://github.com/saadeghi/daisyui/commit/60c583b3b3b53d061f6215da300fbe61db0c3b09))
* prevent generating extra colors ([14c32c9](https://github.com/saadeghi/daisyui/commit/14c32c96fb9de314293ee69fadc7443a29da728c))

## [0.27.0](https://github.com/saadeghi/daisyui/compare/v0.26.2...v0.27.0) (2021-05-13)


### Features

* themes config can now be array ([bf33256](https://github.com/saadeghi/daisyui/commit/bf33256435876917134503149c6e370ebac32714))


### Bug Fixes

* [#27](https://github.com/saadeghi/daisyui/issues/27) ([71ac32e](https://github.com/saadeghi/daisyui/commit/71ac32e0c375479379bc5b02b877dc1febbe8bd9))
* [#31](https://github.com/saadeghi/daisyui/issues/31), improve build scripts ([60c583b](https://github.com/saadeghi/daisyui/commit/60c583b3b3b53d061f6215da300fbe61db0c3b09))
* prevent generating extra colors ([14c32c9](https://github.com/saadeghi/daisyui/commit/14c32c96fb9de314293ee69fadc7443a29da728c))

### [0.26.3](https://github.com/saadeghi/daisyui/compare/v0.26.2...v0.26.3) (2021-05-12)

### [0.26.2](https://github.com/saadeghi/daisyui/compare/v0.26.0...v0.26.2) (2021-05-12)


### Features

* add focus style for card ([cebcc26](https://github.com/saadeghi/daisyui/commit/cebcc26e1e65d0656cd4bcc668abd0f6a6b74ab8))


### Bug Fixes

* [#26](https://github.com/saadeghi/daisyui/issues/26) ([04c5932](https://github.com/saadeghi/daisyui/commit/04c5932aae23c3cd08fc248b6d4067e99790dfbc))

### [0.26.2](https://github.com/saadeghi/daisyui/compare/v0.26.0...v0.26.2) (2021-05-12)


### Features

* add focus style for card ([cebcc26](https://github.com/saadeghi/daisyui/commit/cebcc26e1e65d0656cd4bcc668abd0f6a6b74ab8))


### Bug Fixes

* [#26](https://github.com/saadeghi/daisyui/issues/26) ([04c5932](https://github.com/saadeghi/daisyui/commit/04c5932aae23c3cd08fc248b6d4067e99790dfbc))

### [0.26.1](https://github.com/saadeghi/daisyui/compare/v0.26.0...v0.26.1) (2021-05-12)


### Features

* add focus style for card ([cebcc26](https://github.com/saadeghi/daisyui/commit/cebcc26e1e65d0656cd4bcc668abd0f6a6b74ab8))


### Bug Fixes

* [#26](https://github.com/saadeghi/daisyui/issues/26) ([04c5932](https://github.com/saadeghi/daisyui/commit/04c5932aae23c3cd08fc248b6d4067e99790dfbc))

## [0.26.0](https://github.com/saadeghi/daisyui/compare/v0.25.0...v0.26.0) (2021-05-07)


### Features

* add carousel component ([64cc47b](https://github.com/saadeghi/daisyui/commit/64cc47b16a8c59f121ae5745d71d968585505f88))

## [0.25.0](https://github.com/saadeghi/daisyui/compare/v0.24.0...v0.25.0) (2021-05-07)


### Features

* add corporate theme ([cbe0e2f](https://github.com/saadeghi/daisyui/commit/cbe0e2fbd20a158f2451d948f351aee29966734c))
* add emerald theme ([74776b9](https://github.com/saadeghi/daisyui/commit/74776b9dc657fb8d167352f712d1b16854ecd833))
* add font family for retro, cyberpunk themes ([ed612ab](https://github.com/saadeghi/daisyui/commit/ed612abbbe170e24070ffe8d0908c7a0202f8653))
* add lofi theme ([391bf10](https://github.com/saadeghi/daisyui/commit/391bf1093eedd0d0e9c6dc4a6dd01c4da6fb95a3))


### Bug Fixes

* rename contrast theme to wireframe ([331af66](https://github.com/saadeghi/daisyui/commit/331af66cdb2af7b7d6ae9b0d28ff5acefa6adca8))
* tab margin ([283f0ec](https://github.com/saadeghi/daisyui/commit/283f0eca6302c6709adb122712513d9c89fde89d))
* tab margin ([572468a](https://github.com/saadeghi/daisyui/commit/572468ad7adbc490e21d7749a2319aadf17fd3de))

## [0.24.0](https://github.com/saadeghi/daisyui/compare/v0.23.0...v0.24.0) (2021-05-07)

## [0.23.0](https://github.com/saadeghi/daisyui/compare/v0.22.1...v0.23.0) (2021-05-07)


### Bug Fixes

* [#36](https://github.com/saadeghi/daisyui/issues/36) ([fe451f3](https://github.com/saadeghi/daisyui/commit/fe451f3c27074a906b2fa61f218c5c807170034a))

### [0.22.1](https://github.com/saadeghi/daisyui/compare/v0.22.0...v0.22.1) (2021-05-06)


### Bug Fixes

* modal position big on safari ([933a9e6](https://github.com/saadeghi/daisyui/commit/933a9e63e4feae141ec9686a7a1b20d273c58c17))

## [0.22.0](https://github.com/saadeghi/daisyui/compare/v0.21.3...v0.22.0) (2021-05-05)


### Features

* Add dropdown component ([1f5a50a](https://github.com/saadeghi/daisyui/commit/1f5a50a31be9919441cac2dcdd491a05c06de312))


### Bug Fixes

* [#33](https://github.com/saadeghi/daisyui/issues/33) ([cd340f3](https://github.com/saadeghi/daisyui/commit/cd340f30ad356606dc866582760675beebcb66dc))

### [0.21.3](https://github.com/saadeghi/daisyui/compare/v0.21.2...v0.21.3) (2021-04-30)

### [0.21.2](https://github.com/saadeghi/daisyui/compare/v0.21.1...v0.21.2) (2021-04-30)

### [0.21.1](https://github.com/saadeghi/daisyui/compare/v0.21.0...v0.21.1) (2021-04-29)


### Bug Fixes

* modal size ([82d8280](https://github.com/saadeghi/daisyui/commit/82d8280c54745a5292294a104680eacb508db2a2))

## [0.21.0](https://github.com/saadeghi/daisyui/compare/v0.20.1...v0.21.0) (2021-04-29)


### Bug Fixes

* cleanup /src file structure and npm scripts ([6a4c2dd](https://github.com/saadeghi/daisyui/commit/6a4c2dd1bc18008d048363b82466bed205d721ba))

### [0.20.1](https://github.com/saadeghi/daisyui/compare/v0.20.0...v0.20.1) (2021-04-22)


### Bug Fixes

* spin animation not incuded when using JIT ([7a10e5c](https://github.com/saadeghi/daisyui/commit/7a10e5ca3732ac3d2fbe7e1047849f0325ac5f9b))

## [0.20.0](https://github.com/saadeghi/daisyui/compare/v0.19.1...v0.20.0) (2021-04-22)


### Features

* improve logs ([a0d1d50](https://github.com/saadeghi/daisyui/commit/a0d1d50a7c7811614b1bdef852899e065777df4d))


### Bug Fixes

* select base style ([45aa02c](https://github.com/saadeghi/daisyui/commit/45aa02c4b22b01100d4037a2ed48c1ef873e8813))
* select styled ([9e8fe79](https://github.com/saadeghi/daisyui/commit/9e8fe7900113368077f5c066f57a4362446b2d7f))

### [0.19.1](https://github.com/saadeghi/daisyui/compare/v0.19.0...v0.19.1) (2021-04-21)


### Features

* enable themes config by default ([abb0b9d](https://github.com/saadeghi/daisyui/commit/abb0b9d063b24ac7c37e34afd4a6f6d2805fc3de))

## [0.19.0](https://github.com/saadeghi/daisyui/compare/v0.18.0...v0.19.0) (2021-04-21)


### Features

* auto include DaisyUI colors ([389b6f9](https://github.com/saadeghi/daisyui/commit/389b6f935864aa366050bc2d0e61053e4b2cc035))


### Bug Fixes

* remove tailwindcss peer dependency ([0aff74b](https://github.com/saadeghi/daisyui/commit/0aff74b18fbe594ca69f45fb44d6f5ce359e5b14))

## [0.18.0](https://github.com/saadeghi/daisyui/compare/v0.17.2...v0.18.0) (2021-04-20)

### [0.17.2](https://github.com/saadeghi/daisyui/compare/v0.17.1...v0.17.2) (2021-04-20)


### Features

* add mask utility ([db608b7](https://github.com/saadeghi/daisyui/commit/db608b7ebd3ca12a1791a4371349b56364ff45a3))


### Bug Fixes

* phone mockup z-index ([75e68b2](https://github.com/saadeghi/daisyui/commit/75e68b2444e42cd099582ea355a074b4d47703c9))

### [0.17.1](https://github.com/saadeghi/daisyui/compare/v0.17.0...v0.17.1) (2021-04-19)


### Features

* divider component ([c88c4bf](https://github.com/saadeghi/daisyui/commit/c88c4bfaa78199be153ec9946e2a48b65f305efe))

## [0.17.0](https://github.com/saadeghi/daisyui/compare/v0.16.1...v0.17.0) (2021-04-18)


### Features

* countdown component ([d00e4fc](https://github.com/saadeghi/daisyui/commit/d00e4fcca6275afc4fc426114b714ffe278c776f))


### Bug Fixes

* badge brand colors ([2899fb2](https://github.com/saadeghi/daisyui/commit/2899fb2ac21c9aae010abe0caf6e6d4e5ab76017))
* badge neutral colors ([a58a481](https://github.com/saadeghi/daisyui/commit/a58a48101a59518b067348cb9fa952a8ef584df2))
* button neutral colors ([37c3e3a](https://github.com/saadeghi/daisyui/commit/37c3e3aa8cfef5963348a7f423be29db4e5f26c7))

### [0.16.1](https://github.com/saadeghi/daisyui/compare/v0.16.0...v0.16.1) (2021-04-18)

## [0.16.0](https://github.com/saadeghi/daisyui/compare/v0.15.4...v0.16.0) (2021-04-18)


### Bug Fixes

* improve tabs component ([37cb14a](https://github.com/saadeghi/daisyui/commit/37cb14a0ac19a95e0c54ebb4672159fbbb0b3aee))

### [0.15.4](https://github.com/saadeghi/daisyui/compare/v0.15.3...v0.15.4) (2021-04-17)


### Bug Fixes

* improve tab borders using gradients ([cca6520](https://github.com/saadeghi/daisyui/commit/cca6520fcade7e7687789e82ebb9d33ac41ae3e7))

### [0.15.3](https://github.com/saadeghi/daisyui/compare/v0.15.2...v0.15.3) (2021-04-08)

### [0.15.2](https://github.com/saadeghi/daisyui/compare/v0.15.1...v0.15.2) (2021-03-30)


### Bug Fixes

* [#15](https://github.com/saadeghi/daisyui/issues/15) (Show modal without URL hash) ([238be87](https://github.com/saadeghi/daisyui/commit/238be87dd71173607fe6c1b65c5c01f01581fd28))

### [0.15.1](https://github.com/saadeghi/daisyui/compare/v0.14.6...v0.15.1) (2021-03-27)


### Features

* Add support for WindiCSS ([4f0c5d5](https://github.com/saadeghi/daisyui/commit/4f0c5d59841b0461055b84db733114c19eb94ced))


### Bug Fixes

* include colors directory in package files ([71fe7cb](https://github.com/saadeghi/daisyui/commit/71fe7cb8dcedd16ac6379b4a68cb66a0a6e965d3))

### [0.14.6](https://github.com/saadeghi/daisyui/compare/v0.14.5...v0.14.6) (2021-03-17)


### Bug Fixes

* change tab border opacity ([b45ee7d](https://github.com/saadeghi/daisyui/commit/b45ee7dd79a89f2fd023f77554fe181ff10d95da))

### [0.14.5](https://github.com/saadeghi/daisyui/compare/v0.14.4...v0.14.5) (2021-03-12)

### [0.14.4](https://github.com/saadeghi/daisyui/compare/v0.14.3...v0.14.4) (2021-03-12)


### Features

* add breadcrumbs component ([501c6a0](https://github.com/saadeghi/daisyui/commit/501c6a0eff04b735e187c50ceef50d75e329922a))

### [0.14.3](https://github.com/saadeghi/daisyui/compare/v0.14.2...v0.14.3) (2021-03-11)


### Bug Fixes

* button animation ([5134b75](https://github.com/saadeghi/daisyui/commit/5134b75a0c6e0964980b8cb0a9f9c728a845e761))

### [0.14.2](https://github.com/saadeghi/daisyui/compare/v0.14.1...v0.14.2) (2021-03-10)

### [0.14.1](https://github.com/saadeghi/daisyui/compare/v0.14.0...v0.14.1) (2021-03-05)


### Bug Fixes

* glass theme variables ([47c5b0c](https://github.com/saadeghi/daisyui/commit/47c5b0c3f09e1e62720eb6218c6b12dc8422dff6))
* light theme base colors ([cf9354b](https://github.com/saadeghi/daisyui/commit/cf9354b46b82d11609927589b55676e1ac16c671))

## [0.14.0](https://github.com/saadeghi/daisyui/compare/v0.13.3...v0.14.0) (2021-03-05)


### Features

* add auto margin for card-actions items ([046c03e](https://github.com/saadeghi/daisyui/commit/046c03ed22815dfd7b6808fded7b27cd8233ef34))


### Bug Fixes

* [#10](https://github.com/saadeghi/daisyui/issues/10) ([38237e7](https://github.com/saadeghi/daisyui/commit/38237e7b74ec494512d99eb646805874105887c9))
* change base config name to resets ([4e786fb](https://github.com/saadeghi/daisyui/commit/4e786fb6174584bda01b7065ff1299f026f26936))

### [0.13.3](https://github.com/saadeghi/daisyui/compare/v0.13.2...v0.13.3) (2021-03-03)


### Bug Fixes

* drawer scroll bug ([d61c223](https://github.com/saadeghi/daisyui/commit/d61c223845aa37549aca965b39219284c71df110))

### [0.13.2](https://github.com/saadeghi/daisyui/compare/v0.13.1...v0.13.2) (2021-03-03)


### Bug Fixes

* drawer height bug ([eee83de](https://github.com/saadeghi/daisyui/commit/eee83dedd1f902fc71e8527570994554e7aafc52))

### [0.13.1](https://github.com/saadeghi/daisyui/compare/v0.13.0...v0.13.1) (2021-03-03)


### Bug Fixes

* nested drawer components bug ([7cc8443](https://github.com/saadeghi/daisyui/commit/7cc844393699e70780ce8df101d797c007d56c6e))

## [0.13.0](https://github.com/saadeghi/daisyui/compare/v0.12.2...v0.13.0) (2021-03-03)

### [0.12.2](https://github.com/saadeghi/daisyui/compare/v0.12.1...v0.12.2) (2021-03-03)


### Features

* add webkit-tap-highlight-color basy style ([0eedac4](https://github.com/saadeghi/daisyui/commit/0eedac46820a37c032e5f08a9796e2504818dca8))
 
