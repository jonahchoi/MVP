import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UploadForm from './components/UploadForm.jsx';

const App = () => {

  return(
    <>
      <GlobalStyle />
      <StickyHeader><h1>QuickSend</h1></StickyHeader>

      <UploadForm />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
  }
`

const StickyHeader = styled.div`
  position: sticky;
  height: 5vh;
  top: 0;
  background-color: green;
  margin: 0;
  text-align: center;

  & h1 {
    margin: 0;
  }
`

export default App;