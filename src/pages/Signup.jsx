import React from 'react'

import Header from '../components/Header'
import AuthForm from '../components/AuthForm'

const Login = () => {
  return (
    <div className='' >
        <Header/>
        <AuthForm type={"signup"} />
    </div>
  )
}

export default Login