import * as UAHelper from './parse';
import * as types from './types';
import { buildSelectorsObject } from './buildSelectors';

export const isSmartTV = types.isSmartTVType(UAHelper.device);
export const isConsole = types.isConsoleType(UAHelper.device);
export const isWearable = types.isWearableType(UAHelper.device);
export const isEmbedded = types.isEmbeddedType(UAHelper.device);
export const isMobileSafari = types.isMobileSafariType(UAHelper.browser) || types.getIPad13();
export const isChromium = types.isChromiumType(UAHelper.browser);
export const isMobile = types.isMobileAndTabletType(UAHelper.device) || types.getIPad13();
export const isMobileOnly = types.isMobileType(UAHelper.device);
export const isTablet = types.isTabletType(UAHelper.device) || types.getIPad13();
export const isBrowser = types.isBrowserType(UAHelper.device);
export const isDesktop = types.isBrowserType(UAHelper.device);
export const isAndroid = types.isAndroidType(UAHelper.os);
export const isWinPhone = types.isWinPhoneType(UAHelper.os);
export const isIOS = types.isIOSType(UAHelper.os) || types.getIPad13();
export const isChrome = types.isChromeType(UAHelper.browser);
export const isFirefox = types.isFirefoxType(UAHelper.browser);
export const isSafari = types.isSafariType(UAHelper.browser);
export const isOpera = types.isOperaType(UAHelper.browser);
export const isIE = types.isIEType(UAHelper.browser);
export const osVersion = types.getOsVersion(UAHelper.os);
export const osName = types.getOsName(UAHelper.os);
export const fullBrowserVersion = types.getBrowserFullVersion(UAHelper.browser);
export const browserVersion = types.getBrowserVersion(UAHelper.browser);
export const browserName = types.getBrowserName(UAHelper.browser);
export const mobileVendor = types.getMobileVendor(UAHelper.device);
export const mobileModel = types.getMobileModel(UAHelper.device);
export const engineName = types.getEngineName(UAHelper.engine);
export const engineVersion = types.getEngineVersion(UAHelper.engine);
export const getUA = types.getUseragent(UAHelper.ua);
export const isEdge = types.isEdgeType(UAHelper.browser) || types.isEdgeChromiumType(UAHelper.ua);
export const isYandex = types.isYandexType(UAHelper.browser);
export const deviceType = types.getDeviceType(UAHelper.device);
export const isIOS13 = types.getIOS13();
export const isIPad13 = types.getIPad13();
export const isIPhone13 = types.getIphone13();
export const isIPod13 = types.getIPod13();
export const isElectron = types.isElectronType();
export const isEdgeChromium = types.isEdgeChromiumType(UAHelper.ua);
export const isLegacyEdge =
  types.isEdgeType(UAHelper.browser) && !types.isEdgeChromiumType(UAHelper.ua);
export const isWindows = types.isWindowsType(UAHelper.os);
export const isMacOs = types.isMacOsType(UAHelper.os);
export const isMIUI = types.isMIUIType(UAHelper.browser);
export const isSamsungBrowser = types.isSamsungBrowserType(UAHelper.browser);

export const getSelectorsByUserAgent = (userAgent) => {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided');
    return;
  }

  const { device, browser, os, engine, ua } = UAHelper.parseUserAgent(userAgent);
  return buildSelectorsObject({ device, browser, os, engine, ua });
};
