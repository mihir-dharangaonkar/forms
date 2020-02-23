import React, { useState } from "react"
import styled from "styled-components"
import { Form, Radio } from "semantic-ui-react"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: none;
  width: 50%;
  height: 25px;
  padding: 10px;
`

const RadioButton = ({ options, selected, setValue }) => {
  return (
    <div>
      {options.map((option) => (
        <Wrapper key={option.value}>
          <Form.Radio name="radio-group" value={option.value} label={option} />
        </Wrapper>
      ))}
    </div>
  )
}

export default RadioButton
