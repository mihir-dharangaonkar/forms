import React from "react"
import Buttons from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Buttons.js"
import { mount } from "enzyme"



describe("Buttons", () => {
  it("Should display the text passed as props", () => {
    const Button = mount(<Buttons text={"Submit"} />)
    expect(Button.text()).toBe("Submit")
  })
})
