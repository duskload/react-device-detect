## react-device-detect

Detect device, and render view according to detected device type.

## Installation
To install, you can use npm or yarn: 

```
npm install react-device-detect --save
yarn add react-device-detect
```

## Usage

Any view component has one required prop `device` to which you pass prop which identifies if view should be rendered.

Example: 

```javascript
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'
```
```html
<BrowserView device={isBrowser}>
    <h1> This is rendered only in browser </h1>
</BrowserView>
<MobileView device={isMobile}>
    <h1> This is rendered only on mobile </h1>
</MobileView>
```
if you don't need a view, you can use `isMobile` for conditional rendering
```javascript
import {isMobile} from 'react-device-detect';

renderContent = () => {
    if (isMobile) {
        return <div> This content is unavailable on mobile</div>
    }
    return <div> ...content </div>
}

render() {
    return this.renderContent();
}
```

If you wan't to leave a message to specific browser (e.g IE), you can use `isIE` selector

```javascript
import {isIE} from 'react-device-detect';

render() {
    if (isIE) return <div> IE is not supported. Download Chrome/Opera/Firefox </div>
    return (
        <div>...content</div>
    )
}
```

## Style the view

Yoa can style view component by passing class to `viewClassName` prop

```html
<BrowserView viewClassName='custom-class'>
    <p> View content </p>
</BrowserView>
```

or you can pass inline styles to `style` prop
```javascript
const styles = {
      background: 'red',
      fontSize: '24px',
      lineHeight: '2'
    }
```
```html
<BrowserView style={styles} device={isBrowser}>
    <p> View content</p>
</BrowserView>
```
## Selectors and views

### Selectors
|     prop     | type |                    description                       |
|--------------|------|------------------------------------------------------|
| isMobile     | bool | returns true if device type is `mobile` or `tablet` |
| isMobileOnly | bool | returns true if device type is `mobile`              |
| isTablet     | bool | returns true if device type is `tablet`              |
| isBrowser    | bool | returns true if device type is `browser`             |
| isAndroid    | bool | returns true if os type is `android`                 |
| isWinPhone   | bool | returns true if os type is `win phone`               |
| isIOS        | bool | returns true if os type is `ios`                     |
| isChrome     | bool | returns true if browser is `chrome`                  |
| isFirefox    | bool | returns true if browser is `firefox`                 |
| isSafari     | bool | returns true if browser is `safari`                  |
| isOpera      | bool | returns true if browser is `opera`                   |
| isIE         | bool | returns true if browser is `ie`                      |
| osVersion    | string | returns os version (e.g 7 for `Windows` or 6 for `Android`)|
| osName       | string | returns os name (e.g `Windows`, `Android`) |
| fullBrowserVersion | string | returns full browser version (e.g 65.0.3325.181 for `Chrome`) | 
| browserVersion | string | returns browser `major` version (e.g 65 in `Chrome` or 9 in `IE`) |
| browserName | string | returns browser name |
| mobileVendor | string | returns mobile device vendor (e.g `LG`, `iPhone` etc) |
| mobileModel | string | returns mobile device model (e.g `Nexus 5`) |
| engineName | string | returns browser engine `name` (e.g `Gecko` for FF or `WebKit` for Chrome) |
| engineVersion | string | returns engine version |
| getUA | string | returns user agent | 
| deviceDetect | function | return data object which includes all data about device (e.g version, engine, os etc.) | 

### Views 

Currently available views:

|     view       |      device                  |
|----------------|------------------------------|
| MobileView     | takes `isMobile` prop        |
| BrowserView    | takes `isBrowser` prop       |
| TabletView     | takes `isTablet` prop        |
| AndroidView    | takes `isAndroid` prop       |
| IOSView        | takes `isIOS` prop           |
| IEView         | takes `isIE` prop            |
| WinPhoneView   | takes `isWinPhone` prop      |
| MobileOnlyView | takes `isMobileOnly` prop    |

Each view takes four props:

1. `device` - takes device prop to render the view
2. `viewClassName` - to style the view
3. `style` - to add inline styles to view
4. `children` - to pass children to view

## License

MIT