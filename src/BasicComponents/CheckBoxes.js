import React from "react"
import { Checkbox } from "semantic-ui-react"
import styled from "styled-components"

const LabelName = ["Hindu", "Buddhist", "Musalman", "Jews"]
const Wrapper = styled.div``

const CheckBoxes = () => (
  <>
    {LabelName.map((labels) => (
      <Wrapper key={LabelName.index}>
        <Checkbox label={labels} />
      </Wrapper>
    ))}
  </>
)

export default CheckBoxes
