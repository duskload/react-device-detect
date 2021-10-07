## react-device-detect

![npm](https://img.shields.io/npm/dm/react-device-detect?label=npm%20downloads)

Detect device, and render view according to the detected device type.

## Installation

To install, you can use npm or yarn:

```
npm install react-device-detect --save

or

yarn add react-device-detect
```

## API

- [Hooks, SSR and utilities](docs/api.md)
- [Selectors](docs/selectors.md)
- [Views](docs/views.md)

## Usage

Example:

```javascript
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
```

```html
<BrowserView>
  <h1>This is rendered only in browser</h1>
</BrowserView>
<MobileView>
  <h1>This is rendered only on mobile</h1>
</MobileView>
```

if you don't need a view, you can use `isMobile` for conditional rendering

```javascript
import {isMobile} from 'react-device-detect';

function App() {
  renderContent = () => {
    if (isMobile) {
      return <div> This content is unavailable on mobile</div>
    }
    return <div> ...content </div>
  }

  render() {
    return this.renderContent();
  }
}
```

If you want to leave a message to a specific browser (e.g IE), you can use `isIE` selector

```javascript
import { isIE } from 'react-device-detect';

function App() {
  render() {
    if (isIE) return <div> IE is not supported. Download Chrome/Opera/Firefox </div>
    return (
      <div>...content</div>
    )
  }
}
```

If you want to render a view on a specific device and with a specific condition:

```javascript
import { browserName, CustomView } from 'react-device-detect';

function App() {
  render() {
    return (
      <CustomView condition={browserName === "Chrome"}>
        <div>...content</div>
      </CustomView>
    )
  }
}
```

## Style the view

You can style a view component by passing class to the `className` prop

```html
<BrowserView className="custom-class">
  <p>View content</p>
</BrowserView>
```

or you can pass inline styles to `style` prop

```javascript
const styles = {
  background: 'red',
  fontSize: '24px',
  lineHeight: '2',
};
```

```html
<BrowserView style={styles}>
  <p>View content</p>
</BrowserView>
```

### Testing

```js
import * as rdd from 'react-device-detect';

rdd.isMobile = true;

// use in tests
```

## License

MIT
