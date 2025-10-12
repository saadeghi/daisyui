# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## 5.2.3 (2025-10-11)

### Bug Fixes

* fix: style for nested validator with aria-invalid attribute. closes: [#4176](https://github.com/saadeghi/daisyui/issues/4176)

## 5.2.2 (2025-10-11)


### Bug Fixes

* countdown RTL bug and allow defining number of digits ([426de84](https://github.com/saadeghi/daisyui/commit/426de84e061f511d95d1a44c877fb65395f3afdf))

## 5.2.1 (2025-10-11)


### Bug Fixes

* countdown alignment problems ([#4166](https://github.com/saadeghi/daisyui/issues/4166)) ([83198ca](https://github.com/saadeghi/daisyui/commit/83198ca1ff0b98a2aff12bade01231836f3cd93c)), closes [#3872](https://github.com/saadeghi/daisyui/issues/3872)

## [5.2.0](https://github.com/saadeghi/daisyui/compare/v5.1.31...v5.2.0) (2025-10-10)


### Features

* new variants for drawer: `is-drawer-open` and `is-drawer-close` to style elements based on drawer state. Allowing us to create icon-only drawer sidebar.
* countdown now supports 0 to 999 with dynamic width ([6b63563](https://github.com/saadeghi/daisyui/commit/6b6356371b3df2735ce947adfdf8c95f9daba37d))
* **countdown:** animate independently the 2 digits of the number ([d3a32e2](https://github.com/saadeghi/daisyui/commit/d3a32e2d55d53cf3aefd4746a7c0a0731e999235)), closes [#4143](https://github.com/saadeghi/daisyui/issues/4143)
* detect if page has vertical scrollbar visible and set scrollbar-gutter ([abf02cc](https://github.com/saadeghi/daisyui/commit/abf02cc347f78edab891ba3a0d1285440af01538))
* icon-only drawer sidebar, new variants `is-drawer-open` and `is-drawer-close` ([32e919e](https://github.com/saadeghi/daisyui/commit/32e919e1bb73a3320fddf6d5381a1ad6699d65fd))


### Bug Fixes

* **dropdown:** do not open dropdown on click (but open it on kbd focus) ([39e4cb5](https://github.com/saadeghi/daisyui/commit/39e4cb54abddda75c03c0c1a5948d1d1b28fa967)), closes [#3880](https://github.com/saadeghi/daisyui/issues/3880)
* enable tailwind conditional classes on menu-active ([4a8d227](https://github.com/saadeghi/daisyui/commit/4a8d227521f928217c7de112d24b102fe71013e8))
* Tailwind CSS `collapse` utility class conflict ([c39d839](https://github.com/saadeghi/daisyui/commit/c39d8393214696bc054882ddb21d14aab6b6bacc))
* fix scrollbar gutter layout shift on Windows when modal or drawer has a different scrollbar visibility than the body

## 5.1.32 (2025-10-10)

## 5.1.31 (2025-10-10)


### Bug Fixes

* **modal:** make sure elements inside modal are hidden when not open ([#4161](https://github.com/saadeghi/daisyui/issues/4161)) ([5ddae21](https://github.com/saadeghi/daisyui/commit/5ddae21f05fdf670b0d31d16b875566b530f8e2c)), closes [#3440](https://github.com/saadeghi/daisyui/issues/3440) [#3835](https://github.com/saadeghi/daisyui/issues/3835) [#2223](https://github.com/saadeghi/daisyui/issues/2223)

## 5.1.30 (2025-10-09)


### Bug Fixes

* focus the first focusable element when modal opens. closes: [#3440](https://github.com/saadeghi/daisyui/issues/3440) ([c1e2f0c](https://github.com/saadeghi/daisyui/commit/c1e2f0ccfbd5c324f90bbe84168b6261fb56148a))

## 5.1.29 (2025-10-07)


### Bug Fixes

* (iOS) increase font size of small text input and textarea on focus so page wont zoom in ([3b35fbb](https://github.com/saadeghi/daisyui/commit/3b35fbbd171c22d623f33218751e3beff3c60dba)), closes [#3871](https://github.com/saadeghi/daisyui/issues/3871) [#1145](https://github.com/saadeghi/daisyui/issues/1145)

## 5.1.28 (2025-10-07)


### Bug Fixes

* fab 7th child visibility issue. closes: [#4157](https://github.com/saadeghi/daisyui/issues/4157) ([78128dc](https://github.com/saadeghi/daisyui/commit/78128dc4adfebfc17b81692ee186216300a9d5f4))

## 5.1.27 (2025-10-03)


### Bug Fixes

* prevent select line break on long text when select is not open and prevent page overflow when select is open. closes: [#4105](https://github.com/saadeghi/daisyui/issues/4105) ([6782522](https://github.com/saadeghi/daisyui/commit/67825229b33d6613cc59ff0e4b73d86b2664d81c))

## 5.1.26 (2025-09-30)


### Bug Fixes

* navbar default position ([f75a5ed](https://github.com/saadeghi/daisyui/commit/f75a5edfc8018575445f27086d26622cc9af2e35))

## 5.1.25 (2025-09-28)


### Bug Fixes

* tabs-box radius. closes: [#3904](https://github.com/saadeghi/daisyui/issues/3904) ([d359621](https://github.com/saadeghi/daisyui/commit/d35962122b65f42a2132e83fb3b8785c96db2a88))

## 5.1.24 (2025-09-26)


### Bug Fixes

* cally selected day hover color. closes: [#4085](https://github.com/saadeghi/daisyui/issues/4085) ([f115ca9](https://github.com/saadeghi/daisyui/commit/f115ca9adaae365616ad5592a8c8e3a55e776a11))

## 5.1.23 (2025-09-25)


### Bug Fixes

* `<details>` collapse animation. closes: [#4128](https://github.com/saadeghi/daisyui/issues/4128) ([f2a453a](https://github.com/saadeghi/daisyui/commit/f2a453abd40cddac5cb9c36caebf407840f445c9))

## 5.1.22 (2025-09-25)


### Bug Fixes

* unwanted box shadow of `kbd` inside `prose` ([233c58a](https://github.com/saadeghi/daisyui/commit/233c58ab241f7e51a111de9e30dd50b8884a45e7))

## 5.1.21 (2025-09-25)

### Bug Fixes

* fix: collapse focus-within issue. closes: [#4128](https://github.com/saadeghi/daisyui/issues/4128)
* fix: text truncate issue. closes: [#2965](https://github.com/saadeghi/daisyui/issues/2965)

## 5.1.20 (2025-09-25)


### Bug Fixes

* allow height customization for select with multiple attribute ([8292854](https://github.com/saadeghi/daisyui/commit/8292854752c39f243587d3003219c1d5960f8de1))

## 5.1.19 (2025-09-25)

### Bug Fixes

* Update dependencies

## 5.1.18 (2025-09-24)


### Bug Fixes

* Select multiple dropdown arrow closes: [#4109](https://github.com/saadeghi/daisyui/issues/4109) ([946db4c](https://github.com/saadeghi/daisyui/commit/946db4c30309a350b7563a50b7e176dff6a0dad3))

## 5.1.17 (2025-09-24)

### Bug Fixes

* fix: .prose class not working with daisyUI prefix. closes: [#4119](https://github.com/saadeghi/daisyui/issues/4119)

## 5.1.16 (2025-09-24)


### Bug Fixes

* Collapse gets closed when interactive input inside is focused. closes: [#4128](https://github.com/saadeghi/daisyui/issues/4128) ([f55cf0e](https://github.com/saadeghi/daisyui/commit/f55cf0e96ce7c8426c0bf971b694ee2ee39f1548))

## 5.1.15 (2025-09-24)


### Bug Fixes

* Collapse arrow position. closes: [#4133](https://github.com/saadeghi/daisyui/issues/4133) ([02eba47](https://github.com/saadeghi/daisyui/commit/02eba471b50957a1b26cdbf75e225aa256312998))

## 5.1.14 (2025-09-22)


### Bug Fixes

* chat bubble tail size. closes: [#4130](https://github.com/saadeghi/daisyui/issues/4130) ([d3de565](https://github.com/saadeghi/daisyui/commit/d3de5654479b905039d5a7c900e90c97c061b250))

## 5.1.13 (2025-09-17)

## 5.1.12 (2025-09-14)


### Bug Fixes

* nested select margin (closes: [#4114](https://github.com/saadeghi/daisyui/issues/4114)) ([af7ffbd](https://github.com/saadeghi/daisyui/commit/af7ffbd74ab91d773dcb7ca67453bba63d4a3fa8))

## 5.1.11 (2025-09-14)


### Bug Fixes

* --fx-noise SVG scale on Firefox. closes: [#3583](https://github.com/saadeghi/daisyui/issues/3583) ([84df795](https://github.com/saadeghi/daisyui/commit/84df7958bb3c02acec9a13ea240007a5ee199e5f))

## 5.1.10 (2025-09-10)


### Bug Fixes

* diff focus and resizer position on Safari. closes: [#4104](https://github.com/saadeghi/daisyui/issues/4104) ([712d0ff](https://github.com/saadeghi/daisyui/commit/712d0ff17975b6ee880cd59d3574f309e8f74c81))

## 5.1.9 (2025-09-09)


### Bug Fixes

* select horizontal padding. closes: [#3890](https://github.com/saadeghi/daisyui/issues/3890) ([449378e](https://github.com/saadeghi/daisyui/commit/449378e93adba1fb71aba2c26515f4b9643244f9))

## 5.1.8 (2025-09-07)

## 5.1.7 (2025-09-04)


### Bug Fixes

* base-select style in CDN file. closes: [#4095](https://github.com/saadeghi/daisyui/issues/4095) ([40f59aa](https://github.com/saadeghi/daisyui/commit/40f59aaf26dc97d1aed6ee1c28cb0b02de6bf704))

## 5.1.6 (2025-09-02)


### Bug Fixes

* nested select height. closes: [#4087](https://github.com/saadeghi/daisyui/issues/4087) ([4498a5f](https://github.com/saadeghi/daisyui/commit/4498a5f28b486dd70dc8b5b27d5c9e66270f0b13))

## 5.1.5 (2025-09-02)


### Bug Fixes

* checkbox background color ([fd938ab](https://github.com/saadeghi/daisyui/commit/fd938abb3da1ef42fb3290d9db64ad61b95a430f))

## 5.1.4 (2025-09-02)


### Bug Fixes

* improve base-select optgroup style. closes: [#4083](https://github.com/saadeghi/daisyui/issues/4083) ([059f64e](https://github.com/saadeghi/daisyui/commit/059f64ec590108e773de816a635d2b346f92dfa3))

## 5.1.3 (2025-09-01)


### Bug Fixes

* `<label class="select">` base-select style and misalignment. closes: [#4082](https://github.com/saadeghi/daisyui/issues/4082) ([d1556fa](https://github.com/saadeghi/daisyui/commit/d1556fa5d1728a7918ef0fab9e486fb0ce63be49))

## 5.1.2 (2025-09-01)


### Bug Fixes

* tooltip animation ([38049bc](https://github.com/saadeghi/daisyui/commit/38049bc3f7896937f6085345bd44421ae3c73ee3))

## 5.1.1 (2025-09-01)


### Bug Fixes

* `<select>` double arrow on Firefox ([748fd54](https://github.com/saadeghi/daisyui/commit/748fd5445c941f9c8239198cfcd48d7318646de7))

## 5.1.0 (2025-09-01)

### Features

* feat: New component - Hover Gallery  
* feat: New component - FAB / Speed Dial  
* feat: Styled native HTML `<select>` element (works in Chromium, other browsers use the old OS style)  
* feat: Support prefers-reduced-motion for all animations

### Bug Fixes

* fix: theme-controller prefix  
* fix: support `aria-current` for tab  
* fix: add scrollbar-gutter auto to prevent modal scrollbar shift  
* fix: increase drawer z-index to prevent overlap issues  

## 5.0.55 (2025-09-01)

## 5.0.54 (2025-08-28)


### Bug Fixes

* prefersdark theme overriding the default theme in custom themes. closes: [#3921](https://github.com/saadeghi/daisyui/issues/3921) ([bd6b064](https://github.com/saadeghi/daisyui/commit/bd6b06496f0e6a3605477d1911ec70e0c74a4bcb))

## 5.0.53 (2025-08-28)


### Bug Fixes

* improve text contrast for selected cally dates on hover ([#4056](https://github.com/saadeghi/daisyui/issues/4056)) ([904505f](https://github.com/saadeghi/daisyui/commit/904505ffe50df844c755a98ae31ec3478cbf0409)), closes [#4042](https://github.com/saadeghi/daisyui/issues/4042)

## 5.0.52 (2025-08-27)


### Bug Fixes

* date input alignment in labels on iOS Safari ([#3995](https://github.com/saadeghi/daisyui/issues/3995)) ([ee1bd67](https://github.com/saadeghi/daisyui/commit/ee1bd67209b7bd58db315552ee80bb0310a7a405)), closes [#3952](https://github.com/saadeghi/daisyui/issues/3952)

## 5.0.51 (2025-08-26)


### Bug Fixes

* styles for disabled inputs and select in fieldset ([c60350d](https://github.com/saadeghi/daisyui/commit/c60350df71f8f5fdc199a2806ef62b4377827c63)), closes [#4021](https://github.com/saadeghi/daisyui/issues/4021)

## 5.0.50 (2025-07-29)


### Bug Fixes

* use semantic fallbacks for checkbox states, improve indeterminate visibility. closes: [#3979](https://github.com/saadeghi/daisyui/issues/3979) ([d19f38a](https://github.com/saadeghi/daisyui/commit/d19f38a98fe6d3ba9e2be5111d46055e1a04f609))

## 5.0.49 (2025-07-28)


### Bug Fixes

* react-day-picker disableNavigation not styling properly. closes: [#3990](https://github.com/saadeghi/daisyui/issues/3990) ([29123bc](https://github.com/saadeghi/daisyui/commit/29123bc7fbd9279d459bd2ba1258a93f35a34b32))

## 5.0.48 (2025-07-27)


### Bug Fixes

* apply theme-aware hover styling to Cally day buttons. closes: [#3991](https://github.com/saadeghi/daisyui/issues/3991) ([9960287](https://github.com/saadeghi/daisyui/commit/99602876204533c49cfd18a04133bc07e8a6c2ba))

## 5.0.47 (2025-07-25)


### Bug Fixes

* browser search icon color in dark theme. closes: [#4006](https://github.com/saadeghi/daisyui/issues/4006) ([922256d](https://github.com/saadeghi/daisyui/commit/922256d6543ba35434f583c327b6f6cc5169e20f))

## 5.0.46 (2025-07-06)

## 5.0.45 (2025-07-06)

## 5.0.44 (2025-07-06)


### Bug Fixes

* responsive RTL dropdown position. closes: [#3956](https://github.com/saadeghi/daisyui/issues/3956) ([03cf030](https://github.com/saadeghi/daisyui/commit/03cf030ca8341d5fe0ffce2f6e22791a4b065273))

## 5.0.43 (2025-05-30)


### Bug Fixes

* badge-outline, badge-dash, badge-soft can be used with tailwind responsive variants. closes: [#3643](https://github.com/saadeghi/daisyui/issues/3643) ([2470fe2](https://github.com/saadeghi/daisyui/commit/2470fe20f9d69976d6ce7c98fa883909c6202e59))

## 5.0.42 (2025-05-29)


### Bug Fixes

* checkbox in menu should not be grid. closes: [#3922](https://github.com/saadeghi/daisyui/issues/3922) ([7f1ca83](https://github.com/saadeghi/daisyui/commit/7f1ca83e2545967dc1270c1db2ddb6f55830266f))

## 5.0.41 (2025-05-29)

## 5.0.40 (2025-05-28)


### Bug Fixes

* Chat bubble mask not working with tailwind prefixes. closes: [#3847](https://github.com/saadeghi/daisyui/issues/3847) ([c7856f2](https://github.com/saadeghi/daisyui/commit/c7856f267bc8653b04abf0250ba77f9523c85872))

## 5.0.39 (2025-05-28)


### Bug Fixes

* calendar - react daypicker range bg color. closes: [#3918](https://github.com/saadeghi/daisyui/issues/3918) ([d9df966](https://github.com/saadeghi/daisyui/commit/d9df966a93f6164774c5a7043b97eeddc799f09d))

## 5.0.38 (2025-05-26)


### Bug Fixes

* correct CSS syntax error in variables.css ([#3910](https://github.com/saadeghi/daisyui/issues/3910)) ([cd4820f](https://github.com/saadeghi/daisyui/commit/cd4820f7c73af0aaea4fba662fba642883725f7a))

## 5.0.37 (2025-05-22)


### Bug Fixes

* tab-content height. closes: [#3843](https://github.com/saadeghi/daisyui/issues/3843) ([0b5d958](https://github.com/saadeghi/daisyui/commit/0b5d958c93b8b57f1622c943b904e3f84c7d0145))

## 5.0.36 (2025-05-22)


### Bug Fixes

* Safari iOS page zoom when user focuses Text Input. closes: [#3871](https://github.com/saadeghi/daisyui/issues/3871) ([1b5b997](https://github.com/saadeghi/daisyui/commit/1b5b9971e3ca5dbaf82f64e23903bad3f419d584))
* bug: The collapse input/title has a fixed min-height applied with high specificity [#3885](https://github.com/saadeghi/daisyui/issues/3885)
* bug: Button Link and Ghost hover states persisting on mobile devices [#3888](https://github.com/saadeghi/daisyui/issues/3888)
* bug: URL and email inputs with icons don't maintain LTR in RTL mode [#3886](https://github.com/saadeghi/daisyui/issues/3886)
* bug: disabled button should not change border size [#3877](https://github.com/saadeghi/daisyui/issues/3877)
* bug: indicator direction not reflecting on RTL [#3851](https://github.com/saadeghi/daisyui/issues/3851)
* bug: validator on aria-invalid="false" should not be considered as invalid [#3855](https://github.com/saadeghi/daisyui/issues/3855)

## 5.0.35 (2025-05-01)


### Bug Fixes

* allow tooltip font size customization. closes: [#3830](https://github.com/saadeghi/daisyui/issues/3830) ([c1b9d69](https://github.com/saadeghi/daisyui/commit/c1b9d6911a0e53b6459cde32fe424ad0ab73cc84))

## 5.0.34 (2025-05-01)


### Bug Fixes

* validator-hint respecting `user-valid:` variant. closes: [#3668](https://github.com/saadeghi/daisyui/issues/3668), [#3669](https://github.com/saadeghi/daisyui/issues/3669) ([8ffbebb](https://github.com/saadeghi/daisyui/commit/8ffbebb77c97a61bb1b3dda25f9d674dd074d0a5))

## 5.0.33 (2025-04-30)


### Bug Fixes

* swap indeterminate not being visible with flip animation. closes: [#3806](https://github.com/saadeghi/daisyui/issues/3806) ([42a2fb5](https://github.com/saadeghi/daisyui/commit/42a2fb57b6c9b530a04566def27e232b39289fb6))

## 5.0.32 (2025-04-30)


### Bug Fixes

* prevent double-tap zoom on buttons on mobile ([02a401a](https://github.com/saadeghi/daisyui/commit/02a401a44ac32a224e0ddeb0303d29f95b97f392))

## 5.0.31 (2025-04-30)


### Bug Fixes

* button hover state persisting on mobile screen. closes: [#3817](https://github.com/saadeghi/daisyui/issues/3817) ([75c92c9](https://github.com/saadeghi/daisyui/commit/75c92c93573e0b033db0e7d674ec00dece1ee41c))

## 5.0.30 (2025-04-30)


### Bug Fixes

* tooltip showing when data-tip or tooltip-content is empty. closes: [#3819](https://github.com/saadeghi/daisyui/issues/3819) ([2414ca5](https://github.com/saadeghi/daisyui/commit/2414ca56e3bf30ff8052733cf743db03fd199d58))

## 5.0.29 (2025-04-29)


### Bug Fixes

* table-zebra active row color. closes: [#3823](https://github.com/saadeghi/daisyui/issues/3823) ([cad94c2](https://github.com/saadeghi/daisyui/commit/cad94c24c06a197a45085d20254205119f632836))

## 5.0.28 (2025-04-23)

## 5.0.27 (2025-04-18)


### Bug Fixes

* toggle padding value inconsistencies. closes: [#3746](https://github.com/saadeghi/daisyui/issues/3746) ([59e1575](https://github.com/saadeghi/daisyui/commit/59e1575f420217b7ab71f19ce1a17f1ded80b3f5))

## 5.0.26 (2025-04-18)


### Bug Fixes

* drawer z-index issue. closes [#3797](https://github.com/saadeghi/daisyui/issues/3797) ([00c20c3](https://github.com/saadeghi/daisyui/commit/00c20c389a0d4f77420027f3a8736fb1cb8e01e6))

## 5.0.25 (2025-04-17)


### Bug Fixes

* kbd border width ([eaa78a8](https://github.com/saadeghi/daisyui/commit/eaa78a8e58dc4401efb13acd63860a39aaa2e548))

## 5.0.24 (2025-04-17)


### Bug Fixes

* join outline issues. closes: [#3722](https://github.com/saadeghi/daisyui/issues/3722) ([78bf76d](https://github.com/saadeghi/daisyui/commit/78bf76ddffde31022b56c0df28f8eea3a7aeeeaa))

## 5.0.23 (2025-04-16)


### Bug Fixes

* add isolate to drawer-content to avoid z-index overflow. closes: [#3790](https://github.com/saadeghi/daisyui/issues/3790) ([488804f](https://github.com/saadeghi/daisyui/commit/488804f4cc3260a0e0cf33e96b00c50b4b69bedc))

## 5.0.22 (2025-04-16)


### Bug Fixes

- add isolate to collapse. closes: [#3713](https://github.com/saadeghi/daisyui/issues/3713) ([24b4742](https://github.com/saadeghi/daisyui/commit/24b47422b9e98509a9b3914a1cb778c867535199))
- fix: outline in join element. closes: #3722
- fix: toast position. closes: #3738, closes: #3702

## 5.0.21 (2025-04-16)

### Bug Fixes

- fix: badge-outline border color. closes: #3784
- fix: dock-active accepts variants. closes: #3170

## 5.0.20 (2025-04-15)

### Bug Fixes

* modal-start scroll gutter. closes: [#3787](https://github.com/saadeghi/daisyui/issues/3787) ([52414ef](https://github.com/saadeghi/daisyui/commit/52414efd62cd8fd905ff5e5af61c06d0d98c8f41))

## 5.0.19 (2025-04-11)


### Bug Fixes

* diff not working on iOS, fix docs. closes: [#3715](https://github.com/saadeghi/daisyui/issues/3715) ([cc9da38](https://github.com/saadeghi/daisyui/commit/cc9da38d08617d03e5948ebe72d90c015506e311))

## 5.0.18 (2025-04-10)


### Bug Fixes

* validator working with `aria-invalid` ([f4688a3](https://github.com/saadeghi/daisyui/commit/f4688a32d6a8cd0929e914e43bd91d8b8c4cd726))

## 5.0.17 (2025-04-08)


### Bug Fixes

* Bundle file for version. ([7fd2640](https://github.com/saadeghi/daisyui/commit/7fd264003b81953de4b342fe66e1559e4146f6c5)), closes [#3765](https://github.com/saadeghi/daisyui/issues/3765)

## 5.0.16 (2025-04-07)

### Bug Fixes

* fix: collapse-content transition duplicate, transition typo (#3761)
* fix tabs-box render issue on Nuxt. closes: #3724

## 5.0.15 (2025-04-07)

### Bug Fixes

* dropdown-center RTL, modal gutter, collapse-content animation

## 5.0.14 (2025-04-07)

### Bug Fixes

* workaround for lightningcss issue of color mix in `&:before`. closes: #3758, closes: #3755

## 5.0.13 (2025-04-06)


### Bug Fixes

* checkbox style inside tab-content. closes: [#3753](https://github.com/saadeghi/daisyui/issues/3753) ([fe16212](https://github.com/saadeghi/daisyui/commit/fe16212ae23b3cb6be54f1364509b512d933fdf4))

## 5.0.12 (2025-04-02)


### Bug Fixes

* icon position of date input inside input wrapper on chromium-based ([#3725](https://github.com/saadeghi/daisyui/issues/3725)) closes: [#3708](https://github.com/saadeghi/daisyui/issues/3708) ([b1560a6](https://github.com/saadeghi/daisyui/commit/b1560a69ffe23527bded2790d00d478bc0166ea2))

## 5.0.11 (2025-04-02)


### Bug Fixes

* card image-full radius color bleed. closes: [#3734](https://github.com/saadeghi/daisyui/issues/3734) ([d6fb204](https://github.com/saadeghi/daisyui/commit/d6fb20479c76e7c6462baa77ddfb512d76ca7a2c))

## 5.0.10 (2025-04-02)


### Bug Fixes

* `:not(:has())` selectors getting prefix. closes: [#3739](https://github.com/saadeghi/daisyui/issues/3739) ([771b6eb](https://github.com/saadeghi/daisyui/commit/771b6eb8a89ff2e1bc7a4e2d912e5e55c570c5ce))

## 5.0.9 (2025-03-21)


### Bug Fixes

* Join style on iOS. closes: [#3691](https://github.com/saadeghi/daisyui/issues/3691) ([5afa08c](https://github.com/saadeghi/daisyui/commit/5afa08c387e95486bf83da94ec026d95d0b40b25))

## 5.0.8 (2025-03-21)


### Bug Fixes

* alert unwanted gap if there's one child only. closes: [#3702](https://github.com/saadeghi/daisyui/issues/3702) ([6d3eb06](https://github.com/saadeghi/daisyui/commit/6d3eb068dd8e69543d1388b919e20604ee4cd4a0))

## 5.0.7 (2025-03-21)

## 5.0.6 (2025-03-17)


### Bug Fixes

* badge color ([56390f5](https://github.com/saadeghi/daisyui/commit/56390f5ec32188643b8c2f83033c3175ab424c64))

## 5.0.5 (2025-03-17)


### Bug Fixes

* fix: Floating labels font sizes. closes: [#3676](https://github.com/saadeghi/daisyui/issues/3676)
* fix: . select > select caret. closes: [#3613](https://github.com/saadeghi/daisyui/issues/3613)
* fix: theme generator untrimmed color issue. closes: [#3636](https://github.com/saadeghi/daisyui/issues/3636)
* fix: btn-active working with Tailwind variant prefixes. closes: [#3652](https://github.com/saadeghi/daisyui/issues/3652)
* fix: badge-outline border-* override. closes: [#3657](https://github.com/saadeghi/daisyui/issues/3657)
* fix: Swap Indeterminate rotate style. closes: [#3678](https://github.com/saadeghi/daisyui/issues/3678)
* fix: hero-content isolation issue. closes: [#3682](https://github.com/saadeghi/daisyui/issues/3682)
* fix: checked button style for outline and dash. closes: [#3591](https://github.com/saadeghi/daisyui/issues/3591)
* fix: fieldset-label cursor

## 5.0.4 (2025-03-14)

* fix: prevent duplicate theme to be added if there's only one default theme - improves CSS size for single theme sites.
* fix: select in `<label>` double caret. closes: [#3613](https://github.com/saadeghi/daisyui/issues/3613)
* fix: dialog does not put focus on first focusable element. closes: [#3440](https://github.com/saadeghi/daisyui/issues/3440)


## 5.0.3 (2025-03-12)

### Bug Fixes

* fix: CDN color opacity utilities
* fix: dropdown-end position
* fix: diff outline
* fix: diff-resizer size and placement
* fix: checked button style

## 5.0.2 (2025-03-11)

### Bug Fixes

* tailwindplay issue ([24cd382](https://github.com/saadeghi/daisyui/commit/24cd382bece0f072c220c51b966c56677d8ab10a))

## 5.0.1 (2025-03-11)

### Bug Fixes

* bug: (v5) I can't override inline the font-size of a button without using important. closes: [#3641](https://github.com/saadeghi/daisyui/issues/3641)
* bug: text content in the alert component isn't responsive. closes: [#3638](https://github.com/saadeghi/daisyui/issues/3638)
* bug: code in prose (typography plugin) is not styled by daisy. closes: [#3631](https://github.com/saadeghi/daisyui/issues/3631)
* bug: Modal looses backdrop transition after build. closes: [#3628](https://github.com/saadeghi/daisyui/issues/3628)
* bug: (v5) unintended outline when using join and radio button. closes: [#3615](https://github.com/saadeghi/daisyui/issues/3615)
* bug: fieldset + select + icon. closes: [#3613](https://github.com/saadeghi/daisyui/issues/3613)
* bug: (v5) Text opacity and custom fonts not working in daisyUI v5 CDN version. closes: [#3612](https://github.com/saadeghi/daisyui/issues/3612)
* bug: "join" applies incorrect border radius when used with a single item. closes: [#3611](https://github.com/saadeghi/daisyui/issues/3611)
* bug: (v5) Button colors do not play well with typography. closes: [#3606](https://github.com/saadeghi/daisyui/issues/3606)
* bug: (v5) Collapse uses variable --rounded-box but it should use --radius-box. closes: [#3600](https://github.com/saadeghi/daisyui/issues/3600)
* bug: Deno requires with attribute on import. closes: [#3597](https://github.com/saadeghi/daisyui/issues/3597)
* bug: The development guides does not work on Windows machine. closes: [#3567](https://github.com/saadeghi/daisyui/issues/3567)
* docs: Badge component code highlight error. closes: [#3627](https://github.com/saadeghi/daisyui/issues/3627)
* docs: Add warning about Modal placement inside Dropdown components. closes: [#3616](https://github.com/saadeghi/daisyui/issues/3616)

## 5.0.0

> This is the detailed list of changes per component. Most of these changes won't affect your project, so if you want to learn about the breaking changes only, [check out the daisyUI 5 release notes](/docs/v5/)

### Alert

🆕 Additions
- Added `alert-outline`, `alert-dash`, and `alert-soft` variants.
- Added `alert-vertical` and `alert-horizontal` layout options.

🔧 Changes
- Instead of hardcoded responsive breakpoints, you can now use the `max-sm:alert-horizontal` or any other responsive breakpoint.

### Artboard

🗑️ Removals
- **Breaking Change:** Removed all `artboard` and `phone-*` classes. These classes were simply setting the width and height of the div. Use Tailwind CSS `w-*` and `h-*` classes instead.

| Before | After |
| --- | --- |
| `artboard phone-1` | `w-[320px] h-[568px]` |
| `artboard phone-2` | `w-[375px] h-[667px]` |
| `artboard phone-3` | `w-[414px] h-[736px]` |
| `artboard phone-4` | `w-[375px] h-[812px]` |
| `artboard phone-5` | `w-[414px] h-[896px]` |
| `artboard phone-6` | `w-[320px] h-[1024px]` |

| Before | After |
| --- | --- |
| `artboard artboard-horizontal phone-1` | `w-[568px] h-[320px]` |
| `artboard artboard-horizontal phone-2` | `w-[667px] h-[375px]` |
| `artboard artboard-horizontal phone-3` | `w-[736px] h-[414px]` |
| `artboard artboard-horizontal phone-4` | `w-[812px] h-[375px]` |
| `artboard artboard-horizontal phone-5` | `w-[896px] h-[414px]` |
| `artboard artboard-horizontal phone-6` | `w-[1024px] h-[320px]` |

```diff:page.html
- <div class="artboard phone-1">
+ <div class="w-[320px] h-[568px]">
```

To be clear, `mockup-phone` is not removed. It just doesn't need the `artboard` class anymore.

### Avatar

🔧 Changes
- **Breaking Change:** Renamed `online` class to `avatar-online`, `offline` to `avatar-offline`, and `placeholder` to `avatar-placeholder`.

```diff:page.html
- <div class="avatar online">
+ <div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```
```diff:page.html
- <div class="avatar offline">
+ <div class="avatar avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```


### Badge

🆕 Additions
- Added `badge-dash`, and `badge-soft` styles.
- Added `badge-xl` size.
- Added a default `gap-2` between content of badge so you don't have to add it manually to put a space between the text and icon.

🔧 Changes
- Adjusted sizes based on the new scale.

### Breadcrumbs

🆕 Additions
- Added a default `gap-2` for the element inside list item so you don't have to add it manually to put a space between the text and icon.

### Bottom Navigation

🗑️ Removals
- **Breaking Change:** Removed `bottom-nav` component. Use [`dock`](/components/dock/) component instead.
- **Breaking Change:** Removed `btm-nav-xs`, `btm-nav-sm`, `btm-nav-md`, `btm-nav-lg`. Use `dock-xs`, `dock-sm`, `dock-md`, `dock-lg` instead.
- **Breaking Change:** Removed `btm-nav-active`. Use `dock-active` instead.
- **Breaking Change:** Removed `disabled` class of `bottom-nav`. Use `aria-disabled="true"` attribute or `disabled` attribute if it's a button. This is for better accessibility.

```diff:page.html
- <div class="btm-nav btm-nav-sm">
+ <div class="dock dock-sm">
  <button>🏠</button>
-   <button class="active">🍿</button>
+   <button class="dock-active">🍿</button>
  <button>⚙️</button>
</div>
```

### Button

🆕 Additions
- Added `btn-xl` size.
- Added `btn-dash` and `btn-soft` styles.
- Added box-shadow with if `--depth` effect is enabled.

🔧 Changes
- Reworked click animation which is now more subtle and fits better with any size of the button.
- Adjusted size scale.
- Adjusted font-size.
- Adjusted padding.
- Improved disabled state styling.
- **Breaking Change:** Default height reduced; customizable via `--size-field`.
- checked button (checkbox, radio) now has outline instead of forced primary color. This allows customization like `checked:btn-secondary`
- `btn-ghost` hover style is changed. In v4 `btn-ghost` had a specific hover style overriding any color modification. For example in `btn btn-ghost btn-primary` the button would'nt look primary. In v5 `btn-ghost` now looks as a ghost only before hover. It shows the original color on hover.

### Card

🆕 Additions
- Added `card-border` and `card-dash` styles which adapts the border width from the theme.
- Added support for different card sizes (`card-xs`, `card-sm`, `card-md`, `card-lg`, `card-xl`).
- Allow `<label class="card">` to be used as a radio card. If a checkbox or radio is directly inside a card, clicking the card will toggle the checkbox/radio and will show an outline around the card.

🔧 Changes
- **Breaking Change:** `card-bordered` is renamed to `card-border`.
- Adjusted padding in card body.
- Adjusted font size.

```diff:page.html
- <div class="card card-bordered">
+ <div class="card card-border">
```

🗑️ Removals
- Removed `card-compact`. Use `card-sm` instead.

### Chat

🆕 Additions
- Added `chat-bubble-neutral` color.

🔧 Changes
- **Breaking Change:** Changed chat bubble default color from `neutral` to `base-300`. Add `chat-bubble-neutral` if you want to keep using the neutral color.
- Improved chat bubble tail shape to a prettier shape.
- Adjusted bubble sizes to fit with other components.
- Adjusted font size for headers/footers.

### Checkbox

🆕 Additions
- Added `checkbox-xl` size.
- Added `checkbox-neutral` color.
- Checkbox is now print-friendly.

🔧 Changes
- Default styles have been significantly altered based on the new theming system.
- Improved the checkmark icon and animation.
- Improved focus styling for better accessibility.
- Adjust size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Countdown

🆕 Additions
- Accessibility improvements for screen readers.

### Diff

🆕 Additions
- Add ability to focus on each side using keyboard navigation.
- Add ability to focus on each side using tap on iOS Safari.

🔧 Changes
- Images are now in chronological order. first image is `diff-item-1` and second image is `diff-item-2`.
- Fix Firefox lag issue.
- Updated HTML syntax to support iOS and keyboard navigation. `tabindex="0"` allows focus on the element using keyboard navigation or tap on iOS Safari where CSS `resize` property is not supported.
```diff:page.html
- <figure class="diff aspect-16/9">
+ <figure class="diff aspect-16/9" tabindex="0">
  <div class="diff-item-1" role="img">
    <img alt="image 1" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
-  <div class="diff-item-2" role="img">
+  <div class="diff-item-2" role="img" tabindex="0">
    <img alt="image 2" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div class="diff-resizer"></div>
</figure>
```

### Dropdown

🆕 Additions
- Using CSS focus method, clicking the dropdown button again will now close the dropdown ✅
- Added support for the new HTML [`popover`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover) attribute. HTML popover is the new standard for creating dropdowns in HTML. It prevents any overflow edge case issues and any z-index issues.
- Added support for the new CSS [`Anchor positioning`](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_anchor_positioning) (Currently only works on Chromium-based browsers. Other browsers will position the dropdown on the middle of the screen, like a modal).

🔧 Changes
- Uses CSS `@starting-style` now.
- Uses `display` instead of `visibility` to show/hide the dropdown to prevent overflow issues.

### Divider

🆕 Additions
- Divider is now print-friendly.

### FileInput

🆕 Additions
- Added `file-input-xl` size.

🔧 Changes
- Adjusted size scale to fit with other components.
- Adjusted padding.
- Adjusted font-size.
- **Breaking Change:** File input now has border by default. Use `file-input-ghost` if you want to remove the border.

🗑️ Removals
- **Breaking Change:** Removed `file-input-bordered`. File input has a border by default now. Use `file-input-ghost` if you want to remove the border.

```diff:page.html
- <input type="file" class="file-input file-input-bordered">
+ <input type="file" class="file-input">
```

### Footer

🆕 Additions
- Added support for horizontal and vertical layouts (`footer-horizontal`, `footer-vertical`).

🔧 Changes
- **Breaking Change:** Footer is now vertical by default. Use `footer-horizontal` to make it horizontal at the screen size you want.

```diff:page.html
- <footer class="footer">
+ <footer class="footer md:footer-horizontal">
```

### Input

🆕 Additions
- Add new `input-xl` size.

🔧 Changes
- **Breaking Change:** Input now has a default width of 20rem, no need for adding `w-full max-w-xs`.
- **Breaking Change:** Removed `input-border`.Input has a border by default now. Use `input-ghost` if you want to remove the border.
- Adjusted padding.
- Adjust size scale to fit with other components.
- Improved focus style.


🗑️ Removals
- **Breaking Change:** Removed `input-bordered` class (not needed anymore).

<div class="before-after">

```html:before
<!-- Input with border -->
<input class="input input-bordered"/>

<!-- Input without border -->
<input class="input"/>

<!-- Input with 20rem width -->
<input class="input w-full max-w-xs"/>
```

```html:after
<!-- Input with border -->
<input class="input"/>

<!-- Input without border -->
<input class="input input-ghost"/>

<!-- Input with consistent width -->
<input class="input"/>
```

</div>


### Join

🔧 Changes
- Refactor the structure to be more compatible with all buttons and fields.

### Kbd

🆕 Additions
- Added new `kbd-xl` size.

### Label

🔧 Changes
- **Breaking Change:** Label has been refactored to be more compatible with form elements. See [label docs](/components/label/) for more information.

### Loading

🔧 Changes
- Added new `loading-xl` size.
- Use SVG animation instead of CSS animation for better performance.
- Fix Safari bug where the animation was stuck sometimes.

### Mask

🗑️ Removals
- **Breaking Change:** Removed `mask-parallelogram`, `mask-parallelogram-2`, `mask-parallelogram-3`, and `mask-parallelogram-4`. These mask styles are no longer included in the library. If you need them, [manually use the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/mask.css#L23)

### Menu

🆕 Additions
- Added new `menu-xl` size.

🔧 Changes
- Improve hover effects to menu items.
- Adjusted padding, font-size, and height to match other components.
- Easier style customization for the menu items.
- **Breaking Change:** vertical menu is not `w-full` anymore. Use `w-full` if you want it to be full width.
- **Breaking Change:** Renamed `disabled` class of menu item to `menu-disabled`.
- **Breaking Change:** Renamed `active` class of menu item to `menu-active`.
- **Breaking Change:** Renamed `focus` class of menu item to `menu-focus`.

```diff:page.html
- <ul class="menu">
+ <ul class="menu w-full">

-   <li class="disabled"><a>disabled item</a></li>
+   <li class="menu-disabled"><a>disabled item</a></li>

-   <li class="active"><a>active item</a></li>
+   <li class="menu-active"><a>active item</a></li>

-   <li class="focus"><a>focus item</a></li>
+   <li class="menu-focus"><a>focus item</a></li>
</ul>
```

### Mockup

🔧 Changes
- **Breaking Change:** Rename `camera` class in mockup-phone to `mockup-phone-camera`.
- **Breaking Change:** Rename `display` class in mockup-phone to `mockup-phone-display`.
- **Breaking Change:** `mockup-phone-display`

```diff:page.html
<div class="mockup-phone">
-  <div class="camera"></div>
+  <div class="mockup-phone-camera"></div>

-    <div class="display">
+    <div class="mockup-phone-display">

-    <div class="artboard artboard-demo phone-1">Hi.</div>
+    <div class="w-[320px] h-[568px]">Hi.</div>
  </div>
</div>
```

### Modal

🆕 Additions
- Added new `modal-start` and `modal-end` positioning options.

🔧 Changes
- Uses CSS `@starting-style` now
- Uses `display` instead of `visibility` to show/hide the modal.

### Radial Progress

🆕 Additions
- Added animation to `--value` when it changes.
- Accessibility improvements for screen readers.

### Radio

🆕 Additions
- Added new `radio-xl` size.
- Radio is now print-friendly.

🔧 Changes
- Improve size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Range

🆕 Additions
- Added new `range-xl` size.

🔧 Changes
- improve the visual appeal of the range component.
- Improve size scale to fit with other components.
- Improve forced color mode for better accessibility.

### Rating

🆕 Additions
- Accessibility improvements for screen readers.

🔧 Changes
- Fix the issue of unchecked radio inputs looking like checked ones.
- Improve the click and focus animations

### Select

🆕 Additions
- Added new `select-xl` size.

🔧 Changes
- **Breaking Change:** Select now has a default width of 20rem, no need for adding `w-full max-w-xs`. `max-w-none` class.

- **Breaking Change:** Removed `select-border`. Select has a border by default now. Use `select-ghost` if you want to remove the border.
- Adjusted padding, height, and font-size to match other components.

<div class="before-after">

```html:before
<!-- Select with border -->
<select class="select select-bordered">

<!-- Select without border -->
<select class="select">

<!-- Select with consistent width -->
<select class="select w-full max-w-xs">
```

```html:after
<!-- Select with border -->
<select class="select">

<!-- Select without border -->
<select class="select select-ghost">

<!-- Select with consistent width -->
<select class="select">
```

</div>

### Stack

🆕 Additions
- Added support for different stack directions `stack-bottom`, `stack-top`, `stack-start`, `stack-end`.

🔧 Changes
- Stack uses CSS grid now.
- **Breaking Change:** Instead of setting the width and height of the stack items, use width and height for the stack itself.

```diff:page.html
- <div class="stack">
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
+ <div class="stack w-36 h-32">
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
</div>
```


### Stat

🔧 Changes
- **Breaking Change:** `stats` background color is now transparent. Use `bg-base-100` if you need a background color.

### Steps

🆕 Additions
- Add new `step-icon` class for custom icons inside step.
- Steps is now print-friendly.

### Tab

🆕 Additions
- Added new `tab-xl` size.
- Adjusted padding, font-size, and height to match other components.
- Added ability to customize the tab height from theme CSS variables. Check out the [Theme Generator](/theme-generator/) page to see how it works.
- Added new `tabs-top` and `tabs-bottom` positioning options.
- Accessibility improvements for screen readers and forced color mode.


🔧 Changes
- Changed and refactored `tabs` and `tab-content` from a grid to flex, allowing us to fix the unstable margin issue at the end of the `tab-content` which was a side-effect of using infinite grid columns in v4, to push the tabs to the left while keeping the content full width. flex and flex order gives us more control over in this layout.
- **Breaking Change:** Renamed `tabs-lifted` to `tabs-lift`.

```diff:page.html
- <div class="tabs tabs-lifted">
+ <div class="tabs tabs-lift">
```

### Table

🆕 Additions
- Added new `table-xl` size.

🔧 Changes
- **Breaking Change:** Removed `hover` class. Use `hover:bg-base-300` (or any other color) instead.

```diff:page.html
- <tr class="hover">
+ <tr class="hover:bg-base-300">
```

### Textarea

🆕 Additions
- Added new `textarea-xl` size.

🔧 Changes
- **Breaking Change:** Removed `textarea-border`. Textarea has a border by default now. Use `textarea-ghost` if you want to remove the border.

### Timeline

🆕 Additions
- Timeline is now print-friendly.

### Toggle

🆕 Additions
- Added new `toggle-xl` size.
- Added `toggle-neutral` color.
- Allow using custom icons for the toggle. [Example](/components/toggle/#toggle-with-icons-inside)
- Toggle is now print-friendly.

🔧 Changes
- Uses CSS pseudo-elements for the toggle thumb instead of box shadow which is visually more accessible.
- Improve forced color mode for better accessibility.

### Tooltip

🆕 Additions
- Added new optional `tooltip-content` class, allowing HTML content inside the tooltip.
- Added smooth transition and animation for all directions.

🔧 Changes
- Changed tooltip tail shape to a prettier shape.

### Typography

🔧 Changes
- daisyUI now only applies colors to `@tailwindcss/typography` plugin, not other modifications like padding. You can customize those according to [`@tailwindcss/typography` config](https://github.com/tailwindlabs/tailwindcss-typography) If you want other modifications from v4, [Here's the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/typography.css#L1)

### Other removals

#### 🗑️ Remove form-control, label-text, label-text-alt

You can still use the same HTML still, but class names don't exist anymore and won't apply color, font-size, flex, etc.  
I suggest using the newly added class names for `fieldset` and `legend` elements for better accessibility.

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  Login
  <div class="label">
    <span class="label-text">Name</span>
  </div>
  <input class="input" placeholder="Name" />
</label>
```

```html:after
<fieldset class="fieldset">
  <legend>Login</legend>
  <label class="label" for="name">Name</label>
  <input id="name" class="input" placeholder="Name" />
</fieldset>
```

</div>

<div class="before-after">

```html:before
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Bottom Left label</span>
    <span class="label-text-alt">Bottom Right label</span>
  </div>
</label>
```

```html:after
<fieldset class="fieldset max-w-xs">
  <label class="label flex justify-between" for="name">
    <span>What is your name?</span>
    <span>Top Right label</span>
  </label>
  <input id="name" class="input" placeholder="Name" />
  <label class="label flex justify-between" for="name">
    <span>Bottom Left label</span>
    <span>Bottom Right label</span>
  </label>
</fieldset>
```

</div>

#### 🗑️ Remove btn-group and input-group

btn-group, input-group were deprecated a year ago and now finally removed.  
If you've been using btn-group or input-group, you can use `join` instead

<div class="before-after">

```html:before
<div class="btn-group">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>
```

```html:after
<div class="join">
  <button class="btn join-item">Button 1</button>
  <button class="btn join-item">Button 2</button>
</div>
```

</div>
