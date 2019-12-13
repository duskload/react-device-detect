import { UA } from '../init'
import { DEVICE_TYPES, BROWSER_TYPES } from '../types'

export const setUserAgent = uaStr => UA.setUA(uaStr);

export const mockUserAgent = userAgent => {
  window.navigator.__defineGetter__('userAgent', () => userAgent);
};

export const setDefaults = (p, d = 'none') => (p ? p : d);

export const getNavigatorInstance = () => {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};

export const isIOS13Check = type => {
  const nav = getNavigatorInstance();
  return (
    nav && (nav.platform.includes(type) || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream))
  );
};

const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

export const checkType = type => {
  switch (type) {
    case DEVICE_TYPES.MOBILE:
      return { isMobile: true };
    case DEVICE_TYPES.TABLET:
      return { isTablet: true };
    case DEVICE_TYPES.SMART_TV:
      return { isSmartTV: true };
    case DEVICE_TYPES.CONSOLE:
      return { isConsole: true };
    case DEVICE_TYPES.WEARABLE:
      return { isWearable: true };
    case undefined:
      return { isBrowser: true };
    default:
      return initialData;
  }
};

export const getCurrentBrowser = name => {
  return (
    [
      BROWSER_TYPES.CHROME,
      BROWSER_TYPES.FIREFOX,
      BROWSER_TYPES.OPERA,
      BROWSER_TYPES.YANDEX,
      BROWSER_TYPES.SAFARI,
      BROWSER_TYPES.IE,
      BROWSER_TYPES.EDGE,
      BROWSER_TYPES.CHROMIUM
    ].indexOf(name) > -1
  );
};
