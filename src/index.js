//views
import {
  MobileView,
  BrowserView,
  TabletView,
  AndroidView,
  IOSView,
  IEView,
  WinPhoneView,
  MobileOnlyView
} from './components/views';

//detect
import deviceDetect from './components/helpers/detect';

//selectors
import {
  isAndroid,
  isBrowser,
  isChrome,
  isFirefox,
  isIE,
  isIOS,
  isMobile,
  isOpera,
  isSafari,
  isTablet,
  isWinPhone,
  isMobileOnly
} from './components/helpers/selectors';

export {

  //views
  MobileView,
  BrowserView,
  TabletView,
  AndroidView,
  IOSView,
  IEView,
  WinPhoneView,
  MobileOnlyView,

  //selectors
  isAndroid,
  isBrowser,
  isChrome,
  isFirefox,
  isIE,
  isIOS,
  isMobile,
  isOpera,
  isSafari,
  isTablet,
  isWinPhone,
  isMobileOnly,

  //detect
  deviceDetect
};
