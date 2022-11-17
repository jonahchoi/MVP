import React from "react";
import { Link } from 'react-router-dom';
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const AnimatedButton = ({ direction }) => {

  const container = {
    clicked: {
      scale: 1
    },
    hovered: {scale: 1.1},
    hidden: {scale: 1}
  }
  const arrowVariant = {
    clicked: {
      y: [0, -200, -300],
      opacity: [1, 0, 0],
      transition: {
        duration: 0.5,
        times: [0, 0.8, 1],
        ease: 'easeOut'
      }
    },
    hovered: d => {
      if(d==='upload'){
        return {
          opacity: [0, 0, 1],
          y: [300, 200, 0],
          transition: {
            duration: 0.5,
            times: [0, 0.2, 1],
            ease: 'easeOut'
          }
        }
      } else {
        return {
          opacity: [0, 0, 1],
          y: [-300, -200, 0],
          transition: {
            duration: 0.5,
            times: [0, 0.2, 1],
            ease: 'easeOut'
          }
        }
      }
    },
    hidden: d => {
      if(d==='upload'){
        return {
          opacity: [1, 0, 0],
          y: [0, -200, -300],
          transition: {
            duration: 0.5,
            times: [0, 0.8, 1],
            ease: 'easeOut'
          }

        }
      } else {
        return {
          opacity: [1, 0, 0],
          y: [0, 200, 300],
          transition: {
            duration: 0.5,
            times: [0, 0.8, 1],
            ease: 'easeOut'
          }
        }
      }


    }
  }

  return(
    <ButtonDiv
      initial={false}
      animate='hidden'
      whileHover='hovered'
      variants={container}
    >
      <HalfButton to={`/${direction}`}>
        {direction === 'upload' ? 'Upload' : 'Download'}
        <Arrow className={`fa-solid fa-arrow-${direction === 'upload' ? 'up' : 'down'}`}
          variants={arrowVariant}
          custom={direction}
        ></Arrow>
      </HalfButton>
    </ButtonDiv>
  )
}
const ButtonDiv = styled(motion.div)`
  height:100%;
  width: 100%;
`
const HalfButton = styled(Link)`
  height:100%;
  width: 100%;
  font-size: 4rem;
  color: inherit;
  cursor: pointer;
  display:flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`
const Arrow = styled(motion.i)`
  margin-left: 10px;
`

export default AnimatedButton;