### API

#### Hooks

`useMobileOrientation` - watches orientation change and returns current orientation, and boolean values for portrait and landscape

```js
// typical payload
// { isPortrait: true, isLandscape: false, orientation: 'portrait' }
```

`useDeviceData` - returns full data acquired from user agent. You can either pass your user agent or it will get current window ua.

`useDeviceSelectors` - returns selectors and full user agent data. You can either pass your user agent or it will get current window ua.

```js

// you can either pass your user agent or it will automatica
const [selectors, data] = useDeviceSelectors(window.navigator.userAgent)

const { isMobile } = selectors

// else do something with selectors
```

#### HOC

`withOrientationChange` - does the same as `useMobileOrientation` hook.

```js

function App({ isPortrait } ) {
  
  if (isPortrait) {
    return null
  }
  
  return <div />
}

export default withOrientationChange(App)
```

#### Enums

`BrowserTypes` and `OsTypes` available for import

```js
import { BrowserTypes } from 'react-device-detect'

function App() {
  
  if (BrowserTypes.InternetExplorer) {
    return null
  }
  
  return <div />
}
```

#### Utils & SSR

All functions accept userAgent string.

`getSelectorsByUserAgent` - returns mobile selectors from userAgent string. Especially useful for SSR

```js
const userAgent = req['userAgent']

const { isMobile } = getSelectorsByUserAgent(userAgent)
...
```

`parseUserAgent` - parses user agent string and gives all available data for it

`deviceDetect` - parses user agent string for current device and gives all available data for it

`setUserAgent` - sets user agent
