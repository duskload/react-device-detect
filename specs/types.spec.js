import {
  checkType,
  getCurrentBrowser,
  broPayload,
  mobilePayload,
  consolePayload,
  stvPayload,
  wearPayload
} from "../src/components/helpers/types";

describe("Types tests", () => {
  describe("checkType()", () => {
    it("should return isBrowser type on unedined", () => {
      expect(checkType(undefined)).toEqual({ isBrowser: true });
    });

    it("should return isMobile type on mobile", () => {
      expect(checkType("mobile")).toEqual({ isMobile: true });
    });

    it("should return object with all type as default case", () => {
      expect(checkType([])).toEqual({
        isMobile: false,
        isBrowser: false,
        isConsole: false,
        isSmartTV: false,
        isTablet: false,
        isWearable: false
      });
    });
  });

  describe("getCurrentBrowser()", () => {
    it("should return true if browser name exist", () => {
      expect(getCurrentBrowser("Chrome")).toEqual(true);
    });
    it("should return false if browser name doesn't exist", () => {
      expect(getCurrentBrowser("UC Browser")).toEqual(false);
    });
  });

  describe("Forming data payloads", () => {
    let browser, engine, os, ua, device;
    beforeAll(() => {
      browser = {
        major: "65",
        version: "55.55.5555.55",
        name: "Chrome"
      };
      engine = {
        name: "WebKit",
        version: "517"
      };
      os = {
        name: "Windows",
        version: "10.0"
      };
      ua =
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36";
      device = {
        vendor: "Apple",
        model: "iPhone"
      };
    });
    it("should return broPayload()", () => {
      expect(broPayload(true, browser, engine, os, ua)).toEqual({
        isBrowser: true,
        browserMajorVersion: browser.major,
        browserFullVersion: browser.version,
        browserName: browser.name,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
      });
    });

    it("should return mobilePayload()", () => {
      let mobileOs = { name: "iOS", version: "11.0" };
      let mobileUa =
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1";

      expect(
        mobilePayload(
          { isMobile: true, isTablet: false },
          device,
          mobileOs,
          mobileUa
        )
      ).toEqual({
        isMobile: true,
        isTablet: false,
        vendor: device.vendor,
        model: device.model,
        os: mobileOs.name,
        osVersion: mobileOs.version,
        ua: mobileUa
      });
    });

    it("should return stvPayload()", () => {
      expect(stvPayload(true, engine, os, ua)).toEqual({
        isSmartTV: true,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
      });
    });

    it("should return consolePayload()", () => {
      expect(consolePayload(true, engine, os, ua)).toEqual({
        isConsole: true,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
      });
    });

    it("should return wearPayload()", () => {
      expect(wearPayload(true, engine, os, ua)).toEqual({
        isWearable: true,
        engineName: engine.name || false,
        engineVersion: engine.version,
        osName: os.name,
        osVersion: os.version,
        userAgent: ua
      });
    });
  });
});
