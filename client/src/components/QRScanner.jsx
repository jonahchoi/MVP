import React from 'react'
import { useZxing } from 'react-zxing';
import styled from 'styled-components';

const QRScanner = () => {
  const { ref: cameraRef } = useZxing({
    onResult(result) {
      let link = result.getText();
      if(link.includes(process.env.REACT_APP_BASEURL)) {
        window.open(link, '_blank');
      }
    },
    timeBetweenDecodingAttempts: 1000,
  });

  return (
    <>
      <Camera ><video ref={cameraRef}/> <QRBox></QRBox></Camera>

    </>
  )
}
const Camera = styled.div`
  width: 600px;
  height: 500px;
  border-radius: 10px;
  position: relative;
`
const QRBox = styled.div`
  position: absolute;
  height: 300px;
  width: 300px;
  top: 100px;
  left: 150px;
  background:
    linear-gradient(to right, black 4px, transparent 4px) 0 0,
    linear-gradient(to right, black 4px, transparent 4px) 0 100%,
    linear-gradient(to left, black 4px, transparent 4px) 100% 0,
    linear-gradient(to left, black 4px, transparent 4px) 100% 100%,
    linear-gradient(to bottom, black 4px, transparent 4px) 0 0,
    linear-gradient(to bottom, black 4px, transparent 4px) 100% 0,
    linear-gradient(to top, black 4px, transparent 4px) 0 100%,
    linear-gradient(to top, black 4px, transparent 4px) 100% 100%;

  background-repeat: no-repeat;
  background-size: 75px 75px;
`
export default QRScanner
