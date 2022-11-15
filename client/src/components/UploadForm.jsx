import React, { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode';
import styled from 'styled-components';
import axios from 'axios';
import FormData from 'form-data';
import { useNavigate } from 'react-router-dom';

const UploadForm = ({ uploadToStorage, progress }) => {
  const [uploadQR, setUploadQR] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    QRCode.toDataURL('http://localhost:3000/upload', (err, res) => {
      setUploadQR(res);
    })
  }, []);
  useEffect(() => {
    if(progress === 100) {
      navigate('/download');
    }
  }, [progress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!file) {
      //Add better error handling if I have time
      alert('Please select a file first');
      return;
    }
    uploadToStorage(file);

  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  return (
    <FormLayout onSubmit={handleSubmit}>
      <p>Scan to upload from your mobile device</p>
      <img src={uploadQR} height="250px" width="250px" />
      <p>...or upload a file here</p>
      <FileInput>
        Choose a File...
        <input type="file" onChange={handleFileChange}/>
      </FileInput>
      <p>{file && file.name}</p>
      <button type="submit" >Submit</button>
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
