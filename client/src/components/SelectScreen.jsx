import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import { ColumnFlex } from './Styles.jsx';

const SelectScreen = () => {
  return (
    <HalfScreens>
      <LeftSide>
        <h2>Send files...</h2>
        <p>using QR Codes</p>
      </LeftSide>
      <VerticalContainer>
        <HalfButton to="/upload">Upload!</HalfButton>
        <VerticalBar />
        <HalfButton to="/download">Download</HalfButton>
      </VerticalContainer>
    </HalfScreens>
  )
}

const HalfScreens = styled(ColumnFlex)`
  flex-direction: row;
  background-color: #9EE37D;
  color: black;
`
const VerticalContainer = styled(ColumnFlex)`
  width: 100%;
  background-color: #042A2B;
  color: white;
`
const LeftSide = styled.div`
  width: 100%;
`
const VerticalBar = styled.div`
  background-color: white;
  height:5px;
  width: 100%;
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
