const UAParser = require('ua-parser-js/dist/ua-parser.min');

export const UA = new UAParser();

export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setUA = uaStr => UA.setUA(uaStr);

export const mockUserAgent = userAgent => {
  window.navigator.__defineGetter__('userAgent', () => userAgent);
};

//TODO: Rework structure, move helper functions to utils
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
