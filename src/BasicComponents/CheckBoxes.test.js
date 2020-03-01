import React from 'react'
import CheckBoxes from '/Users/mihirdharangaonkar/forms-app/src/BasicComponents/CheckBoxes.js'
import { mount } from 'enzyme';
const LabelName = [
    { Label: "Hindu", value: 1 },
    { Label: "Buddhist", value: 2 },
    { Label: "Jews", value: 3 }
  ]
describe ('CheckBoxes' ,()=>{
    it('it should render all labels from props array',()=>{
       
        const checkBoxTest = mount(<CheckBoxes LabelName={LabelName} />);

        expect(checkBoxTest.find('Checkbox')).toHaveLength(3);
    })

    it('Should call HandleChange when user clicks on CheckBox',()=>{

    const mockHandleChange=jest.fn();
    const checkBoxTest=mount(<CheckBoxes LabelName={LabelName} onChange={mockHandleChange}/>);
    checkBoxTest.find('Checkbox').first().simulate('click');
    expect(mockHandleChange).toHaveBeenCalledTimes(1);

    })
})