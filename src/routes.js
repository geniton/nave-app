import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthProvider'
import Login from 'pages/Login'
import Home from 'pages/Home'
import Profile from 'pages/Profile'

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { authenticated, loading } = useContext(AuthContext)

  if (loading) {
    return false
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login"/>
  }

  return <Route {...rest} />
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute isPrivate exact path="/" component={Home}/>
      <CustomRoute exact path="/login" component={Login}/>
      <CustomRoute isPrivate exact path="/perfil" component={Profile}/>
    </Switch>
  )
}

