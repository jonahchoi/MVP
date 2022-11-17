import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import UploadForm from './UploadForm.jsx';
import SelectScreen from './SelectScreen.jsx';
import Share from './Share.jsx';
import Downloads from './Downloads.jsx';
import Verification from './Verification.jsx';
import Err404 from './Err404.jsx';
import useStorage from '../Hooks/useStorage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../assets/logo.png';
import { motion, useAnimation } from 'framer-motion';

const App = () => {
  const navigate = useNavigate();
  let {
    uploadToStorage,
    getFromStorage,
    queryFromStorage,
    progress,
    firestoreId,
    idCode,
    err
  } = useStorage();

  useEffect(() => {
    if(progress === 100 && firestoreId) {
      navigate(`/share/${firestoreId}`);
    }
  }, [firestoreId]);

  return(
    <HomePage>
      <GlobalStyle />
      <HeaderLink to="/"><Logo src={logo}/></HeaderLink>
      <Routes>
        <Route path='/'>
          <Route index element={<SelectScreen />}/>
          <Route path='upload' element={<UploadForm uploadToStorage={uploadToStorage} progress={progress} />} />
          <Route path='share/:id' element={<Share getFromStorage={getFromStorage} navigate={navigate} />} />
          <Route path="download" element={<Verification queryFromStorage={queryFromStorage} navigate={navigate} />} />
          <Route path='download/:id' element={<Downloads getFromStorage={getFromStorage} />} />
          <Route path='*' element={<Err404 />} />
        </Route>
      </Routes>
    </HomePage>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    background-color: #042A2B;
    color: white;
    font-family: 'Sono', sans-serif;
  }
  #root {
    height: 100vh;
    margin:0;
    padding: 0;
  }
`
const HomePage = styled.div`
  height: 100%;
`
const Logo = styled.img`
  width: 150px;
  height: auto;
`
const HeaderLink = styled(Link)`
  position: absolute;
  height: 5vh;
  top: 0;
  left: 0;
  margin: 0;
  padding: 25px;
`

export default App;