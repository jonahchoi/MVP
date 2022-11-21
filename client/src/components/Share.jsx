import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import QRCode from 'qrcode';
import styled from 'styled-components';
import { ColumnFlex, QRImg, HalfScreens, VerticalBar, CenterText } from './CommonStyles/Styles.jsx';
import Socials from './CommonStyles/Socials.jsx';
import CopyToClipboardButton from './CommonStyles/CopyButton.jsx';
import { copyImgToClip, copyToClip } from '../Tools/CopyToClip.js';

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
          QRCode.toDataURL(`${process.env.REACT_APP_BASEURL}/download/${id}`, (err, res) => {
            setQr(res);
          })
        } catch(err) {
          navigate('404');
        }
      })();
    }
  }, [id]);

  return (
    <HalfScreens>
      <LeftSide>
        <p>Share a QR Code</p>
        <QRImg src={qr} />
        <CopyToClipboardButton onClick={()=>copyImgToClip(qr)} />
      </LeftSide>
      <VerticalBar >
        <CenterText>OR</CenterText>
      </VerticalBar>
      <RightSide>
        <p>Share a custom ID</p>
        <CodeP>{idCode}</CodeP>
        <CopyToClipboardButton onClick={()=>copyToClip(idCode)} />
      <Socials link={`${process.env.REACT_APP_BASEURL}/download/${id}`} code={idCode} />
      </RightSide>
    </HalfScreens>
  )
}

const LeftSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  font-size: 1.5rem;
`
const RightSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  font-size: 1.5rem;
`
const CodeP = styled.p`
  background-color: #FAF9F6;
  font-size: 3rem;
  color: #000;
  padding: 10px;
  border-radius: 5px;
  margin: 20px;
`


export default Share
