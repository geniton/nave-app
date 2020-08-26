import React, { createContext, useState, useEffect } from 'react'
import t from 'prop-types'
import Api from 'services/Api'
import history from 'history.js'

const AuthContext = createContext()

function AuthProvider ({ children }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const contexts = {
    Login,
    Logout,
    authenticated,
    loading
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      Api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
      setAuthenticated(true)
    }

    setLoading(false)
  },[])

  async function Login (email,password) {
    const payload = {
      email,
      password
    }
    
    try {
      const { data: { token } } = await Api.post('/users/login',payload);
      localStorage.setItem('token', JSON.stringify(token))

      Api.defaults.headers.Authorization = `Bearer ${token}`
      setAuthenticated(true)
      history.push('/')
      
    } catch(err) {
      alert('Falha ao fazer o login')
    }
  }

  function Logout() {
    setAuthenticated(false)
    localStorage.removeItem('token')
    Api.defaults.headers.Authorization = undefined
    history.push('/login')
  }

  return (
    <AuthContext.Provider value={contexts}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: t.node.isRequired
}

export { AuthProvider , AuthContext }