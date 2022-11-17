import React, { useRef } from 'react'
import { ColumnFlex } from './Styles.jsx';
import styled from 'styled-components';
const Verification = ({ queryFromStorage, navigate }) => {
  const codeRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      let id = await queryFromStorage(codeRef.current.value);

      navigate(`/download/${id}`);
    } catch(err) {
      console.log(err);
    }

  }
  return (
    <ColumnFlex as="form" onSubmit={handleSubmit}>
      <label htmlFor="code-input">
        6-digit ID:
      </label>
      <input id="code-input" ref={codeRef} type="text" />
      <button type="submit">Submit</button>
    </ColumnFlex>
  )
}




export default Verification
