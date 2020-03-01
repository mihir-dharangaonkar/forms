import React from 'react';
import Buttons from '/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Buttons.js'
import { mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';




describe('Buttons',()=>{

    it('Should display the text passed as props' ,()=>{
       
        const Button=mount(<Buttons text={'Submit'}  />);
        expect(Button.text()).toBe('Submit');


    })

})