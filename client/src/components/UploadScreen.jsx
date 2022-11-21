import React, { useState, useEffect } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import { ColumnFlex, QRImg, HalfScreens, VerticalBar, CenterText } from './CommonStyles/Styles.jsx';
import UploadForm from './UploadForm.jsx';

const UploadScreen = ({ returnHome }) => {
  const [uploadQR, setUploadQR] = useState(null);

  useEffect(() => {
    QRCode.toDataURL('http://localhost:1111/upload', (err, res) => {
      setUploadQR(res);
    })
  }, []);

  return (
    <HalfScreens>
      <LeftSide>
        <p>Scan to upload from your mobile device</p>
        <QRImg src={uploadQR} />
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



export default UploadScreen;
