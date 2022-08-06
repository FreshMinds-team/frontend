import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';

const Login = () => {
  let { loginUser } = useContext(AuthContext)

  const [containerStyle, setContainerStyle] = useState('container')

  const toggleSignUp = () => {
    setContainerStyle('container right-panel-active')
  };

  const toggleSignIn = () => {
    setContainerStyle('container')
  };

  return (
    <div>
          <form onSubmit={loginUser}>
            <h1>Sign in</h1>
            <span>to use your account</span>
            <input type="text" name="username" placeholder="Enter Username" />
            <input type="password" name="password" placeholder="Enter Password" />
            <input type="submit" />
          </form>        
    </div>
  )

}

export default Login