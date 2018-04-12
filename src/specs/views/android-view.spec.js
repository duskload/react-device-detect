import React from "react";
import { AndroidView } from "../../src/components/views";

describe("<AndroidView/>", () => {
  test("should render component <AndroidView/>", () => {
    const wrapper = shallow(<AndroidView />);

    expect(wrapper).toHaveLength(1);
  });

  test("should render component <AndroidView/> with children", () => {
    const wrapper = shallow(
      <AndroidView device>
        <div className="test11" />
      </AndroidView>
    );

    expect(wrapper.contains(<div className="test11" />)).toEqual(true);
  });

  test("should render component <AndroidView/> with only text", () => {
    const wrapper = shallow(<AndroidView device>Test</AndroidView>);

    expect(wrapper.text()).toEqual("Test");
  });

  test("should render component <AndroidView/> with custom class", () => {
    const wrapper = shallow(<AndroidView device viewClassName="test-class" />);

    expect(wrapper.hasClass("test-class")).toEqual(true);
  });

  test("should not render component <AndroidView/> children if no device prop provided", () => {
    const wrapper = shallow(
      <AndroidView>
        <div>sadasdasd</div>
      </AndroidView>
    );
    expect(wrapper.children()).toHaveLength(0);
  });
});
