const initialData = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

export const checkType = type => {
  switch (type) {
    case "mobile":
      return {
        isMobile: true
      };
    case "tablet":
      return {
        isTablet: true
      };
    case "smarttv":
      return {
        isSmartTV: true
      };
    case "console":
      return {
        isConsole: true
      };
    case "wearable":
      return {
        isWearable: true
      };
    case undefined:
      return {
        isBrowser: true
      };
    default:
      return initialData;
  }
};

export const getCurrentBrowser = name => {
  switch (name) {
    case "Chrome":
      return true;
    case "Firefox":
      return true;
    case "Opera":
      return true;
    case "Yandex":
      return true;
    case "Safari":
      return true;
    case "IE":
      return true;
    case "Edge":
      return true;
    case "Chromium":
      return true;
    default:
      return false;
  }
};

export const broPayload = (isBrowser, browser, engine, os, ua) => {
  return {
    isBrowser,
    browserMajorVersion: browser.major,
    browserFullVersion: browser.version,
    browserName: browser.name,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

export const mobilePayload = (type, device, os, ua) => {
  return {
    ...type,
    vendor: device.vendor || "none",
    model: device.model || "none",
    os: os.name || "none",
    osVersion: os.version || "none",
    ua: ua || "none"
  };
};

export const stvPayload = (isSmartTV, engine, os, ua) => {
  return {
    isSmartTV,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

export const consolePayload = (isConsole, engine, os, ua) => {
  return {
    isConsole,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};

export const wearPayload = (isWearable, engine, os, ua) => {
  return {
    isWearable,
    engineName: engine.name || false,
    engineVersion: engine.version,
    osName: os.name,
    osVersion: os.version,
    userAgent: ua
  };
};
