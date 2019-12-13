import { browser, device, os, ua, engine } from '../init';
import { checkType } from '../utils';
import {
  createBrowserPayload,
  createConsolePayload,
  createMobilePayload,
  createSmartTVPayload,
  createWearablePayload
} from '../utils/payload';

const type = checkType(device.type);

function deviceDetect() {
  const { isBrowser, isMobile, isTablet, isSmartTV, isConsole, isWearable } = type;

  if (isBrowser) {
    return createBrowserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return createSmartTVPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return createConsolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return createMobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return createMobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return createWearablePayload(isWearable, engine, os, ua);
  }
}

export { deviceDetect };
