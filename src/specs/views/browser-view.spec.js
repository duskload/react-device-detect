import React from 'react';
import {BrowserView} from '../../src/components/views';

describe('<BrowserView/>', () => {
    test('should render component <BrowserView/>', () => {
        const wrapper = shallow(<BrowserView/>);
    
        expect(wrapper).toHaveLength(1)
    });
    
    test('should render component <BrowserView/> with children', () => {
        const wrapper = shallow(
            <BrowserView device><div className="test11" /></BrowserView>
        );
    
        expect(wrapper.contains(<div className="test11" />)).toEqual(true)
    });
    
    test('should render component <BrowserView/> with only text', () => {
        const wrapper = shallow(
            <BrowserView device>Test</BrowserView>
        );
    
        expect(wrapper.text()).toEqual('Test')
    });
    
    test('should render component <BrowserView/> with custom class', () => {
        const wrapper = shallow(
            <BrowserView device viewClassName='test-class'/>
        );
    
        expect(wrapper.hasClass('test-class')).toEqual(true)
    });

    test('should not render component <BrowserView/> children if no device prop provided', () => {
        const wrapper = shallow(
            <BrowserView><div>sadasdasd</div></BrowserView>
        );
        expect(wrapper.children()).toHaveLength(0)
    });
})
