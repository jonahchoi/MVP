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
      navigate('/login', {replace: true});
    } else {
      navigate(location, {replace: true});
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
