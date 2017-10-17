import React from 'react';
import {MobileView} from '../../src/components/views';

describe('<MobileView/>', () => {
    test('should render component <MobileView/>', () => {
        const wrapper = shallow(<MobileView device/>);
    
        expect(wrapper).toHaveLength(1)
    });
    
    test('should render component <MobileView/> with children', () => {
        const wrapper = shallow(
            <MobileView device><div className="test11"></div></MobileView>
        );
        expect(wrapper.contains(<div className="test11" />)).toEqual(true)
    });
    
    test('should render component <MobileView/> with only text', () => {
        const wrapper = shallow(
            <MobileView device>Test</MobileView>
        );
    
        expect(wrapper.text()).toEqual('Test')
    });
    
    test('should render component <MobileView/> with custom class', () => {
        const wrapper = shallow(
            <MobileView device viewClassName='test-class'/>
        );
    
        expect(wrapper.hasClass('test-class')).toEqual(true)
    });

    test('should not render component <MobileView/> children if no device prop provided', () => {
        const wrapper = shallow(
            <MobileView><div>sadasdasd</div></MobileView>
        );
        expect(wrapper.children()).toHaveLength(0)
    });
})
