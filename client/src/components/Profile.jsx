import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import { ColumnFlex, HalfScreens, QRImg } from './CommonStyles/Styles.jsx';
import { useAuth } from '../Hooks/useAuth';
import CopyToClipboardButton from './CommonStyles/CopyButton.jsx';
import { copyImgToClip } from '../Tools/CopyToClip.js';
import styled from 'styled-components';

const Profile = () => {
  const [personalQR, setPersonalQR] = useState(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    QRCode.toDataURL(`http://localhost:1111/user/${currentUser.uid}/uploads`, (err, res) => {
      setPersonalQR(res);
    })
  }, []);

  return (
    <ColumnFlex>
      <Title>My profile</Title>
      <HalfScreens>
        <LeftSide>
          <p>My QR Code</p>
          <QRImg src={personalQR} />
          <CopyToClipboardButton onClick={()=>copyImgToClip(personalQR)}/>
          <p>Scan to upload a file directly <br/> to your personal downloads!</p>
        </LeftSide>
        <RightSide>
          <p>Email:</p>
          <p>{currentUser.email}</p>
        </RightSide>
      </HalfScreens>
    </ColumnFlex>
  )
}
const LeftSide = styled(ColumnFlex)`
  height: 45%;
  & p {
    font-size: 1.5rem;
    text-align: center;
  }
`
const RightSide = styled(ColumnFlex)`
  height: 45%;
`
const Title = styled.h2`
  margin-top: 50px;
  padding: 0;
  margin-bottom: -100px;
`


export default Profile
