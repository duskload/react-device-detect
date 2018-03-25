import React from 'react';
import {IOSView} from '../../src/components/views';

describe('<IOSView/>', () => {
    test('should render component <IOSView/>', () => {
        const wrapper = shallow(<IOSView/>);
    
        expect(wrapper).toHaveLength(1)
    });
    
    test('should render component <IOSView/> with children', () => {
        const wrapper = shallow(
            <IOSView device><div className="test11" /></IOSView>
        );
    
        expect(wrapper.contains(<div className="test11" />)).toEqual(true)
    });
    
    test('should render component <IOSView/> with only text', () => {
        const wrapper = shallow(
            <IOSView device>Test</IOSView>
        );
    
        expect(wrapper.text()).toEqual('Test')
    });
    
    test('should render component <IOSView/> with custom class', () => {
        const wrapper = shallow(
            <IOSView device viewClassName='test-class'/>
        );
    
        expect(wrapper.hasClass('test-class')).toEqual(true)
    });

    test('should not render component <IOSView/> children if no device prop provided', () => {
        const wrapper = shallow(
            <IOSView><div>sadasdasd</div></IOSView>
        );
        expect(wrapper.children()).toHaveLength(0)
    });
})
