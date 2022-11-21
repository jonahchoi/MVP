import React, { useEffect } from 'react'
import { Outlet, useParams, useLocation } from 'react-router'
import { useAuth } from '../../Hooks/useAuth'
import { redirect, Navigate } from 'react-router'
const PrivateRoute = ({ navigate }) => {
  const { currentUser } = useAuth();
  const { uid } = useParams();
  const location = useLocation();

  useEffect(() => {
    if(!currentUser) {
      console.log('should nav')
      navigate('/login', {replace: true});
    } else {
      navigate(location, {replace: true});
      // navigate(`/user/${currentUser.uid}/profile`, {replace: true})
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
