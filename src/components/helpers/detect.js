import { browser, device, os, ua, engine } from "./get-ua-data";
import * as create from "./types";

const type = create.checkType(device.type);

export default () => {
  const {
    isBrowser,
    isMobile,
    isTablet,
    isSmartTV,
    isConsole,
    isWearable
  } = type;
  if (isBrowser) {
    return create.broPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return create.stvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return create.consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return create.mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return create.wearPayload(isWearable, engine, os, ua);
  }
};
