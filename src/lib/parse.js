const UAParser = require('ua-parser-js/dist/ua-parser.min');

export const ClientUAInstance = new UAParser();

export const browser = ClientUAInstance.getBrowser();
export const cpu = ClientUAInstance.getCPU();
export const device = ClientUAInstance.getDevice();
export const engine = ClientUAInstance.getEngine();
export const os = ClientUAInstance.getOS();
export const ua = ClientUAInstance.getUA();
export const setUa = (userAgentString) => ClientUAInstance.setUA(userAgentString);

export const parseUserAgent = (userAgent) => {
  if (!userAgent) {
    console.error('No userAgent string was provided');
    return;
  }

  const UserAgentInstance = new UAParser(userAgent);

  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: (userAgentString) => UserAgentInstance.setUA(userAgentString),
  };
};
