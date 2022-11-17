import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { motion, useAnimationFrame } from 'framer-motion';
//TODO: framer motion progress bar
const ProgressModal = ({ progress, uploadRef, resetLoading }) => {
  // const barWidth = 500;
  // const percentsOffset = (progress - 100) * (barWidth / 100);

  // const [currentPercent, setCurrentPercent] = useState(-barWidth);

  const stopUpload = () => {
    uploadRef.cancel()
    resetLoading();
  }

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
