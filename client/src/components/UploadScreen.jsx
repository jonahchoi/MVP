import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import { ColumnFlex, QRImg, HalfScreens, VerticalBar, CenterText } from './CommonStyles/Styles.jsx';
import UploadForm from './UploadForm.jsx';
import QRScanner from './QRScanner.jsx';
import CommonButton from './CommonStyles/CommonButton.jsx';

const UploadScreen = ({ returnHome }) => {
  const [accessCamera, setAccessCamera] = useState(false);
  /* const { ref: cameraRef } = useZxing({
    onResult(result) {
      let link = result.getText();
      if(link.includes(process.env.REACT_APP_BASEURL)) {
        window.open(link, '_blank');
      }
    },
    timeBetweenDecodingAttempts: 1000,
  }) */

  return (
    <HalfScreens>
      <LeftSide>
        <p>Scan a PersonalQR to send to a friend</p>
        {accessCamera
        ? <QRScanner />
        : <CamButton><CommonButton type="button" onClick={()=>setAccessCamera(true)}>Access Camera?</CommonButton></CamButton>}
      </LeftSide>
      <VerticalBar>
        <CenterText>OR</CenterText>
      </VerticalBar>
      <UploadForm returnHome={returnHome} />
    </HalfScreens>
  )
}

const LeftSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  font-size: 1.5rem;
`
const CamButton = styled.div`
  width: 600px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`


export default UploadScreen;
