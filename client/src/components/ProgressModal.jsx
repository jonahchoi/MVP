import React from 'react'
import styled from 'styled-components';

//TODO: framer motion progress bar
const ProgressModal = ({ progress, uploadRef, resetLoading }) => {
  const stopUpload = () => {
    uploadRef.cancel()
    resetLoading();
  }
  return (
    <Modal>
      <div>
        <ProgressBar progress={progress}></ProgressBar>
        <p>{progress}%</p>
      </div>
      <button type="button" onClick={stopUpload}>Cancel</button>
    </Modal>
  )
}

const Modal = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 21;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  background-color: rgba(45, 52, 54, 0.9);
`
const ProgressBar = styled.div`
  background-color: #fff;
  width: 45vw;
  height: 50px;
  position: relative;

  &::after {
    content: "x";
    position: absolute;
    top: 12.5px;
    left: 12.5px;
    height: 50%;
    overflow: hidden;
    width: ${props => props.progress}%;
    background-color: green;
    color: green;
  }
`

export default ProgressModal
