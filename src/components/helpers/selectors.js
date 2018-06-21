import { os, device, browser, ua, engine } from "./get-ua-data";
import { BROWSER_TYPES, DEVICE_TYPES, OS_TYPES } from "./types";

const {
  CHROME,
  CHROMIUM,
  IE,
  INTERNET_EXPLORER,
  OPERA,
  FIREFOX,
  SAFARI,
  MOBILE_SAFARI
} = BROWSER_TYPES;
const { MOBILE, TABLET, SMART_TV, BROWSER, WEARABLE, CONSOLE } = DEVICE_TYPES;
const { ANDROID, WINDOWS_PHONE, IOS } = OS_TYPES;

const isMobileType = () => device.type === MOBILE;
const isTabletType = () => device.type === TABLET;

const isMobileAndTabletType = () => {
  switch (device.type) {
    case MOBILE:
    case TABLET:
      return true;
    default:
      return false;
  }
};

const isSmartTVType = () => device.type === SMART_TV;
const isBrowserType = () => device.type === BROWSER;
const isWearableType = () => device.type === WEARABLE;
const isConsoleType = () => device.type === CONSOLE;
const isAndroidType = () => os.name === ANDROID;
const isWinPhoneType = () => os.name === WINDOWS_PHONE;
const isIOSType = () => os.name === IOS;
const isChromeType = () => browser.name === CHROME;
const isFirefoxType = () => browser.name === FIREFOX;
const isChromiumType = () => browser.name === CHROMIUM;

const isSafariType = () =>
  browser.name === SAFARI || browser.name === MOBILE_SAFARI;

const isMobileSafariType = () => browser.name === MOBILE_SAFARI;
const isOperaType = () => browser.name === OPERA;
const isIEType = () =>
  browser.name === INTERNET_EXPLORER || browser.name === IE;

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
export const isConsole = isConsoleType();
export const isWearable = isWearableType();
export const isMobileSafari = isMobileSafariType();
export const isChromium = isChromiumType();
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
