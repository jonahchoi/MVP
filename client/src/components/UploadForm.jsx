import React, { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import axios from 'axios';
import FormData from 'form-data';
import ProgressModal from './ProgressModal.jsx';
import { ColumnFlex, QRImg } from './Styles.jsx';
import CommonButton from './CommonButton.jsx';
import { motion } from 'framer-motion';
import BackButton from './BackButton.jsx';

const UploadForm = ({ uploadToStorage, progress, returnHome }) => {
  const [uploadQR, setUploadQR] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadRef, setUploadRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    QRCode.toDataURL('http://localhost:3000/upload', (err, res) => {
      setUploadQR(res);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!file) {
      //Add better error handling if I have time
      alert('Please select a file first');
      return;
    }
    setUploadRef(uploadToStorage(file));
    setIsLoading(true);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const resetLoading = () => {
    setIsLoading(false);
  }

  return (
    <HalfScreens>
      <LeftSide>
        <p>Scan to upload from your mobile device</p>
        <QRImg src={uploadQR} />
      </LeftSide>
      <VerticalBar>
        <CenterText>OR</CenterText>
      </VerticalBar>
      <RightSide as="form" onSubmit={handleSubmit}>
        <p>Upload a file here</p>
        <FileInput>
          <FileTop />
          <FileFlap
          whileHover={{
            skew: -10,
            scaleY: 0.9,
            transformPerspective: 2000,
          }}
          ></FileFlap>
          <FileName>
            {file ? file.name : 'Choose a File...'}
          </FileName>
          <input type="file" onChange={handleFileChange}/>
        </FileInput>
        <ButtonContainer>
          {/* <BackButton onClick={returnHome} height='50px' width='300px'/> */}
          <CommonButton type="button" text="Cancel" neg={true} onClick={returnHome}></CommonButton>
          <CommonButton type="submit" text="Upload"></CommonButton>
        </ButtonContainer>
        {isLoading ? <ProgressModal progress={progress} uploadRef={uploadRef} resetLoading={resetLoading} /> : null}
      </RightSide>
    </HalfScreens>
  )
}


const FileInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 2;
  width: 40%;
  height: 200px;
  background-color: #F8D775;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.9) 1.95px 1.95px 2.6px;
  position: relative;
  margin: 10px;

  & input {
    display: none;
  }
`
const HalfScreens = styled(ColumnFlex)`
  flex-direction: row;
  & p {
    font-size: 1.5rem;
  }
`
const RightSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  margin-top: 30px;
`
const LeftSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
`
const VerticalBar = styled.div`
  background-color: white;
  height: 70%;
  width: 3px;
  display:flex;
  justify-content: center;
  align-items: center;
`
const CenterText = styled.div`
  font-size: 2.5rem;
  padding: 1rem;
  background-color: #042A2B;
`
const FileFlap = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: #ffe9a2;
  position: absolute;
  z-index: 1;
  transform-origin: bottom;
  border-radius: 5px;
`
const FileTop = styled.div`
  position: absolute;
  width: 100px;
  height: 20px;
  top: -10px;
  left: 0;
  background-color: #F8D775;
  border-radius: 10px;
  z-index: 1;
`
const FileName = styled.div`
  color: black;
  font-size: 1.5rem;
  z-index: 2;
  pointer-events: none;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0;
`
export default UploadForm
