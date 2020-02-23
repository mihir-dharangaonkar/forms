import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import App from "/Users/mihirdharangaonkar/forms-app/src/App.js"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Root = () => {
  toast.configure({
    autoClose: false,
    draggable: false,
    closeOnClick: false
  })
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root
