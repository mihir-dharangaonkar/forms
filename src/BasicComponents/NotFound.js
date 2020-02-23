import React from "react"
import background from "/Users/mihirdharangaonkar/forms-app/src/Icons/404.jpg"
import styled from "styled-components"

const BackImage = styled.div`
  background-image: url("/Users/mihirdharangaonkar/forms-app/src/Icons/404.jpg");
`

const NotFound = () => {
  return (
    <>
      <BackImage />
    </>
  )
}

export default NotFound
