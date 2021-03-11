import { setDefaults } from "./get-ua-data";

export const DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Browser: undefined
};

export const BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: "Firefox",
  Opera: "Opera",
  Yandex: "Yandex",
  Safari: "Safari",
  InternetExplorer: "Internet Explorer",
  Edge: "Edge",
  Chromium: "Chromium",
  Ie: 'IE',
  MobileSafari: "Mobile Safari",
  EdgeChromium: "Edge Chromium",
  MIUI: "MIUI Browser",
  SamsungBrowser: 'Samsung Browser'
};

export const OsTypes = {
  IOS: 'iOS',
  Android: "Android",
  WindowsPhone: "Windows Phone",
  Windows: 'Windows',
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
    case DeviceTypes.Mobile:
      return { isMobile: true };
    case DeviceTypes.Tablet:
      return { isTablet: true };
    case DeviceTypes.SmartTv:
      return { isSmartTV: true };
    case DeviceTypes.Console:
      return { isConsole: true };
    case DeviceTypes.Wearable:
      return { isWearable: true };
    case DeviceTypes.Browser:
      return { isBrowser: true };
    default:
      return initialData;
  }
};

export const getCurrentBrowser = name => {
  switch (name) {
    case BrowserTypes.Chrome:
    case BrowserTypes.Opera:
    case BrowserTypes.Firefox:
    case BrowserTypes.Yandex:
    case BrowserTypes.Safari:
    case BrowserTypes.Ie:
    case BrowserTypes.Edge:
    case BrowserTypes.Chromium:
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
