import React, { useEffect } from 'react'
import { Outlet, useParams } from 'react-router'
import { useAuth } from '../../Hooks/useAuth'
import { redirect, Navigate } from 'react-router'
const PrivateRoute = ({ navigate }) => {
  const { currentUser } = useAuth();
  const { uid } = useParams();

  useEffect(() => {
    if(!currentUser) {
      console.log('should nav')
      navigate('/login', {replace: true});
    } else {
      navigate(`/user/${currentUser.uid}/profile`, {replace: true})
      console.log('hi')
    }
  }, []);

  if(!uid) {
    return(
      <Navigate to='/*' replace={true} />
    )
  }

  return (
    <Outlet />
  )
}

export default PrivateRoute
