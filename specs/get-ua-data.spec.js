import { mockUserAgent, UA, setUA } from "../src/components/helpers/get-ua-data";

const commonTestUa =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Safari/537.36";

describe("Parsing useragent", () => {
  it("should set useragent with mockUserAgent", () => {
    const uaStr =
      "Mozilla/5.0 (iPad; CPU OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9B206";
    mockUserAgent(uaStr);
    expect(window.navigator.userAgent).toEqual(uaStr);
  });

  it("should get device data", () => {
    const uaStr =
      "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.79 Mobile Safari/537.36";
    setUA(uaStr);
    const data = UA.getDevice();

    const matchingData = {
      vendor: "Motorola",
      model: "Nexus 6",
      type: "mobile"
    };
    expect(data).toMatchObject(matchingData);
  });

  it("should get browser data", () => {
    setUA(commonTestUa);
    const data = UA.getBrowser();
    const matchingData = {
      name: "Chrome",
      version: "61.0.3163.79",
      major: "61"
    };
    expect(data).toMatchObject(matchingData);
  });

  it("should get engine data", () => {
    setUA(commonTestUa);
    const data = UA.getEngine();
    const matchingData = {
      name: "WebKit",
      version: "537.36"
    };
    expect(data).toMatchObject(matchingData);
  });

  it("should get engine data", () => {
    setUA(commonTestUa);
    const data = UA.getCPU();
    const matchingData = {
      architecture: "amd64"
    };
    expect(data).toMatchObject(matchingData);
  });

  it("should get engine data", () => {
    setUA(commonTestUa);
    const data = UA.getOS();
    const matchingData = {
      name: "Linux",
      version: "x86_64"
    };
    expect(data).toMatchObject(matchingData);
  });

  it("should get engine data", () => {
    setUA(commonTestUa);
    const data = UA.getUA();
    expect(data).toEqual(commonTestUa);
  });
});
