import React from "react"
import PropsTypes from "prop-types"
import styled from "styled-components"
import Icons from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Icons.js"

const Button = styled.button`
color: white;
background-color:${(props) => (props.primary ? "red" : "black")};
width: 100%;
height:50px;
cursor:pointer;
font-weight:bold;
border : ${(props) => (props.noBorder ? "none" : "1px solid")}
:hover{
background-color:blue;}
`
const Buttons = ({ ...props }) => {
  return (
    <>
      <Button>
        {props.text}

        <Icons />
      </Button>
    </>
  )
}

Buttons.propsTypes = {
  text: PropsTypes.String,
  color: PropsTypes.String
}

Buttons.defaultProps = {
  text: "No Text here"
}

export default Buttons
