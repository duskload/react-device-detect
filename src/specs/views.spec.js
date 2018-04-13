import React from "react";
import {
  AndroidView,
  BrowserView,
  IEView,
  IOSView,
  MobileView,
  TabletView,
  WinPhoneView
} from "../components/views";

describe("Views tests", () => {
  describe("AndroidView", () => {
    it("should render component <AndroidView/>", () => {
      const wrapper = shallow(<AndroidView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <AndroidView/> with children", () => {
      const wrapper = shallow(
        <AndroidView device>
          <div className="test11" />
        </AndroidView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <AndroidView/> with only text", () => {
      const wrapper = shallow(<AndroidView device>Test</AndroidView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <AndroidView/> with custom class", () => {
      const wrapper = shallow(
        <AndroidView device viewClassName="test-class" />
      );

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <AndroidView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <AndroidView>
          <div>sadasdasd</div>
        </AndroidView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("BrowserView", () => {
    it("should render component <BrowserView/>", () => {
      const wrapper = shallow(<BrowserView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <BrowserView/> with children", () => {
      const wrapper = shallow(
        <BrowserView device>
          <div className="test11" />
        </BrowserView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <BrowserView/> with only text", () => {
      const wrapper = shallow(<BrowserView device>Test</BrowserView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <BrowserView/> with custom class", () => {
      const wrapper = shallow(
        <BrowserView device viewClassName="test-class" />
      );

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <BrowserView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <BrowserView>
          <div>sadasdasd</div>
        </BrowserView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("IEView", () => {
    it("should render component <IEView/>", () => {
      const wrapper = shallow(<IEView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <IEView/> with children", () => {
      const wrapper = shallow(
        <IEView device>
          <div className="test11" />
        </IEView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <IEView/> with only text", () => {
      const wrapper = shallow(<IEView device>Test</IEView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <IEView/> with custom class", () => {
      const wrapper = shallow(<IEView device viewClassName="test-class" />);

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <IEView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <IEView>
          <div>sadasdasd</div>
        </IEView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("IOSView", () => {
    it("should render component <IOSView/>", () => {
      const wrapper = shallow(<IOSView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <IOSView/> with children", () => {
      const wrapper = shallow(
        <IOSView device>
          <div className="test11" />
        </IOSView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <IOSView/> with only text", () => {
      const wrapper = shallow(<IOSView device>Test</IOSView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <IOSView/> with custom class", () => {
      const wrapper = shallow(<IOSView device viewClassName="test-class" />);

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <IOSView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <IOSView>
          <div>sadasdasd</div>
        </IOSView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("MobileView", () => {
    it("should render component <MobileView/>", () => {
      const wrapper = shallow(<MobileView device />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <MobileView/> with children", () => {
      const wrapper = shallow(
        <MobileView device>
          <div className="test11" />
        </MobileView>
      );
      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <MobileView/> with only text", () => {
      const wrapper = shallow(<MobileView device>Test</MobileView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <MobileView/> with custom class", () => {
      const wrapper = shallow(<MobileView device viewClassName="test-class" />);

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <MobileView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <MobileView>
          <div>sadasdasd</div>
        </MobileView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("TabletView", () => {
    it("should render component <TabletView/>", () => {
      const wrapper = shallow(<TabletView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <TabletView/> with children", () => {
      const wrapper = shallow(
        <TabletView device>
          <div className="test11" />
        </TabletView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <TabletView/> with only text", () => {
      const wrapper = shallow(<TabletView device>Test</TabletView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <TabletView/> with custom class", () => {
      const wrapper = shallow(<TabletView device viewClassName="test-class" />);

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <TabletView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <TabletView>
          <div>sadasdasd</div>
        </TabletView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });

  describe("WinPhoneView", () => {
    it("should render component <WinPhoneView/>", () => {
      const wrapper = shallow(<WinPhoneView />);

      expect(wrapper).toHaveLength(1);
    });

    it("should render component <WinPhoneView/> with children", () => {
      const wrapper = shallow(
        <WinPhoneView device>
          <div className="test11" />
        </WinPhoneView>
      );

      expect(wrapper.contains(<div className="test11" />)).toEqual(true);
    });

    it("should render component <WinPhoneView/> with only text", () => {
      const wrapper = shallow(<WinPhoneView device>Test</WinPhoneView>);

      expect(wrapper.text()).toEqual("Test");
    });

    it("should render component <WinPhoneView/> with custom class", () => {
      const wrapper = shallow(
        <WinPhoneView device viewClassName="test-class" />
      );

      expect(wrapper.hasClass("test-class")).toEqual(true);
    });

    it("should not render component <WinPhoneView/> children if no device prop provided", () => {
      const wrapper = shallow(
        <WinPhoneView>
          <div>sadasdasd</div>
        </WinPhoneView>
      );
      expect(wrapper.children()).toHaveLength(0);
    });
  });
});
