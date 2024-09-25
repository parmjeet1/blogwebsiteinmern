import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({element:Component, ...rest}) {
    const isAuthenticated = useSelector((state)=> state.loginReducer);
    console.log(isAuthenticated);
  return isAuthenticated.data ? <Component {...rest}/> : <Navigate to="/login" />
}
