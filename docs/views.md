### Views

List of available views:

| View               |                                                                                | 
| ------------------ | ------------------------------------------------------------------------------ |
| MobileView         | returns `children` if detected device either `mobile` or `tablet`              |
| BrowserView        | returns `children` if detected device is `browser`                             |
| TabletView         | returns `children` if detected device is `tablet`                              |
| AndroidView        | returns `children` if detected device `os` is `android`                        |
| IOSView            | returns `children` if detected device `os` is `ios`                            |
| IEView             | returns `children` if detected device name is `Internet Explorer`              |
| WinPhoneView       | returns `children` if detected device `os` is `windows phone`                  |
| MobileOnlyView     | returns `children` if detected device is `mobile`                              |
| SmartTVView        | returns `children` if detected device is `smarttv`                             |
| ConsoleView        | returns `children` if detected device is `console`                             |
| WearableView       | returns `children` if detected device is `wearable`                            |

There is also `CustomView`, which accepts prop `condition` - any boolean (e.g `browserName` === `Chrome`)

Each view accepts all common html properties, like `className`, `children`, `styles`, etc.

There is a few exceptions:

To render content in `React.Fragment` (instead of `div`), pass prop `renderWithFragment` (take into consideration, that in this case, other props won't work)
