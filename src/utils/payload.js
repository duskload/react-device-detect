import { setDefaults } from '../utils'

const createBrowserPayload = (isBrowser, browser, engine, os, ua) => ({
  isBrowser,
  browserMajorVersion: setDefaults(browser.major),
  browserFullVersion: setDefaults(browser.version),
  browserName: setDefaults(browser.name),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

const createMobilePayload = (type, device, os, ua) => ({
  ...type,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  os: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  ua: setDefaults(ua)
});

const createSmartTVPayload = (isSmartTV, engine, os, ua) => ({
  isSmartTV,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

const createConsolePayload = (isConsole, engine, os, ua) => ({
  isConsole,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

const createWearablePayload = (isWearable, engine, os, ua) => ({
  isWearable,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua)
});

export {
  createBrowserPayload,
  createMobilePayload,
  createSmartTVPayload,
  createConsolePayload,
  createWearablePayload
}