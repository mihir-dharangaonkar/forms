import React from "react"
import { Dropdown } from "semantic-ui-react"

const CustomSelect = ({ handleChange, ...props }) => (
  <>
    <Dropdown
      placeholder="Select your country"
      selection
      search
      options={props.options}
      onChange={handleChange}
    />
  </>
)

export default CustomSelect
