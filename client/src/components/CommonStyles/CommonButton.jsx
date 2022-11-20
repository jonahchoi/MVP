import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommonButton = ({text, type, neg, onClick, error, children}) => {

  const buttonVar = {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }
  const backVar = {
    rest: i => {
      if(i === 0) {
        return {
          rotate: -90,
          transition: {
            type: 'tween',
            delay: 0.05
          }
        }
      } else {
        return {
          rotate: -90,
          transition: {
            type: 'tween',
            delay: 0
          }
        }
      }
    },
    hover: {
      rotate: 0,
      transition: {
        type: 'tween'
      }
    }
  }

  return (
    <Button
    type={type}
    neg={neg}
    error={error}
    onClick={onClick}
    variants={buttonVar}
    initial={false}
    animate='rest'
    whileHover='hover'
    whileTap={{
      scale: 0.95
    }}
    >
      <Backer variants={backVar} $backgroundColor={neg ? '#D1CCDC' : '#ADB9E3'} custom={0}></Backer>
      <Backer variants={backVar} $backgroundColor={neg ? '#88A2AA':'#ACDDE7'} custom={1}></Backer>
      <Span>{children || text}</Span>
    </Button>
  )
}
const Button = styled(motion.button)`
  font-family: inherit;
  position: relative;
  width: 300px;
  height: 50px;
  margin: 20px;
  background-color: ${({neg, error})=> {
    return neg ? 'transparent' : error==='true' ? 'red' : '#9EE37D'
  }};
  border: ${({neg}) => neg ? '3px solid #9EE37D' : 'none'};
  color: ${({neg}) => neg ? '#9EE37D' : '#000'};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.9) 1.95px 1.95px 2.6px;
  overflow: hidden;
  cursor: pointer;
`
const Backer = styled(motion.div)`
  height: 50px;
  width: 300px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: bottom left;
  background-color: ${props=>props.$backgroundColor};
  pointer-events: none;
`
const Span = styled.span`
  position: relative;
  z-index: 5;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default CommonButton;
