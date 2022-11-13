import React, { useEffect, useState } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';

const UploadForm = () => {
  const [uploadQR, setUploadQR] = useState(null);
  useEffect(() => {
    // QRCode.toDataURL('http://localhost:3000/upload', (err, res) => {
    //   setUploadQR(res);
    // })
  }, []);

  return (
    <FormLayout>
      {/* <p>Scan to upload from your mobile device</p>
      <img src={uploadQR} height="250px" width="250px" />
      <p>...or upload a file here</p>
      <input type="file" />
      <button type="submit" >Submit</button> */}
    </FormLayout>
  )
}

const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default UploadForm
