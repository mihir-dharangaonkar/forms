import React from 'react';
import InputBox from '/Users/mihirdharangaonkar/forms-app/src/BasicComponents/InputBox.js'
import { mount } from 'enzyme';



describe ('InputBox',()=>{
    it('Should call onPress method when user input text',()=>{

        const mockOnPress=jest.fn();
        const Input=mount(<InputBox onPress={mockOnPress}/>)

        Input.find('input').simulate('change',{target: 'Mihir' });
        expect(mockOnPress).toHaveBeenCalledTimes(1);
    })
})