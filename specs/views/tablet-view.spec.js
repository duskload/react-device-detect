import React from 'react';
import {TabletView} from '../../src/components/views';

describe('<TabletView/>', () => {
    test('should render component <TabletView/>', () => {
        const wrapper = shallow(<TabletView/>);
    
        expect(wrapper).toHaveLength(1)
    });
    
    test('should render component <TabletView/> with children', () => {
        const wrapper = shallow(
            <TabletView device><div className="test11" /></TabletView>
        );
    
        expect(wrapper.contains(<div className="test11" />)).toEqual(true)
    });
    
    test('should render component <TabletView/> with only text', () => {
        const wrapper = shallow(
            <TabletView device>Test</TabletView>
        );
    
        expect(wrapper.text()).toEqual('Test')
    });
    
    test('should render component <TabletView/> with custom class', () => {
        const wrapper = shallow(
            <TabletView device viewClassName='test-class'/>
        );
    
        expect(wrapper.hasClass('test-class')).toEqual(true)
    });

    test('should not render component <TabletView/> children if no device prop provided', () => {
        const wrapper = shallow(
            <TabletView><div>sadasdasd</div></TabletView>
        );
        expect(wrapper.children()).toHaveLength(0)
    });
})
