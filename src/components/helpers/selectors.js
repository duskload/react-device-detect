import { os, device, browser, cpu, ua, engine } from "./get-ua-data";

const isMobileType = () => (device.type === "mobile" ? true : false);
const isTabletType = () => (device.type === "tablet" ? true : false);

const isMobileAndTabletType = () => {
  switch (device.type) {
    case "mobile":
      return true;
    case "tablet":
      return true;
    default:
      return false;
  }
};

const isSmartTVType = () => (device.type === "smarttv" ? true : false);
const isBrowserType = () => (device.type === undefined ? true : false);
const isAndroidType = () => (os.name === "Android" ? true : false);
const isWinPhoneType = () => (os.name === "Windows Phone" ? true : false);
const isIOSType = () => (os.name === "iOS" ? true : false);
const isChromeType = () => (browser.name === "Chrome" ? true : false);
const isFirefoxType = () => (browser.name === "Firefox" ? true : false);

const isSafariType = () =>
  browser.name === "Safari" || browser.name === "Mobile Safari" ? true : false;

const isOperaType = () => (browser.name === "Opera" ? true : false);
const isIEType = () => (browser.name === "Internet Explorer" ? true : false);

const getBrowserFullVersion = () => browser.major;
const getBrowserVersion = () => browser.version;
const getOsVersion = () => (os.version ? os.version : "none");
const getOsName = () => (os.name ? os.name : "none");
const getBrowserName = () => browser.name;
const getMobileVendor = () => (device.vendor ? device.vendor : "none");
const getMobileModel = () => (device.model ? device.model : "none");
const getEngineName = () => engine.name;
const getEngineVersion = () => engine.version;
const getUseragent = () => ua;

export const isSmartTV = isSmartTVType();
export const isMobile = isMobileAndTabletType();
export const isMobileOnly = isMobileType();
export const isTablet = isTabletType();
export const isBrowser = isBrowserType();
export const isAndroid = isAndroidType();
export const isWinPhone = isWinPhoneType();
export const isIOS = isIOSType();
export const isChrome = isChromeType();
export const isFirefox = isFirefoxType();
export const isSafari = isSafariType();
export const isOpera = isOperaType();
export const isIE = isIEType();
export const osVersion = getOsVersion();
export const osName = getOsName();
export const fullBrowserVersion = getBrowserFullVersion();
export const browserVersion = getBrowserVersion();
export const browserName = getBrowserName();
export const mobileVendor = getMobileVendor();
export const mobileModel = getMobileModel();
export const engineName = getEngineName();
export const engineVersion = getEngineVersion();
export const getUA = getUseragent();
