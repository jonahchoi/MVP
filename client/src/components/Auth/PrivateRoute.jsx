import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useAuth } from '../../Hooks/useAuth'
const PrivateRoute = ({ navigate }) => {
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log(currentUser);
    if(!currentUser) {
      navigate('/login', {replace: true});
    } else {
      navigate(`/profile/${currentUser.authId || currentUser.uid}`)
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default PrivateRoute
