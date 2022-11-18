import React, { useEffect, useRef, useState } from 'react'
import { ColumnFlex } from './Styles.jsx';
import styled from 'styled-components';
import CommonButton from './CommonButton.jsx';
import RICIBs from 'react-individual-character-input-boxes';

const Verification = ({ queryFromStorage, navigate, returnHome }) => {
  const [inputCode, setInputCode] = useState('');
  const [inputErr, setInputErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let id = await queryFromStorage(inputCode);

      navigate(`/download/${id}`);
    } catch(err) {
      setInputErr(true);
    }
  }
  const handleOutput = (str) => {
    setInputCode(str);
  }
  useEffect(() => {
    if(inputErr) {
      setInputErr(false);
    }
  }, [inputCode])
  return (
    <ColumnFlex as="form" onSubmit={handleSubmit}>
      <Label htmlFor="code-input">
        Download ID:
      </Label>
      <RICIBs
      inputProps={
        {id: "code-input"}
      }
      amount={6}
      autoFocus
      handleOutputString={handleOutput}
      inputRegExp={/^[A-Za-z0-9]$/}/>
      <ButtonContainer>
        <CommonButton type="button" text="Cancel" neg={true} onClick={returnHome}></CommonButton>
        <CommonButton type="submit" text={inputErr ? 'Invalid ID' : 'Submit'}></CommonButton>
      </ButtonContainer>
    </ColumnFlex>
  )
}
const Label = styled.label`
  font-size: 1.5rem;
  margin: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0;
`

export default Verification
