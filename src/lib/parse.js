const UAParser = require('ua-parser-js/dist/ua-parser.min');

export const parseUserAgent = (userAgent) => {
  // If we have userAgent string passed as argument,
  // most likely we are running ssr
  if (userAgent) {
    const ServerUAInstance = new UAParser(userAgent);

    return {
      UA: ServerUAInstance,
      browser: ServerUAInstance.getBrowser(),
      cpu: ServerUAInstance.getCPU(),
      device: ServerUAInstance.getDevice(),
      engine: ServerUAInstance.getEngine(),
      os: ServerUAInstance.getOS(),
      ua: ServerUAInstance.getUA(),
      setUserAgent: (userAgentString) => ServerUAInstance.setUA(userAgentString),
    };
  }

  // Client user agent
  const ClientUAInstance = new UAParser(userAgent);

  return {
    UA: ClientUAInstance,
    browser: ClientUAInstance.getBrowser(),
    cpu: ClientUAInstance.getCPU(),
    device: ClientUAInstance.getDevice(),
    engine: ClientUAInstance.getEngine(),
    os: ClientUAInstance.getOS(),
    ua: ClientUAInstance.getUA(),
    setUserAgent: (userAgentString) => ClientUAInstance.setUA(userAgentString),
  };
};
