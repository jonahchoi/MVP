import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import UploadForm from './UploadForm.jsx';
import SelectScreen from './SelectScreen.jsx';

const App = () => {

  return(
    <BrowserRouter>
      <GlobalStyle />
      <StickyHeader><h1>QuickSend</h1></StickyHeader>
      <Routes>
        <Route path='/'>
          <Route index element={<SelectScreen/>}/>
          <Route path='upload' element={<UploadForm />} />
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

export default App;