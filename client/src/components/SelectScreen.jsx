import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SelectScreen = () => {
  return (
    <HalfScreens>
      <HalfButton to="/upload">Upload!</HalfButton>
      <VerticalBar />
      <HalfButton to="/download">Download</HalfButton>
    </HalfScreens>
  )
}

const HalfScreens = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

`
const VerticalBar = styled.div`
  background-color: white;
  width:5px;
  height: 100%;
`
const HalfButton = styled(Link)`
  height:100%;
  width: 100%;
  font-size: 2rem;
  color: inherit;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
`
export default SelectScreen;
