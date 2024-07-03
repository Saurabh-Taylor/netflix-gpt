import React from 'react'

import Header from '../components/Header'
import AuthForm from '../components/AuthForm'

const Signup = () => {
  return (
    <div className='' >
        <Header/>
        <AuthForm type={"signup"} />
    </div>
  )
}

export default Signup