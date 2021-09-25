import { os, device, browser, ua, engine, parseUserAgent } from './parse';
import { BrowserTypes, DeviceTypes, OsTypes } from '../constants/constants';
import { setDefaults, isIOS13Check, getNavigatorInstance } from '../utils/utils';

// device types
const isMobileType = ({ type }) => type === DeviceTypes.Mobile;
const isTabletType = ({ type }) => type === DeviceTypes.Tablet;
const isMobileAndTabletType = ({ type }) => {
  switch (type) {
    case DeviceTypes.Mobile:
    case DeviceTypes.Tablet:
      return true;
    default:
      return false;
  }
};
const isSmartTVType = ({ type }) => type === DeviceTypes.SmartTv;
const isBrowserType = ({ type }) => type === DeviceTypes.Browser;
const isWearableType = ({ type }) => type === DeviceTypes.Wearable;
const isConsoleType = ({ type }) => type === DeviceTypes.Console;
const getMobileVendor = ({ vendor }) => setDefaults(vendor);
const getMobileModel = ({ model }) => setDefaults(model);
const getDeviceType = ({ type }) => setDefaults(type, 'browser');

// os types
const isAndroidType = ({ name }) => name === OsTypes.Android;
const isWindowsType = ({ name }) => name === OsTypes.Windows;
const isMacOsType = ({ name }) => name === OsTypes.MAC_OS;
const isWinPhoneType = ({ name }) => name === OsTypes.WindowsPhone;
const isIOSType = ({ name }) => name === OsTypes.IOS;
const getOsVersion = ({ version }) => setDefaults(version);
const getOsName = ({ name }) => setDefaults(name);

// browser types
const isChromeType = ({ name }) => name === BrowserTypes.Chrome;
const isFirefoxType = ({ name }) => name === BrowserTypes.Firefox;
const isChromiumType = ({ name }) => name === BrowserTypes.Chromium;
const isEdgeType = ({ name }) => name === BrowserTypes.Edge;
const isYandexType = ({ name }) => name === BrowserTypes.Yandex;
const isSafariType = ({ name }) =>
  name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
const isMobileSafariType = ({ name }) => name === BrowserTypes.MobileSafari;
const isOperaType = ({ name }) => name === BrowserTypes.Opera;
const isIEType = ({ name }) =>
  name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
const isMIUIType = ({ name }) => name === BrowserTypes.MIUI;
const isSamsungBrowserType = ({ name }) => name === BrowserTypes.SamsungBrowser;
const getBrowserFullVersion = ({ version }) => setDefaults(version);
const getBrowserVersion = ({ major }) => setDefaults(major);
const getBrowserName = ({ name }) => setDefaults(name);

// engine types
const getEngineName = ({ name }) => setDefaults(name);
const getEngineVersion = ({ version }) => setDefaults(version);

const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};
const isEdgeChromiumType = () => {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};
const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    (/iPad|iPhone|iPod/.test(nav.platform) ||
      (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1)) &&
    !window.MSStream
  );
};
const getIPad13 = () => isIOS13Check('iPad');
const getIphone13 = () => isIOS13Check('iPhone');
const getIPod13 = () => isIOS13Check('iPod');
const getUseragent = userAg => setDefaults(userAg);

export const isSmartTV = isSmartTVType(device);
export const isConsole = isConsoleType(device);
export const isWearable = isWearableType(device);
export const isMobileSafari = isMobileSafariType(browser) || getIPad13();
export const isChromium = isChromiumType(browser);
export const isMobile = isMobileAndTabletType(device) || getIPad13();
export const isMobileOnly = isMobileType(device);
export const isTablet = isTabletType(device) || getIPad13();
export const isBrowser = isBrowserType(device);
export const isDesktop = isBrowserType(device);
export const isAndroid = isAndroidType(os);
export const isWinPhone = isWinPhoneType(os);
export const isIOS = isIOSType(os) || getIPad13();
export const isChrome = isChromeType(browser);
export const isFirefox = isFirefoxType(browser);
export const isSafari = isSafariType(browser);
export const isOpera = isOperaType(browser);
export const isIE = isIEType(browser);
export const osVersion = getOsVersion(os);
export const osName = getOsName(os);
export const fullBrowserVersion = getBrowserFullVersion(browser);
export const browserVersion = getBrowserVersion(browser);
export const browserName = getBrowserName(browser);
export const mobileVendor = getMobileVendor(device);
export const mobileModel = getMobileModel(device);
export const engineName = getEngineName(engine);
export const engineVersion = getEngineVersion(engine);
export const getUA = getUseragent(ua);
export const isEdge = isEdgeType(browser) || isEdgeChromiumType();
export const isYandex = isYandexType(browser);
export const deviceType = getDeviceType(device);
export const isIOS13 = getIOS13();
export const isIPad13 = getIPad13();
export const isIPhone13 = getIphone13();
export const isIPod13 = getIPod13();
export const isElectron = isElectronType();
export const isEdgeChromium = isEdgeChromiumType();
export const isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType();
export const isWindows = isWindowsType(os);
export const isMacOs = isMacOsType(os);
export const isMIUI = isMIUIType(browser);
export const isSamsungBrowser = isSamsungBrowserType(browser);

export const getSelectorsByUserAgent = userAgent => {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided')
    return
  }

  const { device, browser, os, engine, ua } = parseUserAgent(userAgent)

  return {
    isSmartTV: isSmartTVType(device),
    isConsole: isConsoleType(device),
    isWearable: isWearableType(device),
    isMobileSafari: isMobileSafariType(browser) || getIPad13(),
    isChromium: isChromiumType(browser),
    isMobile: isMobileAndTabletType(device) || getIPad13(),
    isMobileOnly: isMobileType(device),
    isTablet: isTabletType(device) || getIPad13(),
    isBrowser: isBrowserType(device),
    isDesktop: isBrowserType(device),
    isAndroid: isAndroidType(os),
    isWinPhone: isWinPhoneType(os),
    isIOS: isIOSType(os) || getIPad13(),
    isChrome: isChromeType(browser),
    isFirefox: isFirefoxType(browser),
    isSafari: isSafariType(browser),
    isOpera: isOperaType(browser),
    isIE: isIEType(browser),
    osVersion: getOsVersion(os),
    osName: getOsName(os),
    fullBrowserVersion: getBrowserFullVersion(browser),
    browserVersion: getBrowserVersion(browser),
    browserName: getBrowserName(browser),
    mobileVendor: getMobileVendor(device),
    mobileModel: getMobileModel(device),
    engineName: getEngineName(engine),
    engineVersion: getEngineVersion(engine),
    getUA: getUseragent(ua),
    isEdge: isEdgeType(browser) || isEdgeChromiumType(),
    isYandex: isYandexType(browser),
    deviceType: getDeviceType(device),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(),
    isLegacyEdge: isEdgeType(browser) && !isEdgeChromiumType(),
    isWindows: isWindowsType(os),
    isMacOs: isMacOsType(os),
    isMIUI: isMIUIType(browser),
    isSamsungBrowser: isSamsungBrowserType(browser)
  }
}
