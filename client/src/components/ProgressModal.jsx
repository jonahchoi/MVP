import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion, useAnimationFrame } from 'framer-motion';
import CommonButton from './CommonStyles/CommonButton.jsx';

const ProgressModal = ({ progress, uploadRef, resetLoading }) => {
  const [disable, setDisable] = useState(false);

  const stopUpload = () => {
    uploadRef.cancel()
    resetLoading();
  }

  useEffect(() => {
    if(progress === 100) {
      let timer = setTimeout(resetLoading, 1500);
      setDisable(true);
      return ()=>clearTimeout(timer);
    }
  }, [progress]);

  return (
    <Modal>
      <div>
        <OuterBar>
          <ProgressBar
            initial={{
              scaleX: 0
            }}
            animate={{
              scaleX: progress,
              transition: {
                duration: 0.2,
                ease: 'linear'
              }
            }}
          ></ProgressBar>
        </OuterBar>
        <span>{progress}%</span>
      </div>
      <CommonButton type="button" neg='true' onClick={stopUpload} disabled={disable}>Cancel</CommonButton>
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
const OuterBar = styled.div`
  width: 500px;
  height: 50px;
  background-color: #D3D3D3;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
`
const ProgressBar = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background-color: #9EE37D;
  transform-origin: 0 0;
`
/* const ProgressBar = styled.div`
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
` */

export default ProgressModal
