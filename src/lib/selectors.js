import * as UAHelper from './parse';
import { BrowserTypes, DeviceTypes, OsTypes } from '../constants/constants';
import { setDefaults, isIOS13Check, getNavigatorInstance } from '../utils/utils';
const { parseUserAgent } = UAHelper

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
const isEdgeChromiumType = (ua) => {
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

export const isSmartTV = isSmartTVType(UAHelper.device);
export const isConsole = isConsoleType(UAHelper.device);
export const isWearable = isWearableType(UAHelper.device);
export const isMobileSafari = isMobileSafariType(UAHelper.browser) || getIPad13();
export const isChromium = isChromiumType(UAHelper.browser);
export const isMobile = isMobileAndTabletType(UAHelper.device) || getIPad13();
export const isMobileOnly = isMobileType(UAHelper.device);
export const isTablet = isTabletType(UAHelper.device) || getIPad13();
export const isBrowser = isBrowserType(UAHelper.device);
export const isDesktop = isBrowserType(UAHelper.device);
export const isAndroid = isAndroidType(UAHelper.os);
export const isWinPhone = isWinPhoneType(UAHelper.os);
export const isIOS = isIOSType(UAHelper.os) || getIPad13();
export const isChrome = isChromeType(UAHelper.browser);
export const isFirefox = isFirefoxType(UAHelper.browser);
export const isSafari = isSafariType(UAHelper.browser);
export const isOpera = isOperaType(UAHelper.browser);
export const isIE = isIEType(UAHelper.browser);
export const osVersion = getOsVersion(UAHelper.os);
export const osName = getOsName(UAHelper.os);
export const fullBrowserVersion = getBrowserFullVersion(UAHelper.browser);
export const browserVersion = getBrowserVersion(UAHelper.browser);
export const browserName = getBrowserName(UAHelper.browser);
export const mobileVendor = getMobileVendor(UAHelper.device);
export const mobileModel = getMobileModel(UAHelper.device);
export const engineName = getEngineName(UAHelper.engine);
export const engineVersion = getEngineVersion(UAHelper.engine);
export const getUA = getUseragent(UAHelper.ua);
export const isEdge = isEdgeType(UAHelper.browser) || isEdgeChromiumType(UAHelper.ua);
export const isYandex = isYandexType(UAHelper.browser);
export const deviceType = getDeviceType(UAHelper.device);
export const isIOS13 = getIOS13();
export const isIPad13 = getIPad13();
export const isIPhone13 = getIphone13();
export const isIPod13 = getIPod13();
export const isElectron = isElectronType();
export const isEdgeChromium = isEdgeChromiumType(UAHelper.ua);
export const isLegacyEdge = isEdgeType(UAHelper.browser) && !isEdgeChromiumType(UAHelper.ua);
export const isWindows = isWindowsType(UAHelper.os);
export const isMacOs = isMacOsType(UAHelper.os);
export const isMIUI = isMIUIType(UAHelper.browser);
export const isSamsungBrowser = isSamsungBrowserType(UAHelper.browser);

export function buildSelectorsObject(options) {
  const { device, browser, os, engine, ua } = options ? options : UAHelper
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
    isEdge: isEdgeType(browser) || isEdgeChromiumType(ua),
    isYandex: isYandexType(browser),
    deviceType: getDeviceType(device),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua),
    isLegacyEdge: isEdgeType(browser) && !isEdgeChromiumType(ua),
    isWindows: isWindowsType(os),
    isMacOs: isMacOsType(os),
    isMIUI: isMIUIType(browser),
    isSamsungBrowser: isSamsungBrowserType(browser)
  }
}

export const getSelectorsByUserAgent = userAgent => {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided')
    return
  }

  const { device, browser, os, engine, ua } = parseUserAgent(userAgent)
  return buildSelectorsObject({ device, browser, os, engine, ua })
}
