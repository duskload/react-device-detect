import React from 'react';
import {IEView} from '../../src/components/views';

describe('<IEView/>', () => {
    test('should render component <IEView/>', () => {
        const wrapper = shallow(<IEView/>);
    
        expect(wrapper).toHaveLength(1)
    });
    
    test('should render component <IEView/> with children', () => {
        const wrapper = shallow(
            <IEView device><div className="test11" /></IEView>
        );
    
        expect(wrapper.contains(<div className="test11" />)).toEqual(true)
    });
    
    test('should render component <IEView/> with only text', () => {
        const wrapper = shallow(
            <IEView device>Test</IEView>
        );
    
        expect(wrapper.text()).toEqual('Test')
    });
    
    test('should render component <IEView/> with custom class', () => {
        const wrapper = shallow(
            <IEView device viewClassName='test-class'/>
        );
    
        expect(wrapper.hasClass('test-class')).toEqual(true)
    });

    test('should not render component <IEView/> children if no device prop provided', () => {
        const wrapper = shallow(
            <IEView><div>sadasdasd</div></IEView>
        );
        expect(wrapper.children()).toHaveLength(0)
    });
})
