import {os, device, browser} from './get-ua-data';

const isMobileType = () => {
    return device.type === 'mobile' ? true : false;
};

const isTabletType = () => {
    return device.type === 'tablet' ? true : false;
};

const isMobileAndTabletType = () => {
    switch(device.type) {
        case 'mobile':
            return true;
        case 'tablet':
            return true;
        default:
            return false;
    };
}

const isBrowserType = () => {
    return device.type === undefined ? true : false;
};

const isAndroidType = () => {
    return os.name === 'Android' ? true : false;
};

const isWinPhoneType = () => {
    return os.name === 'Windows Phone' ? true : false;
};

const isIOSType = () => {
    return os.name === 'iOS' ? true : false;
};

const isChromeType = () => {
    return browser.name === 'Chrome' ? true : false;
};

const isFirefoxType = () => {
    return browser.name === 'Firefox' ? true : false;
};

const isSafariType = () => {
    return browser.name === 'Safari' || browser.name === 'Mobile Safari' ? true : false;
};

const isOperaType = () => {
    return browser.name === 'Opera' ? true : false;
};

const isIEType = () => {
    return browser.name === 'Internet Explorer' ? true : false;
};

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
