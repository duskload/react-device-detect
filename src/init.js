const UAParser = require('ua-parser-js/dist/ua-parser.min');

let UA = null, browser = null, cpu = null, device = null, engine = null, os = null, ua = null

const initializePackage = () => {
  if (typeof window !== 'undefined') {
    if (window && window.navigator) {
      UA = new UAParser();

      browser = UA.getBrowser();
      cpu = UA.getCPU();
      device = UA.getDevice();
      engine = UA.getEngine();
      os = UA.getOS();
      ua = UA.getUA();
    }
  }
}

initializePackage()

export {
  UA,
  browser,
  cpu,
  device,
  engine,
  os,
  ua
}