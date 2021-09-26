import { setDefaults } from './utils';

export const browserPayload = (isBrowser, browser, engine, os, ua) => ({
  isBrowser,
  browserMajorVersion: setDefaults(browser.major),
  browserFullVersion: setDefaults(browser.version),
  browserName: setDefaults(browser.name),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const mobilePayload = (type, device, os, ua) => ({
  ...type,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  os: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  ua: setDefaults(ua),
});

export const smartTvPayload = (isSmartTV, engine, os, ua) => ({
  isSmartTV,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const consolePayload = (isConsole, engine, os, ua) => ({
  isConsole,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const wearablePayload = (isWearable, engine, os, ua) => ({
  isWearable,
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
});

export const embeddedPayload = (isEmbedded, device, engine, os, ua) => ({
  isEmbedded,
  vendor: setDefaults(device.vendor),
  model: setDefaults(device.model),
  engineName: setDefaults(engine.name),
  engineVersion: setDefaults(engine.version),
  osName: setDefaults(os.name),
  osVersion: setDefaults(os.version),
  userAgent: setDefaults(ua),
})
