# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## 3.0.0 (2023-05-30)


### Features

* `collapse` now supports `<details>` tag, improve focus style ([7d18914](https://github.com/saadeghi/daisyui/commit/7d189148930e86b549d27731be3642ff83f14896))
* `tooltip` is now responsive ([c0ccb8f](https://github.com/saadeghi/daisyui/commit/c0ccb8f2dcb2cf98250011c1aa9a36a76846cf24))
* add new `join` component ([e2ac98b](https://github.com/saadeghi/daisyui/commit/e2ac98b1c8e953670dd03cde6a0607964d835263))
* add new `loading` component ([b11fb1a](https://github.com/saadeghi/daisyui/commit/b11fb1a3219c2b0b36c82e4c8ba0c44ecc364af9))
* add new class names `table-pin-rows`, `table-pin-cols` ([bace100](https://github.com/saadeghi/daisyui/commit/bace100b1189a9dde294bcb2e7ca62075b054923))
* colors variables are now LCH (no HSL anymore), add support for P3 colors ([01a6e7c](https://github.com/saadeghi/daisyui/commit/01a6e7c1906fa26e76ef6c39109a30279d868ffa))
* lock modal backdrop scroll ([4ba3d4c](https://github.com/saadeghi/daisyui/commit/4ba3d4cd2da679a4a24348c4d76afa480b181122))
* modal using HTML `dialog` element ([5e6f6ca](https://github.com/saadeghi/daisyui/commit/5e6f6caf7f2578a3e4c6dba21090e96475db2fd8))
* new `menu` styles ([b19293f](https://github.com/saadeghi/daisyui/commit/b19293fc75cf14bb25f477a7c413572bdeff2bd1))
* new style for drawer ([74a6527](https://github.com/saadeghi/daisyui/commit/74a652728bdb536adf1f4b316b4483f30e3216d4))
* new style for table ([4f0c0cf](https://github.com/saadeghi/daisyui/commit/4f0c0cf1db80d52a3178d3f2bfaccab50bfd5758))
* now checkbox and radio can use .btn class (using aria-label as the text) ([98bd0d5](https://github.com/saadeghi/daisyui/commit/98bd0d50bfbbabdf837807370761c8a6ae216b5a))
* only light and dark are enabled by default ([8a3741e](https://github.com/saadeghi/daisyui/commit/8a3741e96a7422af9ce7fd5ca834f360f5fefdb1))


### Bug Fixes

* `toast` whitespace ([e22cd66](https://github.com/saadeghi/daisyui/commit/e22cd66628ba24c73b006b39f69ac5bdb9e0be65))
* menu bug on Safari ([e873693](https://github.com/saadeghi/daisyui/commit/e8736939d859d374b324b4b4023873d5bd53a0ac))

### [2.51.5](https://github.com/saadeghi/daisyui/compare/v2.51.4...v2.51.5) (2023-03-21)


### Bug Fixes

* [#1700](https://github.com/saadeghi/daisyui/issues/1700) ([ef1941e](https://github.com/saadeghi/daisyui/commit/ef1941ea1dee945ad3ebb672bd5dcf38388efa8b))

### [2.51.4](https://github.com/saadeghi/daisyui/compare/v2.51.3...v2.51.4) (2023-03-15)


### Bug Fixes

* [#1666](https://github.com/saadeghi/daisyui/issues/1666), fix: [#1691](https://github.com/saadeghi/daisyui/issues/1691) - Button group responsive classes not working properly. ([#1676](https://github.com/saadeghi/daisyui/issues/1676)) ([60893db](https://github.com/saadeghi/daisyui/commit/60893db4ba13d50812ee287da158a0f45cc69a50))

### [2.51.3](https://github.com/saadeghi/daisyui/compare/v2.51.2...v2.51.3) (2023-03-01)


### Bug Fixes

* [#1569](https://github.com/saadeghi/daisyui/issues/1569) extend breadcrumb support for an ordered list ([#1648](https://github.com/saadeghi/daisyui/issues/1648)) ([ca82b9b](https://github.com/saadeghi/daisyui/commit/ca82b9bafe4e8f11ebdc70bc7cb0c2b82caf222e))

### [2.51.2](https://github.com/saadeghi/daisyui/compare/v2.51.1...v2.51.2) (2023-02-27)


### Bug Fixes

* [#1640](https://github.com/saadeghi/daisyui/issues/1640) ([d075a2e](https://github.com/saadeghi/daisyui/commit/d075a2e372ce2e06b22b3f759471e3546167546d))

### [2.51.1](https://github.com/saadeghi/daisyui/compare/v2.51.0...v2.51.1) (2023-02-25)


### Bug Fixes

* transition delay of the background colors on input, select and textarea ([#1606](https://github.com/saadeghi/daisyui/issues/1606)) ([cc16946](https://github.com/saadeghi/daisyui/commit/cc16946039c5786552b71e8dd437d9b976a5d88a))

## [2.51.0](https://github.com/saadeghi/daisyui/compare/v2.50.2...v2.51.0) (2023-02-22)

### Features

* Add type definitions for the package
* Add new `tab-disabled` class name for visually disabling a tab item
* Add border radius to all tabs in `tabs-boxed` (not just the active tab)

### Bug Fixes

* [#1366](https://github.com/saadeghi/daisyui/issues/1366) add type for daisyui plugin ([#1469](https://github.com/saadeghi/daisyui/issues/1469)) ([1b39afb](https://github.com/saadeghi/daisyui/commit/1b39afbbb61b1ba37f5291dbbffc5a3578a0a110))
* [#1613](https://github.com/saadeghi/daisyui/issues/1613) ([24393be](https://github.com/saadeghi/daisyui/commit/24393bea633e42dbccd111cac4d3b12e67f5c6c8))
* border-radius in now applied to all tabs (tabs-boxed) ([#1626](https://github.com/saadeghi/daisyui/issues/1626)) ([0c648f2](https://github.com/saadeghi/daisyui/commit/0c648f2d45bcd00021c11a1eb44b636a46d79e5c))

### [2.50.2](https://github.com/saadeghi/daisyui/compare/v2.50.1...v2.50.2) (2023-02-20)


### Bug Fixes

* [#1617](https://github.com/saadeghi/daisyui/issues/1617) ([3176faa](https://github.com/saadeghi/daisyui/commit/3176faa1911331dab1063a695e99dd0fe92479bf))
* typo compatibility ([#1602](https://github.com/saadeghi/daisyui/issues/1602)) ([41c8b5b](https://github.com/saadeghi/daisyui/commit/41c8b5ba8ba2e7b484bd21b87e5185c577c07fe1))

### [2.50.1](https://github.com/saadeghi/daisyui/compare/v2.50.0...v2.50.1) (2023-02-14)


### Bug Fixes

* [#1598](https://github.com/saadeghi/daisyui/issues/1598) ([fe5fb3b](https://github.com/saadeghi/daisyui/commit/fe5fb3bb49384d9b11158f999cb76edeec6fb8bd))

## [2.50.0](https://github.com/saadeghi/daisyui/compare/v2.49.0...v2.50.0) (2023-02-01)


### Bug Fixes

* [#1560](https://github.com/saadeghi/daisyui/issues/1560) `menu-title` opacity and color inheritance ([bec2094](https://github.com/saadeghi/daisyui/commit/bec2094a63c17fe7d2ad72967e30706f0035894a))
* [#1562](https://github.com/saadeghi/daisyui/issues/1562) ([469cb2c](https://github.com/saadeghi/daisyui/commit/469cb2c9d409b70f8fb0174c19563617ed8ec00d))
* [#1564](https://github.com/saadeghi/daisyui/issues/1564) collapse arrow in RTL mode ([c8c7353](https://github.com/saadeghi/daisyui/commit/c8c7353da8306846742ec99bd5f2842d580f84f3))
* [#1567](https://github.com/saadeghi/daisyui/issues/1567) remove `rating` border radius on mobile ([df41fbc](https://github.com/saadeghi/daisyui/commit/df41fbc24c518df0a0b0b18c9493e8b805f96306))
* indicator white space ([7df6173](https://github.com/saadeghi/daisyui/commit/7df61735f7c517b2ffd3131a1d5dfe06b6319eb8))

## [2.49.0](https://github.com/saadeghi/daisyui/compare/v2.48.0...v2.49.0) (2023-01-25)


### Bug Fixes

* [#1070](https://github.com/saadeghi/daisyui/issues/1070) ([1c7640b](https://github.com/saadeghi/daisyui/commit/1c7640bef75d569bdf209bdec94f16a9604bb057))

## [2.48.0](https://github.com/saadeghi/daisyui/compare/v2.47.1...v2.48.0) (2023-01-25)

### Features

* `textarea` now has `xs`, `sm`, `md` and `lg` sizes: [#1462](https://github.com/saadeghi/daisyui/pull/1542)

### Bug Fixes

*  A `tooltip` without a `data-tip` attribute will not show an empty tooltip anymore [#1501](https://github.com/saadeghi/daisyui/pull/1501)

* Fix bordered menu entry on sub menus [#1536](https://github.com/saadeghi/daisyui/pull/1536)


* [#1551](https://github.com/saadeghi/daisyui/issues/1551) ([8fce093](https://github.com/saadeghi/daisyui/commit/8fce093bc11eb7814bc7bdfc0b9dcc61f65db417))

### [2.47.1](https://github.com/saadeghi/daisyui/compare/v2.47.0...v2.47.1) (2023-01-25)

## [2.47.0](https://github.com/saadeghi/daisyui/compare/v2.46.1...v2.47.0) (2023-01-16)


### Features

* More precise Hex to HSL conversion .Now HSL values round to 5 decimal places instead of 0 ([36d27f0](https://github.com/saadeghi/daisyui/commit/36d27f096f41ce43733002f4e617be7ecb1883ca))


### Bug Fixes

* **docs:** Bordered menu item preview has incorrect class ([#1505](https://github.com/saadeghi/daisyui/issues/1505)) ([e2857f7](https://github.com/saadeghi/daisyui/commit/e2857f74a1f3f5f8d7bb8130aa429ce15297895c))
* **docs:** typos in the Portuguese translation ([#1482](https://github.com/saadeghi/daisyui/issues/1482)) ([763726c](https://github.com/saadeghi/daisyui/commit/763726cb6c3eabed70eef2a3af6202328fb51ebc))
* **docs:** update and improve japanese translation ([#1510](https://github.com/saadeghi/daisyui/issues/1510)) ([4fbba93](https://github.com/saadeghi/daisyui/commit/4fbba93808f7a2a36c09f3057e2c2bd1552a8b3d))

### [2.46.1](https://github.com/saadeghi/daisyui/compare/v2.46.0...v2.46.1) (2023-01-02)

## [2.46.0](https://github.com/saadeghi/daisyui/compare/v2.45.0...v2.46.0) (2022-12-20)


### Bug Fixes

* [#1445](https://github.com/saadeghi/daisyui/issues/1445) ([636057b](https://github.com/saadeghi/daisyui/commit/636057b27ae66db3f6f2a9b2700b828979597c65))

## [2.45.0](https://github.com/saadeghi/daisyui/compare/v2.44.0...v2.45.0) (2022-12-15)


### Bug Fixes

* [#1438](https://github.com/saadeghi/daisyui/issues/1438) ([efacaf8](https://github.com/saadeghi/daisyui/commit/efacaf87eb0f1d465fd6e849e8f05d9de4251559))

## [2.44.0](https://github.com/saadeghi/daisyui/compare/v2.43.2...v2.44.0) (2022-12-15)


### Bug Fixes

* [#1401](https://github.com/saadeghi/daisyui/issues/1401) ([a6fa00d](https://github.com/saadeghi/daisyui/commit/a6fa00dd03aaf41cc8b7e9a604b0b7ca64c063ce))

### [2.43.2](https://github.com/saadeghi/daisyui/compare/v2.43.1...v2.43.2) (2022-12-12)

### [2.43.1](https://github.com/saadeghi/daisyui/compare/v2.43.0...v2.43.1) (2022-12-12)


### Bug Fixes

* [#1426](https://github.com/saadeghi/daisyui/issues/1426) collapse uses focus-within instead of focus ([#1428](https://github.com/saadeghi/daisyui/issues/1428)) ([20c9c30](https://github.com/saadeghi/daisyui/commit/20c9c3077df20354dc391bcf630af7cb1e3e169a))

## [2.43.0](https://github.com/saadeghi/daisyui/compare/v2.42.1...v2.43.0) (2022-12-09)


### Bug Fixes

* [#1417](https://github.com/saadeghi/daisyui/issues/1417) ([1f9f4d8](https://github.com/saadeghi/daisyui/commit/1f9f4d8f34e0caa381f5fcb898d34395397e4aec))

### [2.42.1](https://github.com/saadeghi/daisyui/compare/v2.42.0...v2.42.1) (2022-11-24)


### Bug Fixes

* RTL style for `chat` ([3887c6e](https://github.com/saadeghi/daisyui/commit/3887c6e7f1e71362c1d49649597bfa7ee985fd7e))

## [2.42.0](https://github.com/saadeghi/daisyui/compare/v2.41.0...v2.42.0) (2022-11-23)


### Features

* Add new component `chat` ([522bc5e](https://github.com/saadeghi/daisyui/commit/522bc5ebf4fe6d4ec4e9ac8236c63fe10e250d8f))


### Bug Fixes

* [#1384](https://github.com/saadeghi/daisyui/issues/1384) (visible scrollbar in drawer-end animation) ([ced3ae9](https://github.com/saadeghi/daisyui/commit/ced3ae9b3eb392c07952152c0106a6f2347d79eb))

## [2.41.0](https://github.com/saadeghi/daisyui/compare/v2.40.1...v2.41.0) (2022-11-16)

### Features

* Disabled `toggle` now looks different from unchecked toggle

### Bug Fixes

* [#1342](https://github.com/saadeghi/daisyui/issues/1342) ([bf84cb7](https://github.com/saadeghi/daisyui/commit/bf84cb70122fea80a220d09f5d109a8c16946ee5))
* [#1361](https://github.com/saadeghi/daisyui/issues/1361) ([8636cb9](https://github.com/saadeghi/daisyui/commit/8636cb98fa5916a2b308b88788371a558cd72e46))

### [2.40.1](https://github.com/saadeghi/daisyui/compare/v2.40.0...v2.40.1) (2022-11-14)


### Bug Fixes

* border radius of file input on Safari ([f938fe3](https://github.com/saadeghi/daisyui/commit/f938fe31cd1628ec0ba3e48ba8cd7fcdcfc95c29))

## [2.40.0](https://github.com/saadeghi/daisyui/compare/v2.39.1...v2.40.0) (2022-11-14)


### Bug Fixes

* [#1350](https://github.com/saadeghi/daisyui/issues/1350) File Input Button for Safari ([#1351](https://github.com/saadeghi/daisyui/issues/1351)) ([c623168](https://github.com/saadeghi/daisyui/commit/c6231687d43688bf9ff630d46f4faed53febad1e))
* remove collapse-content cutoff ([#1352](https://github.com/saadeghi/daisyui/issues/1352)) ([cbeaa60](https://github.com/saadeghi/daisyui/commit/cbeaa60242e67ce72db4bc28d69f6b7ab5dec4e2))

### Features
* Bottom navigation now respects the iOS safe-area

### [2.39.1](https://github.com/saadeghi/daisyui/compare/v2.39.0...v2.39.1) (2022-11-11)


### Bug Fixes

* [#1334](https://github.com/saadeghi/daisyui/issues/1334) ([8d15ee1](https://github.com/saadeghi/daisyui/commit/8d15ee1814880f3adc29198d0f65e0e03eeeb9ad))
* [#1342](https://github.com/saadeghi/daisyui/issues/1342) ([6f03fe7](https://github.com/saadeghi/daisyui/commit/6f03fe76a3769aab6c5efff5e410dc13ccf3e6df))
* [#1344](https://github.com/saadeghi/daisyui/issues/1344) ([da48099](https://github.com/saadeghi/daisyui/commit/da48099559254a7e3a554a5d8a316dd8428bf138))

## [2.39.0](https://github.com/saadeghi/daisyui/compare/v2.38.1...v2.39.0) (2022-11-09)


### Bug Fixes

* [#1308](https://github.com/saadeghi/daisyui/issues/1308) ([af8e43c](https://github.com/saadeghi/daisyui/commit/af8e43c2792129f190aafca0d55922e61ebf9d5c))
* [#436](https://github.com/saadeghi/daisyui/issues/436), add smooth closing animation ([d5a795a](https://github.com/saadeghi/daisyui/commit/d5a795a68e727628d97279bbaa4a18bc6ab65bff))
* **docs:** missing periods + minor changes ([#1328](https://github.com/saadeghi/daisyui/issues/1328)) ([ab1ec52](https://github.com/saadeghi/daisyui/commit/ab1ec5287f59b505dc0706c88e58c3cd1782d0b6))

### [2.38.1](https://github.com/saadeghi/daisyui/compare/v2.38.0...v2.38.1) (2022-11-05)


### Bug Fixes

* [#1279](https://github.com/saadeghi/daisyui/issues/1279) ([de4af14](https://github.com/saadeghi/daisyui/commit/de4af145e224e7d139bbe7336de9f9950046b71e))
* [#1322](https://github.com/saadeghi/daisyui/issues/1322) ([fa9c3c3](https://github.com/saadeghi/daisyui/commit/fa9c3c35283ba6440e9918b52a66400403b5a12f))

## [2.38.0](https://github.com/saadeghi/daisyui/compare/v2.37.0...v2.38.0) (2022-11-01)


### Features

* Card no longer has `overflow: hidden`. Instead, the figure will adapt the card border radius, fix: [#1175](https://github.com/saadeghi/daisyui/issues/1175) ([10786e6](https://github.com/saadeghi/daisyui/commit/10786e66d176a897261cfa9b0984e04569ce2140))


### Bug Fixes

* [#1050](https://github.com/saadeghi/daisyui/issues/1050) ([0626701](https://github.com/saadeghi/daisyui/commit/0626701a0fccf4fa31462d513c7e5cee3a0e3905))
* [#1245](https://github.com/saadeghi/daisyui/issues/1245) ([34782ce](https://github.com/saadeghi/daisyui/commit/34782ce2725a476008872d59c2c22918f39a22a8))
* [#1267](https://github.com/saadeghi/daisyui/issues/1267) ([89434c2](https://github.com/saadeghi/daisyui/commit/89434c2c8cda6fb66c69446c555de21e6c3d74dd))
* [#1302](https://github.com/saadeghi/daisyui/issues/1302) ([f343ed4](https://github.com/saadeghi/daisyui/commit/f343ed4fd5b0f3a677f7ae138e4fd006110631a1))
* [#698](https://github.com/saadeghi/daisyui/issues/698), feat: Now dark themes have `color-scheme` for scrollbars etc. ([40bab42](https://github.com/saadeghi/daisyui/commit/40bab427ea49247ba621d8d7ca256c161689977e))

## [2.37.0](https://github.com/saadeghi/daisyui/compare/v2.36.1...v2.37.0) (2022-10-31)


### Bug Fixes

* [#1069](https://github.com/saadeghi/daisyui/issues/1069) ([781a805](https://github.com/saadeghi/daisyui/commit/781a80552cbcacf72ff85ca3ddf3d5446192a7b5))
* [#1148](https://github.com/saadeghi/daisyui/issues/1148) ([be35220](https://github.com/saadeghi/daisyui/commit/be35220973fd75f93e57327ae160e4c468ce1634))
* [#1230](https://github.com/saadeghi/daisyui/issues/1230) ([f8a5df4](https://github.com/saadeghi/daisyui/commit/f8a5df446036164368ea982eb33416c12ee7fc5f))
* [#1266](https://github.com/saadeghi/daisyui/issues/1266) ([fe0d201](https://github.com/saadeghi/daisyui/commit/fe0d2018033e4b41db301273eccf7fa06371b666))
* [#762](https://github.com/saadeghi/daisyui/issues/762), feat: `darkTheme` config now can be `false` to disable `prefers-color-scheme: dark` ([d7688cc](https://github.com/saadeghi/daisyui/commit/d7688ccaa914aa9a559ab9fba6def246ee34d8c6))
* [#875](https://github.com/saadeghi/daisyui/issues/875) ([ae61625](https://github.com/saadeghi/daisyui/commit/ae6162560593836cb8454c7757a12ac50e75adf1))

### [2.36.1](https://github.com/saadeghi/daisyui/compare/v2.36.0...v2.36.1) (2022-10-29)

### Bug Fixes
* [1205](https://github.com/saadeghi/daisyui/issues/1205)

## [2.36.0](https://github.com/saadeghi/daisyui/compare/v2.35.0...v2.36.0) (2022-10-29)


### Features

* [#1218](https://github.com/saadeghi/daisyui/issues/1218) - Add missing modifiers on dropdown and tooltip ([#1232](https://github.com/saadeghi/daisyui/issues/1232)) ([1728632](https://github.com/saadeghi/daisyui/commit/1728632c3f402a827a3d3ffc8aa3f7806a04ccd6))

## [2.35.0](https://github.com/saadeghi/daisyui/compare/v2.34.1...v2.35.0) (2022-10-29)

### Features

Add the following color variants 
  - success
  - warning
  - info
  - error

for the following components:
  - range
  - toggle
  - radio
  - checkbox

### [2.34.1](https://github.com/saadeghi/daisyui/compare/v2.34.0...v2.34.1) (2022-10-29)


### Bug Fixes

* [#1233](https://github.com/saadeghi/daisyui/issues/1233) ([5abe8da](https://github.com/saadeghi/daisyui/commit/5abe8da383120b0296d030efae38cd7676b645aa))

## [2.34.0](https://github.com/saadeghi/daisyui/compare/v2.33.0...v2.34.0) (2022-10-29)


### Bug Fixes

* [#1186](https://github.com/saadeghi/daisyui/issues/1186) ([938d047](https://github.com/saadeghi/daisyui/commit/938d047c7059a825e7cfd743b1e0f4ffefda8095))
* [#1265](https://github.com/saadeghi/daisyui/issues/1265) ([f25bf92](https://github.com/saadeghi/daisyui/commit/f25bf92643551893847936e6bca4d1a654dba15c))
* [#1275](https://github.com/saadeghi/daisyui/issues/1275) ([6bba2de](https://github.com/saadeghi/daisyui/commit/6bba2de162bd6c25490cf278667c9d3e637ec3c9))
* [#834](https://github.com/saadeghi/daisyui/issues/834) ([aa6e812](https://github.com/saadeghi/daisyui/commit/aa6e812e1af4c3f900b7d1efbe6e7c0019ad8693))
* Error from comments in modal react examples ([#1278](https://github.com/saadeghi/daisyui/issues/1278)) ([b96415b](https://github.com/saadeghi/daisyui/commit/b96415b7a63f9decc006041e317bc34213826b14))

## [2.33.0](https://github.com/saadeghi/daisyui/compare/v2.32.0...v2.33.0) (2022-10-20)


### Bug Fixes

* [#1261](https://github.com/saadeghi/daisyui/issues/1261) ([3db1b18](https://github.com/saadeghi/daisyui/commit/3db1b18500fd0ddbf2e6e0012b97cdab0ed10212))

## [2.32.0](https://github.com/saadeghi/daisyui/compare/v2.31.0...v2.32.0) (2022-10-20)


### Bug Fixes

* [#1261](https://github.com/saadeghi/daisyui/issues/1261) ([fdb6c93](https://github.com/saadeghi/daisyui/commit/fdb6c93de595d64e9a7d954f760124893a5bfd6f))

## [2.31.0](https://github.com/saadeghi/daisyui/compare/v2.30.0...v2.31.0) (2022-09-21)


### Bug Fixes

* menu width ([261ced5](https://github.com/saadeghi/daisyui/commit/261ced5aeb379468815928bc071a0f9d9b0faca5))

## [2.30.0](https://github.com/saadeghi/daisyui/compare/v2.29.0...v2.30.0) (2022-09-21)

## [2.29.0](https://github.com/saadeghi/daisyui/compare/v2.28.0...v2.29.0) (2022-09-20)


### Bug Fixes

* menu width and menu item shrink issue ([f57942e](https://github.com/saadeghi/daisyui/commit/f57942eb395e6b74e8837fb594b6128ffa6afaf0))

## [2.28.0](https://github.com/saadeghi/daisyui/compare/v2.27.0...v2.28.0) (2022-09-16)


### Bug Fixes

* [#1142](https://github.com/saadeghi/daisyui/issues/1142) ([3f53ef7](https://github.com/saadeghi/daisyui/commit/3f53ef790be2d38dad64202ef478c31dce77f35e))
* strokeLineCap in navbar example ([#1125](https://github.com/saadeghi/daisyui/issues/1125)) ([f61a510](https://github.com/saadeghi/daisyui/commit/f61a5107a5b437290aabc56324af766cc17f4b7f))

## [2.27.0](https://github.com/saadeghi/daisyui/compare/v2.26.0...v2.27.0) (2022-09-10)


### Features

* `btn-group-horizontal` and `btn-group-vertical` classes are now responsive ([f27340b](https://github.com/saadeghi/daisyui/commit/f27340b23c6f1b63a416540318ce49929bcc89ad))

## [2.26.0](https://github.com/saadeghi/daisyui/compare/v2.25.0...v2.26.0) (2022-09-10)


### Features

* allow utility classes to change padding and min-height for `collapse` ([e0fa734](https://github.com/saadeghi/daisyui/commit/e0fa734e957a9f6fa5202a3c35504315c50020fb))


### Bug Fixes

* disabled jsx attribute in button example ([#1103](https://github.com/saadeghi/daisyui/issues/1103)) ([6f92423](https://github.com/saadeghi/daisyui/commit/6f92423737eb229da8d3e599619e1e18a39d053c))

## [2.25.0](https://github.com/saadeghi/daisyui/compare/v2.24.2...v2.25.0) (2022-09-05)

### Features

* 70% smaller size for `mask` styles

### Bug Fixes

* corrected incorrect jsx attribute on drawer and modal components ([#1095](https://github.com/saadeghi/daisyui/issues/1095)) ([77506ca](https://github.com/saadeghi/daisyui/commit/77506ca8e188a76aa318c2371e91ee1f7c18dacb))

### [2.24.2](https://github.com/saadeghi/daisyui/compare/v2.24.1...v2.24.2) (2022-09-04)

### [2.24.1](https://github.com/saadeghi/daisyui/compare/v2.24.0...v2.24.1) (2022-09-04)


### Bug Fixes

* [#1094](https://github.com/saadeghi/daisyui/issues/1094) ([ded7fab](https://github.com/saadeghi/daisyui/commit/ded7fab188634a835660851dc6b1f34bcf6c8682))
* duplicate theme color ([#1059](https://github.com/saadeghi/daisyui/issues/1059)) ([bb7e3f5](https://github.com/saadeghi/daisyui/commit/bb7e3f523b3be1fc73373b0f0ce6577f5eebd8b5))

## [2.24.0](https://github.com/saadeghi/daisyui/compare/v2.23.0...v2.24.0) (2022-08-13)


### Features

* refactor `badge` modifier/responsive class name categorization ([3a3e055](https://github.com/saadeghi/daisyui/commit/3a3e05525f458b8e8dea911388364618a9ab1eda))

## [2.23.0](https://github.com/saadeghi/daisyui/compare/v2.22.1...v2.23.0) (2022-08-13)


### Features

* refactor `alert` and `radio` modifier/responsive class name categorization ([b58ecea](https://github.com/saadeghi/daisyui/commit/b58eceaaed3e20287d0ce7e9e5d51e9f854ab84a))


### Bug Fixes

* [#952](https://github.com/saadeghi/daisyui/issues/952) ([6ef8ad3](https://github.com/saadeghi/daisyui/commit/6ef8ad3fc39a77c16f03391590248dcdfcda6c4f))

### [2.22.1](https://github.com/saadeghi/daisyui/compare/v2.22.0...v2.22.1) (2022-08-12)


### Bug Fixes

* [#1001](https://github.com/saadeghi/daisyui/issues/1001) ([4cedd56](https://github.com/saadeghi/daisyui/commit/4cedd563268847f01dfa8114ce0b1133e3b1e4b3))
* [#960](https://github.com/saadeghi/daisyui/issues/960) ([6b2a1c0](https://github.com/saadeghi/daisyui/commit/6b2a1c0d6cfc4e1f5cab24e47d3de4d2a24bfcb6))
* grammatical errors and updated keys to match ([#1005](https://github.com/saadeghi/daisyui/issues/1005)) ([bf2365d](https://github.com/saadeghi/daisyui/commit/bf2365d416e02bee61fd85f0d4d68bca97009d07))

## [2.22.0](https://github.com/saadeghi/daisyui/compare/v2.21.0...v2.22.0) (2022-08-04)


### Bug Fixes

* [#995](https://github.com/saadeghi/daisyui/issues/995) ([47fbdd8](https://github.com/saadeghi/daisyui/commit/47fbdd8b43c7793a58fe466e8405bbee889cf10b))

## [2.21.0](https://github.com/saadeghi/daisyui/compare/v2.20.0...v2.21.0) (2022-08-04)

## [2.20.0](https://github.com/saadeghi/daisyui/compare/v2.19.1...v2.20.0) (2022-07-23)


### Bug Fixes

* [#970](https://github.com/saadeghi/daisyui/issues/970) ([4af523d](https://github.com/saadeghi/daisyui/commit/4af523dd6228722ab7aa73445caa25cb9af31894))

### [2.19.1](https://github.com/saadeghi/daisyui/compare/v2.19.0...v2.19.1) (2022-07-20)


### Bug Fixes

* [#957](https://github.com/saadeghi/daisyui/issues/957) ([8f8d7fb](https://github.com/saadeghi/daisyui/commit/8f8d7fbe21d420976a759fff82e1df1e7c3b9317))

## [2.19.0](https://github.com/saadeghi/daisyui/compare/v2.18.2...v2.19.0) (2022-07-09)


### Features

* add new `toast` component ([b57457f](https://github.com/saadeghi/daisyui/commit/b57457f3c3039ad9fabcf551e4f50ca19c754674))

### [2.18.2](https://github.com/saadeghi/daisyui/compare/v2.18.0...v2.18.2) (2022-07-09)

## [2.18.0](https://github.com/saadeghi/daisyui/compare/v2.17.0...v2.18.0) (2022-07-03)

### Features
* add new `bottom-navigation` component

### Bug Fixes

* spelling correction ([#905](https://github.com/saadeghi/daisyui/issues/905)) ([d6a9546](https://github.com/saadeghi/daisyui/commit/d6a9546ef29e83908b4c5597c81afd722632f5c8))

## [2.17.0](https://github.com/saadeghi/daisyui/compare/v2.16.0...v2.17.0) (2022-06-22)


### Features

* add `btn-group-vertical` ([41ce08c](https://github.com/saadeghi/daisyui/commit/41ce08c18dede1524627c2395ec5f611711d4907))

## [2.16.0](https://github.com/saadeghi/daisyui/compare/v2.15.4...v2.16.0) (2022-06-22)

### [2.15.4](https://github.com/saadeghi/daisyui/compare/v2.15.3...v2.15.4) (2022-06-15)

### [2.15.3](https://github.com/saadeghi/daisyui/compare/v2.15.2...v2.15.3) (2022-06-10)

### [2.15.2](https://github.com/saadeghi/daisyui/compare/v2.15.1...v2.15.2) (2022-05-30)


### Bug Fixes

* [#816](https://github.com/saadeghi/daisyui/issues/816) ([b16ec4f](https://github.com/saadeghi/daisyui/commit/b16ec4f25d3dd73bb848c2cee23147ad05f0d22d))
* [#823](https://github.com/saadeghi/daisyui/issues/823) ([7db4885](https://github.com/saadeghi/daisyui/commit/7db48850a0e47fc83e9b28c3f4f6aa2d15a11872))

### [2.15.1](https://github.com/saadeghi/daisyui/compare/v2.15.0...v2.15.1) (2022-05-24)


### Bug Fixes

* [#807](https://github.com/saadeghi/daisyui/issues/807) ([e81fda2](https://github.com/saadeghi/daisyui/commit/e81fda2db63ffc758597e16f08a0280b9f4d60e3))

## [2.15.0](https://github.com/saadeghi/daisyui/compare/v2.14.4...v2.15.0) (2022-05-15)

### [2.14.4](https://github.com/saadeghi/daisyui/compare/v2.14.3...v2.14.4) (2022-05-15)


### Bug Fixes

* [#739](https://github.com/saadeghi/daisyui/issues/739) ([2bb7e57](https://github.com/saadeghi/daisyui/commit/2bb7e57864e086313d6ed04769785d3b8db2dc64))
* tabindex=0 breaks collapse with checkbox on safari ([#784](https://github.com/saadeghi/daisyui/issues/784)) ([f60c010](https://github.com/saadeghi/daisyui/commit/f60c0100d03ebce37ef936bc3666bdebedf42633))

### [2.14.3](https://github.com/saadeghi/daisyui/compare/v2.14.2...v2.14.3) (2022-04-30)


### Bug Fixes

* [#721](https://github.com/saadeghi/daisyui/issues/721) ([3259d00](https://github.com/saadeghi/daisyui/commit/3259d00c1b8eb112f2a611dca7d246a08698815d))
* [#753](https://github.com/saadeghi/daisyui/issues/753) ([2fb28c4](https://github.com/saadeghi/daisyui/commit/2fb28c474859acbea19461fd9ba8090d4f9e567c))
* [#766](https://github.com/saadeghi/daisyui/issues/766) ([ac58329](https://github.com/saadeghi/daisyui/commit/ac58329143d87d9f6f3f5cc590b1deda15663a84))

### [2.14.2](https://github.com/saadeghi/daisyui/compare/v2.14.1...v2.14.2) (2022-04-23)


### Bug Fixes

* [#736](https://github.com/saadeghi/daisyui/issues/736) ([3946525](https://github.com/saadeghi/daisyui/commit/394652539ccaeb8b368bd0a7010ba495cbc105d2))
* [#740](https://github.com/saadeghi/daisyui/issues/740) ([d133cfd](https://github.com/saadeghi/daisyui/commit/d133cfd3c0ed6513bf318b75d3b540c12aa5e65b))

### [2.14.1](https://github.com/saadeghi/daisyui/compare/v2.14.0...v2.14.1) (2022-04-18)


### Bug Fixes

* [#726](https://github.com/saadeghi/daisyui/issues/726) ([#728](https://github.com/saadeghi/daisyui/issues/728)) ([5f765f1](https://github.com/saadeghi/daisyui/commit/5f765f11ab0c40597fa9ca28199159f042581dd4))
* Change `cupcake` for `cmyk` ([#724](https://github.com/saadeghi/daisyui/issues/724)) ([0546093](https://github.com/saadeghi/daisyui/commit/054609306728e79394fa891b0aa2e69b14e403e1))

## [2.14.0](https://github.com/saadeghi/daisyui/compare/v2.13.6...v2.14.0) (2022-04-15)


### Bug Fixes

* [#684](https://github.com/saadeghi/daisyui/issues/684) ([d8533f5](https://github.com/saadeghi/daisyui/commit/d8533f51f57cc12304530f923afe145397061b17))
* [#693](https://github.com/saadeghi/daisyui/issues/693) ([10a34c7](https://github.com/saadeghi/daisyui/commit/10a34c79dbc5f6969a04802b26de17a16b3a3ea2))
* [#704](https://github.com/saadeghi/daisyui/issues/704) ([b604e46](https://github.com/saadeghi/daisyui/commit/b604e467a1bdc054b9e4e2e7d0576b68e5df781b))
* [#713](https://github.com/saadeghi/daisyui/issues/713) ([0db6d9f](https://github.com/saadeghi/daisyui/commit/0db6d9f6b96faf1e64da3089b5a9b6f2a0294552))

### [2.13.6](https://github.com/saadeghi/daisyui/compare/v2.13.5...v2.13.6) (2022-04-02)


### Bug Fixes

* [#666](https://github.com/saadeghi/daisyui/issues/666) 🔥😈🔥 ([fb69933](https://github.com/saadeghi/daisyui/commit/fb69933b023208c62f6e9b03de386b194790aba2))
* [#667](https://github.com/saadeghi/daisyui/issues/667) ([5d66013](https://github.com/saadeghi/daisyui/commit/5d66013814864a7db43d0c9f1f0385cd636b61c3))
* [#675](https://github.com/saadeghi/daisyui/issues/675) ([8e7887b](https://github.com/saadeghi/daisyui/commit/8e7887b90a695b236077cd61e4a3e31513a9e954))

### [2.13.5](https://github.com/saadeghi/daisyui/compare/v2.13.4...v2.13.5) (2022-03-31)


### Bug Fixes

* `drawer-end` issue when there's another drawer inside it ([d6e8b9c](https://github.com/saadeghi/daisyui/commit/d6e8b9c5ed9c129ca0a75d2e592d9637132af300))

### [2.13.4](https://github.com/saadeghi/daisyui/compare/v2.13.3...v2.13.4) (2022-03-28)


### Bug Fixes

* [#655](https://github.com/saadeghi/daisyui/issues/655) ([9b8f5ae](https://github.com/saadeghi/daisyui/commit/9b8f5ae639e75be8d3b93c1dffed76fa5288ae92))

### [2.13.3](https://github.com/saadeghi/daisyui/compare/v2.13.2...v2.13.3) (2022-03-26)

### [2.13.2](https://github.com/saadeghi/daisyui/compare/v2.13.1...v2.13.2) (2022-03-25)


### Bug Fixes

* [#648](https://github.com/saadeghi/daisyui/issues/648) ([12c063a](https://github.com/saadeghi/daisyui/commit/12c063a02b41cae37bd520cc18c11fed006643d7))

### [2.13.1](https://github.com/saadeghi/daisyui/compare/v2.12.0...v2.13.1) (2022-03-25)


### Bug Fixes

* [#651](https://github.com/saadeghi/daisyui/issues/651) ([52baf6b](https://github.com/saadeghi/daisyui/commit/52baf6b3f83faf2e33034eeef8c3e98a020753b6))

## [2.13.0](https://github.com/saadeghi/daisyui/compare/v2.12.0...v2.13.0) (2022-03-24)


### Features

* Improve color contrast on `aqua` ,`emerald` ,`light` themes

## [2.12.0](https://github.com/saadeghi/daisyui/compare/v2.11.1...v2.12.0) (2022-03-24)


### Features

* drawer now has `width:100%` and `height:100svh` and  by default (if supported). fixes: [#313](https://github.com/saadeghi/daisyui/issues/313) on iOS 15.4+ ([c8b104a](https://github.com/saadeghi/daisyui/commit/c8b104af724761093612878ba283aa5f16756f0c))
* now every element with `data-theme` will have `base-100` color for background and `base-content` color for text by default. ([216d115](https://github.com/saadeghi/daisyui/commit/216d115acf6c30711418445764b9c4a9628e3462))
* Improve `base-200` and `base-300` colors on `light` theme

### Bug Fixes

* [#610](https://github.com/saadeghi/daisyui/issues/610) ([359556c](https://github.com/saadeghi/daisyui/commit/359556c3adf7e306896bad1f17f7cf9724b3fc68))
* [#643](https://github.com/saadeghi/daisyui/issues/643) ([7d3aaf3](https://github.com/saadeghi/daisyui/commit/7d3aaf3f2383a81d67221e407acf515334a35574))
* [#644](https://github.com/saadeghi/daisyui/issues/644) ([ee05252](https://github.com/saadeghi/daisyui/commit/ee05252867e9afdc237c8219a64cda44a5e9803a))
* [#645](https://github.com/saadeghi/daisyui/issues/645) ([fffb937](https://github.com/saadeghi/daisyui/commit/fffb937b1bece917543ca1d72c12adb65ba4104e))

### [2.11.1](https://github.com/saadeghi/daisyui/compare/v2.11.0...v2.11.1) (2022-03-22)


### Bug Fixes

* [#636](https://github.com/saadeghi/daisyui/issues/636) ([38b743b](https://github.com/saadeghi/daisyui/commit/38b743b433922a3fd78f6001599214671722d11e))

## [2.11.0](https://github.com/saadeghi/daisyui/compare/v2.10.0...v2.11.0) (2022-03-18)


### Features

* add new responsive modifier classes for `modal`: `modal-bottom` and `modal-middle` (fixes [#616](https://github.com/saadeghi/daisyui/issues/616)) ([9e5313f](https://github.com/saadeghi/daisyui/commit/9e5313f0fe2b3bc8a3f4bb27c76ddf93fed2637b))
* indicator positions are now responsive and accept sm:, md:, etc. prefixes ([5e7ac34](https://github.com/saadeghi/daisyui/commit/5e7ac344afce6b06318473fb029fcd598819a8d9))


### Bug Fixes

* [#605](https://github.com/saadeghi/daisyui/issues/605) ([f68fc08](https://github.com/saadeghi/daisyui/commit/f68fc085360cdaf592f417f3e39eec488df60385))

## [2.10.0](https://github.com/saadeghi/daisyui/compare/v2.8.0...v2.10.0) (2022-03-17)


### Bug Fixes

* [#601](https://github.com/saadeghi/daisyui/issues/601) ([462920f](https://github.com/saadeghi/daisyui/commit/462920f3344b7df03ce5394e0f21d8f930dfc32f))
* [#615](https://github.com/saadeghi/daisyui/issues/615) ([e8f6b1b](https://github.com/saadeghi/daisyui/commit/e8f6b1b2b295df161a8643c04f53363c26842bdd))
* [#626](https://github.com/saadeghi/daisyui/issues/626) ([b7da2b6](https://github.com/saadeghi/daisyui/commit/b7da2b617db6a57a632c7e90bb41bd4bf2a6f1c5))

## [2.9.0](https://github.com/saadeghi/daisyui/compare/v2.8.0...v2.9.0) (2022-03-16)


### Bug Fixes

* [#578](https://github.com/saadeghi/daisyui/issues/578) ([11a5781](https://github.com/saadeghi/daisyui/commit/11a5781864fd39ee3d8111bc845f8cd3c9123eab))
* [#601](https://github.com/saadeghi/daisyui/issues/601) ([462920f](https://github.com/saadeghi/daisyui/commit/462920f3344b7df03ce5394e0f21d8f930dfc32f))
* [#615](https://github.com/saadeghi/daisyui/issues/615) ([e8f6b1b](https://github.com/saadeghi/daisyui/commit/e8f6b1b2b295df161a8643c04f53363c26842bdd))

## [2.8.0](https://github.com/saadeghi/daisyui/compare/v2.7.0...v2.8.0) (2022-03-13)


### Bug Fixes

* [#574](https://github.com/saadeghi/daisyui/issues/574) ([21f1de3](https://github.com/saadeghi/daisyui/commit/21f1de3db75fc7a164e9059b6d0c994bf6a58153))
* [#586](https://github.com/saadeghi/daisyui/issues/586) ([e88e5e3](https://github.com/saadeghi/daisyui/commit/e88e5e3b21b802713f74b58eae720a0f06cc7c29))

## [2.7.0](https://github.com/saadeghi/daisyui/compare/v2.6.4...v2.7.0) (2022-03-13)


### Features

* divider text now has nowrap ([f41fb50](https://github.com/saadeghi/daisyui/commit/f41fb506995eb7bf71ee7cee96ac0ac0f36eee6a))


### Bug Fixes

* menu item children border radius ([015e762](https://github.com/saadeghi/daisyui/commit/015e762a45d6548c3c31dbeee86af87789ca63a8))
* mockup min width size ([cdb653e](https://github.com/saadeghi/daisyui/commit/cdb653e6281f273ada293dc2cceab22622a09e8e))
* typo ([#582](https://github.com/saadeghi/daisyui/issues/582)) ([26d5116](https://github.com/saadeghi/daisyui/commit/26d5116d54ffcd5ede002306587308e23e8efa27))

### [2.6.4](https://github.com/saadeghi/daisyui/compare/v2.6.3...v2.6.4) (2022-03-09)


### Bug Fixes

* [#566](https://github.com/saadeghi/daisyui/issues/566) ([51519f3](https://github.com/saadeghi/daisyui/commit/51519f3257c921ab0cb2f7cb8ed0dde4f9bdba34))
* [#569](https://github.com/saadeghi/daisyui/issues/569) ([b700b2c](https://github.com/saadeghi/daisyui/commit/b700b2c9d011bc13ef365ecdb7b4c4d80c89afe8))

### [2.6.3](https://github.com/saadeghi/daisyui/compare/v2.6.2...v2.6.3) (2022-03-07)


### Bug Fixes

* [#559](https://github.com/saadeghi/daisyui/issues/559) ([442c2e1](https://github.com/saadeghi/daisyui/commit/442c2e15efff3899e53766593a3e6f7d90cdc850))

### [2.6.2](https://github.com/saadeghi/daisyui/compare/v2.6.1...v2.6.2) (2022-03-07)


### Bug Fixes

* [#558](https://github.com/saadeghi/daisyui/issues/558) ([b4a70b7](https://github.com/saadeghi/daisyui/commit/b4a70b7f0b07aead23889f07fbd07b94ef767dc6))

### [2.6.1](https://github.com/saadeghi/daisyui/compare/v2.6.0...v2.6.1) (2022-03-07)


### Bug Fixes

* [#558](https://github.com/saadeghi/daisyui/issues/558) ([8997f60](https://github.com/saadeghi/daisyui/commit/8997f601b4c3706f8c3f8e5d1873f8c659f7ea40))

## [2.6.0](https://github.com/saadeghi/daisyui/compare/v2.5.0...v2.6.0) (2022-03-04)


### Features

* add 3 new themes: `night` `cafe` `winter` ([2ad9cba](https://github.com/saadeghi/daisyui/commit/2ad9cbac958c6dce181da91f7b19b0b7ddeb91ba))
* update `lofi` theme ([fd3bd4e](https://github.com/saadeghi/daisyui/commit/fd3bd4e696e81740a30c726e72e33cb547bac5e0))


### Bug Fixes

* [#425](https://github.com/saadeghi/daisyui/issues/425) ([6a81aa0](https://github.com/saadeghi/daisyui/commit/6a81aa0725303530adb1926e2acb33b182eb8670))

## [2.5.0](https://github.com/saadeghi/daisyui/compare/v2.4.0...v2.5.0) (2022-03-04)


### Bug Fixes

* [#546](https://github.com/saadeghi/daisyui/issues/546) (docs) ([d5bd0f1](https://github.com/saadeghi/daisyui/commit/d5bd0f1709b67700930b262c4706147fa2b79208))
* textarea state colors ([c1bf0d8](https://github.com/saadeghi/daisyui/commit/c1bf0d8fe5d1fa0b08bd9d7fa3c7bd95c6800ef2))

## [2.4.0](https://github.com/saadeghi/daisyui/compare/v2.3.7-alpha.5...v2.4.0) (2022-03-03)


### Features

* Add new `prefix` config ([e87db57](https://github.com/saadeghi/daisyui/commit/e87db57398e63ff7680850a1f3f3af172983ebe8))

### [2.3.6](https://github.com/saadeghi/daisyui/compare/v2.3.5...v2.3.6) (2022-03-03)

### [2.3.5](https://github.com/saadeghi/daisyui/compare/v2.3.4...v2.3.5) (2022-03-03)

### [2.3.4](https://github.com/saadeghi/daisyui/compare/v2.3.1...v2.3.4) (2022-03-03)

### [2.3.3](https://github.com/saadeghi/daisyui/compare/v2.3.1...v2.3.3) (2022-03-03)

### [2.3.2](https://github.com/saadeghi/daisyui/compare/v2.3.1...v2.3.2) (2022-03-03)

### [2.3.1](https://github.com/saadeghi/daisyui/compare/v2.3.0...v2.3.1) (2022-03-03)

## [2.3.0](https://github.com/saadeghi/daisyui/compare/v2.2.2...v2.3.0) (2022-03-02)


### Features

* Add new `prefix` config ([#537](https://github.com/saadeghi/daisyui/issues/537)) ([49e05fa](https://github.com/saadeghi/daisyui/commit/49e05faeb189917d7d4628b3d3201ba6fdfea258))
* Add new dependencies:
  - `postcss-class-prefix`
  - `postcss-js`


### Bug Fixes

* [#514](https://github.com/saadeghi/daisyui/issues/514) ([6957b63](https://github.com/saadeghi/daisyui/commit/6957b637ae14db9ff942a4ea94e4b62214ebf887))
* [#523](https://github.com/saadeghi/daisyui/issues/523) ([7d4ceb6](https://github.com/saadeghi/daisyui/commit/7d4ceb63238b62d4e5098d2bf2d285b9d3ab76aa))

### [2.2.2](https://github.com/saadeghi/daisyui/compare/v2.2.1...v2.2.2) (2022-02-25)

### [2.2.1](https://github.com/saadeghi/daisyui/compare/v2.2.0...v2.2.1) (2022-02-24)


### Bug Fixes

* [#511](https://github.com/saadeghi/daisyui/issues/511) ([38cb841](https://github.com/saadeghi/daisyui/commit/38cb841fa859efc1f30ce7d7ece0fe8717d3d812))

## [2.2.0](https://github.com/saadeghi/daisyui/compare/v2.1.0...v2.2.0) (2022-02-22)


### Bug Fixes

* [#500](https://github.com/saadeghi/daisyui/issues/500), [#492](https://github.com/saadeghi/daisyui/issues/492) (fix wrong colors for info, success, warning, error) ([7373ec2](https://github.com/saadeghi/daisyui/commit/7373ec2d5de571bff6e24bcaf3bed25574997720))
* [#502](https://github.com/saadeghi/daisyui/issues/502) ([4ca3c4b](https://github.com/saadeghi/daisyui/commit/4ca3c4b2064da9593f1711e57ffc9444c16b9745))

## [2.1.0](https://github.com/saadeghi/daisyui/compare/v2.0.9...v2.1.0) (2022-02-19)

### Features

- Improved all existing theme colors

- Added 4 new themes:

```
autumn
business
acid
lemonade
```

- Now only the following color names are required for daisyUI themes. All [other colors](https://daisyui.com/docs/colors) are optional and they will be generated magically ✨ (unless they're specified in the theme). [[Read more](https://daisyui.com/docs/themes)]

```
primary
secondary
accent
neutral
base-100
```

- remove unused `windi.js` file

### Bug Fixes

- Add missing `rounded-box` utility classes
- Fix avatar inidcator color
- [#477](https://github.com/saadeghi/daisyui/issues/477) ([d6fee67](https://github.com/saadeghi/daisyui/commit/d6fee67230ca44701ba7c488eb41f71db950ed6f))
- typo in docs ([1851cab](https://github.com/saadeghi/daisyui/commit/1851cabee4f99c790831734cdfb3ca8ebc23bfe7))

### [2.0.9](https://github.com/saadeghi/daisyui/compare/v2.0.8...v2.0.9) (2022-02-17)

### [2.0.8](https://github.com/saadeghi/daisyui/compare/v2.0.7...v2.0.8) (2022-02-17)

### [2.0.7](https://github.com/saadeghi/daisyui/compare/v2.0.5...v2.0.7) (2022-02-17)

### [2.0.6](https://github.com/saadeghi/daisyui/compare/v2.0.5...v2.0.6) (2022-02-15)

### [2.0.5](https://github.com/saadeghi/daisyui/compare/v2.0.4...v2.0.5) (2022-02-15)

### [2.0.4](https://github.com/saadeghi/daisyui/compare/v2.0.3...v2.0.4) (2022-02-15)

### [2.0.3](https://github.com/saadeghi/daisyui/compare/v2.0.2...v2.0.3) (2022-02-15)

### Features

- Move index.js and /colors to /src/index.js and /src/colors
  If you're importing themes from `daisyui/colors/themes`, you should import them from `daisyui/src/colors/themes` instead.

### Bug Fixes

- dropdown not working ([3f2559e](https://github.com/saadeghi/daisyui/commit/3f2559ec59ea3d1ce1d66006713ca070be551255))

### [2.0.2](https://github.com/saadeghi/daisyui/compare/v2.0.0...v2.0.2) (2022-02-14)

## [2.0.0](https://github.com/saadeghi/daisyui/compare/v2.0.0-next.0...v2.0.0) (2022-02-13)

### Breaking Changes

- 🆕 Tailwind CSS 3.0 is now a dependency
- 🎨 Improvements applied to the value of following colors on daisyUI default themes. Below colors got lighter on light themes and they got darker on dark themes (due to adding new `*-content` color names)

  - `info`
  - `success`
  - `warning`
  - `error`

  If you used those color names inside your pages (like `bg-info`, `text-error`, etc.) Make sure your colors look good on both light and dark themes.  
  There are new content colors are added so for example, if `text-info` contrast doesn't look good, use the new `text-info-content` color instead.

### Features

- 🔥 Updated Tailwind CSS dev dependency to v3.0
- 🚀 Moved document website from Nuxt to SvelteKit
- 🆕 Add new `swap` component
- 🆕 Add new `radial-progress` component
- 👏 Improve `range` component to show the filled value with colors
- 👏 `menu` component now supports submenus both vertically and horizontally

- 🆕 Add new foreground colors (fixes #187)

  - `info-content`
  - `success-content`
  - `warning-content`
  - `error-content`

- 🆕 Add new responsive modifiers for `divider` component:

  - divider-vertical
  - divider-horizontal

- 🆕 Add new responsive modifiers for `stats` component (fixes #440):

  - stats-vertical
  - stats-horizontal

- 🤩 All focus styles that were using box shadows are now using outline instead

- 🤩 Now every item inside `.menu li` will be styled as menu item (not only `a`, `span`, `button`)

- 😍 Add copy to clipboard functionality for document website (fixes #293)

- 🆕 Add new modifiers for `mask` component. This classes are used to show first half or second half of a mask"

  - mask-half-1
  - mask-half-2

- 🤩 Empty `<li>` in a `menu` now shows a separator line.

- 🆕 Add new `input-group` component
- 🆕 Add new `rating-half` modifier `rating` component (to show half stars)
- 📐 `avatar` image now has `1:1` aspect ratio

- 😍 Add support for `RGB`, `HSL`,etc. color formats for daisyUI themes in `tailiwnd.config.js`:

```javascript
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          // until now, only hex format was supported:
          primary: "#a991f7",
          "primary-focus": "#8462f4",
          "primary-content": "#ffffff",

          // now it can be anything:
          secondary: "red",
          "secondary-focus": "rgb(243,204,48)",
          "secondary-content": "hsl(0, 0%, 100%)",

          //...
        },
      },
    ],
  },
};
```

- 🌗 Now system dark mode theme doesn't need to be named `dark` anymore only.  
  It can be any theme and it can be specified in `tailwind.config.js` using new `darkTheme` config:

```javascript
module.exports = {
  daisyui: {
    darkTheme: "synthwave"",
  },
}
```

- 👏 The following colors now are optional on themes and if they're not specified, their fallback colors will be used:

```js
"primary-focus"; // fallback : "primary"
"secondary-focus"; // fallback : "secondary"
"accent-focus"; // fallback : "accent"
"neutral-focus"; // fallback : "neutral"
"base-200"; // fallback : "base-100"
"base-300"; // fallback : "base-300"
"info-content"; // fallback : "neutral-content"
"success-content"; // fallback : "neutral-content"
"warning-content"; // fallback : "neutral-content"
"error-content"; // fallback : "neutral-content"
```

### Bug Fixes

- Fix overflow-hidden issue on `menu` component
- Fix pixelated checkbox bug in Firefox (fixes #427)
- Fix responsive child classes to be able to get prefixes (fixes #449, #371, #346)
- Fix card responsive image size calculation (fixes #181, #30)
- Fix code indentation in document website (fixes #450)
- Fix responsive button demo on document website (fixes #376)
- Fix right padding on `select` component
- Improve some colors on themes
