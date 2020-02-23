import React from "react"
import styled from "styled-components"
import { Route } from "react-router-dom"
import Registration from "./Pages/Registration"
import Success from "./Pages/Success"
import LoginPage from "./Pages/LoginPage"
import DataTable from "./Pages/DataTable"
import UserDetails from "./Pages/UserDetails"
import ErrorBoundries from "/Users/mihirdharangaonkar/forms-app/src/ErrorBoundries.js"
import backIcon from "/Users/mihirdharangaonkar/forms-app/src/Icons/Back.jpeg"
function App() {
  const BigContainer = styled.div`
    margin-left: 40px;
    margin-right: 40px;
    height: 100%;
  `

  return (
    <>
      <BigContainer>
        <ErrorBoundries>
          <Route exact path="/" component={LoginPage} />

          <Route path="/registration" component={Registration} />
          <Route path="/Success" component={Success} />
          <Route path="/datatable" component={DataTable} />

          <Route path="/userdetails/:task" component={UserDetails} />
        </ErrorBoundries>
      </BigContainer>
    </>
  )
}

export default App
