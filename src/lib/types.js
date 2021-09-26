import { BrowserTypes, DeviceTypes, OsTypes } from '../constants/constants';
import { getNavigatorInstance, isIOS13Check, setDefaults } from '../utils/utils';

// device types
export const isMobileType = ({ type }) => type === DeviceTypes.Mobile;
export const isTabletType = ({ type }) => type === DeviceTypes.Tablet;
export const isMobileAndTabletType = ({ type }) =>
  type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
export const isSmartTVType = ({ type }) => type === DeviceTypes.SmartTv;
export const isBrowserType = ({ type }) => type === DeviceTypes.Browser;
export const isWearableType = ({ type }) => type === DeviceTypes.Wearable;
export const isConsoleType = ({ type }) => type === DeviceTypes.Console;
export const isEmbeddedType = ({ type }) => type === DeviceTypes.Embedded;
export const getMobileVendor = ({ vendor }) => setDefaults(vendor);
export const getMobileModel = ({ model }) => setDefaults(model);
export const getDeviceType = ({ type }) => setDefaults(type, 'browser');

// os types
export const isAndroidType = ({ name }) => name === OsTypes.Android;
export const isWindowsType = ({ name }) => name === OsTypes.Windows;
export const isMacOsType = ({ name }) => name === OsTypes.MAC_OS;
export const isWinPhoneType = ({ name }) => name === OsTypes.WindowsPhone;
export const isIOSType = ({ name }) => name === OsTypes.IOS;
export const getOsVersion = ({ version }) => setDefaults(version);
export const getOsName = ({ name }) => setDefaults(name);

// browser types
export const isChromeType = ({ name }) => name === BrowserTypes.Chrome;
export const isFirefoxType = ({ name }) => name === BrowserTypes.Firefox;
export const isChromiumType = ({ name }) => name === BrowserTypes.Chromium;
export const isEdgeType = ({ name }) => name === BrowserTypes.Edge;
export const isYandexType = ({ name }) => name === BrowserTypes.Yandex;
export const isSafariType = ({ name }) =>
  name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
export const isMobileSafariType = ({ name }) => name === BrowserTypes.MobileSafari;
export const isOperaType = ({ name }) => name === BrowserTypes.Opera;
export const isIEType = ({ name }) =>
  name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
export const isMIUIType = ({ name }) => name === BrowserTypes.MIUI;
export const isSamsungBrowserType = ({ name }) => name === BrowserTypes.SamsungBrowser;
export const getBrowserFullVersion = ({ version }) => setDefaults(version);
export const getBrowserVersion = ({ major }) => setDefaults(major);
export const getBrowserName = ({ name }) => setDefaults(name);

// engine types
export const getEngineName = ({ name }) => setDefaults(name);
export const getEngineVersion = ({ version }) => setDefaults(version);

export const isElectronType = () => {
  const nav = getNavigatorInstance();
  const ua = nav && nav.userAgent && nav.userAgent.toLowerCase();

  return typeof ua === 'string' ? /electron/.test(ua) : false;
};
export const isEdgeChromiumType = (ua) => typeof ua === 'string' && ua.indexOf('Edg/') !== -1;

export const getIOS13 = () => {
  const nav = getNavigatorInstance();
  return (
    nav &&
    (/iPad|iPhone|iPod/.test(nav.platform) ||
      (nav.platform === 'MacIntel' && nav.maxTouchPoints > 1)) &&
    !window.MSStream
  );
};
export const getIPad13 = () => isIOS13Check('iPad');
export const getIphone13 = () => isIOS13Check('iPhone');
export const getIPod13 = () => isIOS13Check('iPod');
export const getUseragent = (userAg) => setDefaults(userAg);
