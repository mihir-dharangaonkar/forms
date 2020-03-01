import React from "react"
import { Form, Checkbox } from "semantic-ui-react"

const CheckBoxes = ({ handleChange, LabelName }) => {
  return (
    <>
      {LabelName.map((labels) => (
        <Form key={labels.value}>
          <Checkbox label={labels.Label} onChange={handleChange} />
        </Form>
      ))}
    </>
  )
}

export default CheckBoxes
