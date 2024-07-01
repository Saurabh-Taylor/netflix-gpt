import React from 'react'

import Header from '../components/Header'
import AuthForm from '../components/AuthForm'

const Login = () => {
  return (
    <div className='' >
        <Header/>
        <AuthForm type={"signin"} />
    </div>
  )
}

export default Login