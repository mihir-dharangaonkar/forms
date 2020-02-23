import React, { useState } from "react"
import { Menu, Segment, Sidebar } from "semantic-ui-react"
import LoginPage from "/Users/mihirdharangaonkar/forms-app/src/Pages/LoginPage.js"

const NavBar = ({ show }) => {
  const [visible, setVisible] = useState(show)

  return (
    <>
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Menu.Item as="a">Login</Menu.Item>
          <Menu.Item as="a">Registration</Menu.Item>
          <Menu.Item as="a">DataTable</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher>
          <LoginPage />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  )
}

export default NavBar
