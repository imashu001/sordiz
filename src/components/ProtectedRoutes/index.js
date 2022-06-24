import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = ({component: Component, ...props}) => {

  const loggedin = useSelector(state => state.adminState.loggedin)
  const data = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')): {} 
  
  return (
    
    <Route
    {...props}
    render={(innerProps) =>
      localStorage.getItem("userData") ? (
        <Component {...innerProps} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
  )
}
export default ProtectedRoute