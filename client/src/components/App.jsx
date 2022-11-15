import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import UploadForm from './UploadForm.jsx';
import SelectScreen from './SelectScreen.jsx';
import Downloads from './Downloads.jsx';
import Err404 from './Err404.jsx';
import useStorage from '../Hooks/useStorage';

const App = () => {
  // const navigate = useNavigate();
  let {uploadToStorage, getFromStorage, progress, currentId, err} = useStorage();

  // useEffect(() => {
  //   if(progress === 100) {
  //     navigate(`/download/${currendId}`);
  //   }
  // }, [progress]);

  return(
    <BrowserRouter>
      <GlobalStyle />
      <StickyHeader><HeaderLink to="/"><h1>QuickSend</h1></HeaderLink></StickyHeader>
      <div>{progress}%</div>
      <Routes>
        <Route path='/'>
          <Route index element={<SelectScreen />}/>
          <Route path='upload' element={<UploadForm uploadToStorage={uploadToStorage} progress={progress} />} />
          <Route path='download/:id' element={<Downloads getFromStorage={getFromStorage} />} />
          <Route path='*' element={<Err404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const GlobalStyle = createGlobalStyle`
  body, html{
    margin: 0;
    padding: 0;
    background-color: #130f40;
    color: white;
  }
  #root {
    height: 95vh;
    margin:0;
    padding: 0;
  }
`

const StickyHeader = styled.div`
  position: sticky;
  height: 5vh;
  top: 0;
  background-color: #30336b;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    margin: 0;
  }
`
const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`

export default App;