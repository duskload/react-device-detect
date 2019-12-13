const UAParser = require('ua-parser-js/dist/ua-parser.min');

let UA = null, browser = null, cpu = null, device = null, engine = null, os = null, ua = null

function init() {
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

init()

export {
  UA,
  browser,
  cpu,
  device,
  engine,
  os,
  ua
}