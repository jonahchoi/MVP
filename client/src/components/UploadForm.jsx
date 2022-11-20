import React, { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import axios from 'axios';
import FormData from 'form-data';
import ProgressModal from './ProgressModal.jsx';
import { ColumnFlex, QRImg, HalfScreens, VerticalBar, CenterText, ButtonContainer } from './CommonStyles/Styles.jsx';
import CommonButton from './CommonStyles/CommonButton.jsx';
import { motion } from 'framer-motion';

const UploadForm = ({ uploadToStorage, progress, returnHome }) => {
  const [uploadQR, setUploadQR] = useState(null);
  const [file, setFile] = useState(null);
  const [uploadRef, setUploadRef] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noFileSelected, setNoFileSelected] = useState(false);

  useEffect(() => {
    QRCode.toDataURL('http://localhost:1111/upload', (err, res) => {
      setUploadQR(res);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!file) {
      //Add better error handling if I have time
      setNoFileSelected(true);
      return;
    }
    setUploadRef(uploadToStorage(file));
    setIsLoading(true);
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setNoFileSelected(false);
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
          {file ?
          <Paper
          initial={{
            y: -700,
          }}
          animate={{
            y: 0,
            transition: {
              duration: 1,
              type: 'tween',
              times: [],
              ease: 'linear'
            }
          }}
          >———————E</Paper>
          : null}
          <FileFlap
          animate={file ? {
            skew: -6,
            scaleY: 0.95,
            transformPerspective: 1000
          } : false}
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
          <CommonButton type="button" text="Cancel" neg="true" onClick={returnHome}></CommonButton>
          <CommonButton type="submit" text={noFileSelected ? 'No File Selected' : "Upload"} error={`${noFileSelected}`}></CommonButton>
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
const RightSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  margin-top: 30px;
  font-size: 1.5rem;
  `
const LeftSide = styled(ColumnFlex)`
  width: 45%;
  height: 50%;
  font-size: 1.5rem;
`

const FileFlap = styled(motion.div)`
  width: 100%;
  height: 195px;
  background-color: #ffe9a2;
  position: absolute;
  top: 5px;
  z-index: 3;
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
const Paper = styled(motion.div)`
  width: 95%;
  height: 190px;
  background-color: #fff;
  position: absolute;
  top: 2;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
`
const FileName = styled.div`
  color: black;
  font-size: 1.5rem;
  padding-left: 25px;
  z-index: 4;
  pointer-events: none;
`

export default UploadForm
