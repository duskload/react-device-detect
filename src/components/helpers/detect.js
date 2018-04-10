import {
    browser,
    device,
    os,
    ua,
    engine
} from './get-ua-data';

const checkDeviceType = () => {
    switch(device.type) {
        case 'mobile':
            return {
                isMobile: true
            };
        case 'tablet':
            return {
                isTablet: true
            };
        case undefined:
            return {
                isBrowser: true
            };
        default:
            return {
                isMobile: false,
                isTablet: false,
                isBrowser: false
            };
    };
};


const getCurrentBrowser = () => {
    switch (browser.name) {
        case 'Chrome':
            return true;
        case 'Firefox':
            return true;
        case 'Opera':
            return true;
        case 'Yandex':
            return true;
        case 'Safari':
            return true;
        case 'IE':
            return true;
        case 'Edge':
            return true;
        default:
            return false;
    }
};

const type = checkDeviceType();

const deviceDetect = () => {
    const {isBrowser, isMobile, isTablet} = type;
    if (isBrowser) {        
        return {
            isBrowser: getCurrentBrowser(),
            browserMajorVersion: browser.major,
            browserFullVersion: browser.version,
            browserName: browser.name,
            engineName: engine.name || false,
            engineVersion: engine.version,
            osName: os.name,
            osVersion: os.version,
            userAgent: ua
        };
    }

    if (isMobile || isTablet) {
        return {
            ...type,
            vendor: device.vendor || "none",
            model: device.model || "none",
            os: os.name || "none",
            osVersion: os.version || "none",
            ua: ua || "none"
        };
    }
};

export default deviceDetect;