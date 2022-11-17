import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import styled from 'styled-components';
import { ColumnFlex, QRImg } from './Styles.jsx';
import Socials from './Socials.jsx';

const Share = ({ getFromStorage, navigate }) => {
  const { id } = useParams();
  const [qr, setQr] = useState(null);
  const [idCode, setIdCode] = useState('');
  useEffect(() => {
    if(id) {
      (async () => {
        try{
          let result = await getFromStorage(id);

          setIdCode(result.code);
          QRCode.toDataURL(`http://localhost:1111/download/${id}`, (err, res) => {
            setQr(res);
          })
        } catch(err) {
          navigate('404');
        }
      })();
    }
  }, [id]);

  const copyToClip = async (data) => {
    try{
      await navigator.clipboard.writeText(data);
    } catch(err) {
      console.log(err);
    }
  }
  const copyImgToClip = async () => {
    let res = await fetch(qr);
    res = await res.blob();

    try{
      await navigator.clipboard.write([
        new ClipboardItem({
          'image/png': res
        })
      ]);
    } catch(err) {
      console.log(err);
    }

  }
  return (
    <ShareScreen>
      <QRImg src={qr} />
      <button onClick={copyImgToClip}><i className="fa-regular fa-clipboard"></i></button>
      <p>{idCode}</p>
      <button onClick={()=>copyToClip(idCode)}><i className="fa-regular fa-clipboard"></i></button>
      <Socials link={`http://localhost:1111/download/${id}`} code={idCode} />
    </ShareScreen>
  )
}

const ShareScreen = styled(ColumnFlex)`

`


export default Share
