import React, { useState } from "react"
import { Checkbox, Form } from "semantic-ui-react"
import Header from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Header.js"
import styled from "styled-components"
import Buttons from "/Users/mihirdharangaonkar/forms-app/src/BasicComponents/Buttons.js"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import logo from "/Users/mihirdharangaonkar/forms-app/src/Icons/SideBar.png"
import backIcon from "/Users/mihirdharangaonkar/forms-app/src/Icons/Back.jpeg"

const Container = styled.div`
  display: block;
  height: 300px;
  width: 300px;
  margin: auto;
  margin-top:200px;
`
const LoginContainer = styled.div`
  background-image: url(${backIcon});
  height: 1000px;
  width: auto;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const LoginPage = ({ history }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      checkbox: ""
    },

    onSubmit: (values) => {
      if (values.email === "tristar.mihir@gmail.com") {
        history.push("/registration")
      } else {
        toast.error("Wrong email or password", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        })
      }
    }
  })

  const [show, setShow] = useState(true)
  return (
    <LoginContainer>
      <Header header="Login Page" path={logo} handleClick={() => setShow(true)} />

      <Container>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Field>
            <label style={{color:'white',fontWeight:'bold'}}>UserName</label>
            <input
              type="email"
              name="email"

              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Form.Field>
          <Form.Field>
            <label style={{color:'white',fontWeight:'bold'}}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              name="checkbox"
              label=" I Agree for all terms and conditions"
              onClick={formik.handleChange}
              value={show}
            />
          </Form.Field>
          <Buttons />
        </Form>
      </Container>
    </LoginContainer>
  )
}

export default LoginPage
