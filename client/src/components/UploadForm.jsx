import React from 'react'
import QRCode from 'qrcode';

let code;
QRCode.toDataURL('http://localhost:1234/upload', (err, res) => {
  code = res;
})

const UploadForm = () => {



  return (
    <form >
      <img src={code} />
      <input type="file" />
      <button type="submit" >Submit</button>
    </form>
  )
}

export default UploadForm
