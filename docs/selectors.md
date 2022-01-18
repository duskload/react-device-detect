### Selectors

Available selectors:

| prop               | type    | description                                                                            |
| ------------------ | ------- | -------------------------------------------------------------------------------------- |
| isMobile           | bool    | returns true if device type is `mobile` or `tablet`                                    |
| isMobileOnly       | bool    | returns true if device type is `mobile`                                                |
| isTablet           | bool    | returns true if device type is `tablet`                                                |
| isBrowser (legacy) | bool    | returns true if device type is `browser` (better to use `isDesktop` instead)           |
| isDesktop          | bool    | returns true if device type is `browser` (an alias of the isBrowser type               |
| isSmartTV          | bool    | returns true if device type is `smarttv`                                               |
| isWearable         | bool    | returns true if device type is `wearable`                                              |
| isConsole          | bool    | returns true if device type is `console`                                               |
| isEmbedded         | bool    | returns true if device type is `embedded`                                              |
| isAndroid          | bool    | returns true if os type is `Android`                                                   |
| isWinPhone         | bool    | returns true if os type is `Windows Phone`                                             |
| isIOS              | bool    | returns true if os type is `iOS`                                                       |
| isChrome           | bool    | returns true if browser is `Chrome`                                                    |
| isFirefox          | bool    | returns true if browser is `Firefox`                                                   |
| isSafari           | bool    | returns true if browser is `Safari`                                                    |
| isOpera            | bool    | returns true if browser is `Opera`                                                     |
| isIE               | bool    | returns true if browser is `Internet Explorer`                                         |
| isEdge             | bool    | returns true if browser is `Edge` or `Edge Chromium`                                   |
| isYandex           | bool    | returns true if browser is `Yandex`                                                    |
| isChromium         | bool    | returns true if browser is `Chromium`                                                  |
| isMobileSafari     | bool    | returns true if browser is `Mobile Safari`                                             |
| isSamsungBrowser   | bool    | returns true if browser is `Samsung Browser`                                           |
| osVersion          | string  | returns os version (e.g 7 for `Windows` or 6 for `Android`)                            |
| osName             | string  | returns os name (e.g `Windows`, `Android`)                                             |
| fullBrowserVersion | string  | returns full browser version (e.g 65.0.3325.181 for `Chrome`)                          |
| browserVersion     | string  | returns browser `major` version (e.g 65 in `Chrome` or 9 in `IE`)                      |
| browserName        | string  | returns browser name                                                                   |
| mobileVendor       | string  | returns mobile device vendor (e.g `LG`, `iPhone` etc)                                  |
| mobileModel        | string  | returns mobile device model (e.g `Nexus 5`)                                            |
| engineName         | string  | returns browser engine `name` (e.g `Gecko` for FF or `Blink` for Chrome)               |
| engineVersion      | string  | returns engine version                                                                 |
| getUA              | string  | returns user agent                                                                     |
| deviceType         | string  | returns device type (e.g `mobile` or `tablet`)                                         |
| isIOS13            | boolean | returns true/false if device is running on iOS13                                       |
| isIPhone13         | boolean | returns true/false if device is iPhone and running on iOS13                            |
| isIPad13           | boolean | returns true/false if device is iPad and running on iOS13                              |
| isIPod13           | boolean | returns true/false if device is iPod and running on iOS13                              |
| isElectron         | boolean | returns true/false if running on `Electron`                                            |
| isEdgeChromium     | boolean | returns true/false if browser is `Edge Chromium`                                       |
| isLegacyEdge       | boolean | returns true if browser is `Edge`                                                      |
| isWindows          | boolean | returns true/false if os is `Windows`                                                  |
| isMacOs            | boolean | returns true/false if os is `Mac OS`                                                   |
| deviceDetect       | object  | return data object which includes all data about device (e.g version, engine, os etc.) |
| OsTypes            | object  | return data object with os types                                                       |
| BrowserTypes       | object  | return data object with browser types                                                  |
