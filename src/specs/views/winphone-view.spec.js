import React from "react";
import { WinPhoneView } from "../../src/components/views";

describe("<WinPhoneView/>", () => {
  test("should render component <WinPhoneView/>", () => {
    const wrapper = shallow(<WinPhoneView />);

    expect(wrapper).toHaveLength(1);
  });

  test("should render component <WinPhoneView/> with children", () => {
    const wrapper = shallow(
      <WinPhoneView device>
        <div className="test11" />
      </WinPhoneView>
    );

    expect(wrapper.contains(<div className="test11" />)).toEqual(true);
  });

  test("should render component <WinPhoneView/> with only text", () => {
    const wrapper = shallow(<WinPhoneView device>Test</WinPhoneView>);

    expect(wrapper.text()).toEqual("Test");
  });

  test("should render component <WinPhoneView/> with custom class", () => {
    const wrapper = shallow(<WinPhoneView device viewClassName="test-class" />);

    expect(wrapper.hasClass("test-class")).toEqual(true);
  });

  test("should not render component <WinPhoneView/> children if no device prop provided", () => {
    const wrapper = shallow(
      <WinPhoneView>
        <div>sadasdasd</div>
      </WinPhoneView>
    );
    expect(wrapper.children()).toHaveLength(0);
  });
});
