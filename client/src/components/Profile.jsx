import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import { QRImg } from './CommonStyles/Styles.jsx';
import { useAuth } from '../Hooks/useAuth';

const Profile = () => {
  const [personalQR, setPersonalQR] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    QRCode.toDataURL(`http://localhost:1111/${currentUser.authId || currentUser.uid}/uploads`, (err, res) => {
      setPersonalQR(res);
    })
  }, []);

  return (
    <div>
      <QRImg src={personalQR} />
    </div>
  )
}

export default Profile
