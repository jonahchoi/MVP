import React, { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import axios from 'axios';
import FormData from 'form-data';
import ProgressModal from './ProgressModal.jsx';
import { ColumnFlex, QRImg } from './Styles.jsx';

const UploadForm = ({ uploadToStorage, progress }) => {
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
    <ColumnFlex as="form" onSubmit={handleSubmit}>
      <p>Scan to upload from your mobile device</p>
      <QRImg src={uploadQR} />
      <p>...or upload a file here</p>
      <FileInput>
        Choose a File...
        <input type="file" onChange={handleFileChange}/>
      </FileInput>
      <p>{file && file.name}</p>
      <button type="submit">Upload</button>
      {isLoading ? <ProgressModal progress={progress} uploadRef={uploadRef} resetLoading={resetLoading} /> : null}
    </ColumnFlex>
  )
}


const FileInput = styled.label`
  background-color: #fff;
  color: black;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  &:hover {
    background-color: red;
  }

  & input {
    display: none;
  }
`

export default UploadForm
