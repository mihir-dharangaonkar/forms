import React from "react"
import { Input } from "semantic-ui-react"

const InputBox = ({ onPress, ...props }) => {
  return (
    <>
      <Input type={props.type} placeholder={props.placeholder} onChange={onPress} />
    </>
  )
}
export default InputBox
