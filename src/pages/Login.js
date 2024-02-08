import React from 'react'
import Template from '../components/Template'
import loginImage from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build Skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImage}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
