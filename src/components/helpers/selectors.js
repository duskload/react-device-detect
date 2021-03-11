import { os, device, browser, ua, engine, setDefaults, isIOS13Check, getNavigatorInstance } from './get-ua-data';
import { BrowserTypes, DeviceTypes, OsTypes } from './types';

const isMobileType = () => device.type === DeviceTypes.Mobile;
const isTabletType = () => device.type === DeviceTypes.Tablet;

const isMobileAndTabletType = () => {
  switch (device.type) {
    case DeviceTypes.Mobile:
    case DeviceTypes.Tablet:
      return true;
    default:
      return false;
  }
};

const isEdgeChromiumType = () => {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};

const isSmartTVType = () => device.type === DeviceTypes.SmartTv;
const isBrowserType = () => device.type === DeviceTypes.Browser;
const isWearableType = () => device.type === DeviceTypes.Wearable;
const isConsoleType = () => device.type === DeviceTypes.Console;
const isAndroidType = () => os.name === OsTypes.Android;
const isWindowsType = () => os.name === OsTypes.Windows;
const isMacOsType = () => os.name === OsTypes.MAC_OS;
const isWinPhoneType = () => os.name === OsTypes.WindowsPhone;
const isIOSType = () => os.name === OsTypes.IOS;
const isChromeType = () => browser.name === BrowserTypes.Chrome;
const isFirefoxType = () => browser.name === BrowserTypes.Firefox;
const isChromiumType = () => browser.name === BrowserTypes.Chromium;
const isEdgeType = () => browser.name === BrowserTypes.Edge;
const isYandexType = () => browser.name === BrowserTypes.Yandex;
const isSafariType = () => browser.name === BrowserTypes.Safari || browser.name === BrowserTypes.MobileSafari;
const isMobileSafariType = () => browser.name === BrowserTypes.MobileSafari;
const isOperaType = () => browser.name === BrowserTypes.Opera;
const isIEType = () => browser.name === BrowserTypes.InternetExplorer || browser.name === BrowserTypes.Ie;
const isMIUIType = () => browser.name === BrowserTypes.MIUI;
const isSamsungBrowserType = () => browser.name === BrowserTypes.SamsungBrowser;

const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};

const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    (/iPad|iPhone|iPod/.test(nav.platform) || (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1)) &&
      !window.MSStream
  );
};

const getIPad13 = () => isIOS13Check('iPad');
const getIphone13 = () => isIOS13Check('iPhone');
const getIPod13 = () => isIOS13Check('iPod');

const getBrowserFullVersion = () => setDefaults(browser.version);
const getBrowserVersion = () => setDefaults(browser.major);
const getOsVersion = () => setDefaults(os.version);
const getOsName = () => setDefaults(os.name);
const getBrowserName = () => setDefaults(browser.name);
const getMobileVendor = () => setDefaults(device.vendor);
const getMobileModel = () => setDefaults(device.model);
const getEngineName = () => setDefaults(engine.name);
const getEngineVersion = () => setDefaults(engine.version);
const getUseragent = () => setDefaults(ua);
const getDeviceType = () => setDefaults(device.type, 'browser');

export const isSmartTV = isSmartTVType();
export const isConsole = isConsoleType();
export const isWearable = isWearableType();
export const isMobileSafari = isMobileSafariType() || getIPad13();
export const isChromium = isChromiumType();
export const isMobile = isMobileAndTabletType() || getIPad13();
export const isMobileOnly = isMobileType();
export const isTablet = isTabletType() || getIPad13();
export const isBrowser = isBrowserType();
export const isDesktop = isBrowserType();
export const isAndroid = isAndroidType();
export const isWinPhone = isWinPhoneType();
export const isIOS = isIOSType() || getIPad13();
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
export const isEdge = isEdgeType() || isEdgeChromiumType();
export const isYandex = isYandexType();
export const deviceType = getDeviceType();
export const isIOS13 = getIOS13();
export const isIPad13 = getIPad13();
export const isIPhone13 = getIphone13();
export const isIPod13 = getIPod13();
export const isElectron = isElectronType();
export const isEdgeChromium = isEdgeChromiumType();
export const isLegacyEdge = isEdgeType() && !isEdgeChromiumType();
export const isWindows = isWindowsType();
export const isMacOs = isMacOsType();
export const isMIUI = isMIUIType();
export const isSamsungBrowser = isSamsungBrowserType();

