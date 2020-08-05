import { setDefaults } from "./get-ua-data";

export const DEVICE_TYPES = {
  MOBILE: 'mobile',
  TABLET: 'tablet',
  SMART_TV: 'smarttv',
  CONSOLE: 'console',
  WEARABLE: 'wearable',
  BROWSER: undefined
};

export const BROWSER_TYPES = {
  CHROME: 'Chrome',
  FIREFOX: "Firefox",
  OPERA: "Opera",
  YANDEX: "Yandex",
  SAFARI: "Safari",
  INTERNET_EXPLORER: "Internet Explorer",
  EDGE: "Edge",
  CHROMIUM: "Chromium",
  IE: 'IE',
  MOBILE_SAFARI: "Mobile Safari",
  EDGE_CHROMIUM: "Edge Chromium",
  MIUI: "MIUI Browser"
};

export const OS_TYPES = {
  IOS: 'iOS',
  ANDROID: "Android",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: 'Windows',
  MAC_OS: 'Mac OS'
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
    case DEVICE_TYPES.BROWSER:
      return { isBrowser: true };
    default:
      return initialData;
  }
};

export const getCurrentBrowser = name => {
  switch (name) {
    case BROWSER_TYPES.CHROME:
    case BROWSER_TYPES.FIREFOX:
    case BROWSER_TYPES.OPERA:
    case BROWSER_TYPES.YANDEX:
    case BROWSER_TYPES.SAFARI:
    case BROWSER_TYPES.IE:
    case BROWSER_TYPES.EDGE:
    case BROWSER_TYPES.CHROMIUM:
      return true;
    default:
      return false;
  }
};

export const broPayload = (isBrowser, browser, engine, os, ua) => ({
  isBrowser,
  browserMajorVersion: setDefaults(browser.major),
  browserFullVersion: setDefaults(browser.version),
  browserName: setDefaults(browser.name),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

export const mobilePayload = (type, device, os, ua) => ({
  ...type,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  os: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  ua: setDefaults(ua)
});

export const stvPayload = (isSmartTV, engine, os, ua) => ({
  isSmartTV,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

export const consolePayload = (isConsole, engine, os, ua) => ({
  isConsole,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

export const wearPayload = (isWearable, engine, os, ua) => ({
  isWearable,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});
