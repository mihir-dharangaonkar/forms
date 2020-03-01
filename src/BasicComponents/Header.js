import React from "react"
import styled from "styled-components"
import ImageView from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/ImageView.js"
import PropTypes from "prop-types"

const Banner = styled.div`
  display: flex;
  border: 1px solid black;
  width: 100%;
  background-color: black;
  height: 60px;
  color: white;
`
const Text = styled.h1`
  margin: 0 auto;
  font-weight: bold;
`

const Header = (Props) => (
  <>
    <Banner>
      <ImageView
        path={Props.path}
        style={{ width: 80, height: 80, color: "white" }}
        handleClick={Props.handleClick}
      />
      <Text>{Props.header}</Text>
    </Banner>
  </>
)

Header.propTypes = {
  path: PropTypes.string,
  handleClick: PropTypes.func,
  header: PropTypes.string
}

Header.defaultProps = {
  header: "sample Header"
}

export default Header
