const UAParser = require("ua-parser-js/dist/ua-parser.min");

export const UA = new UAParser();

export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setUA = uaStr => UA.setUA(uaStr);

export const mockUserAgent = userAgent => {
  window.navigator.__defineGetter__("userAgent", () => userAgent);
};
