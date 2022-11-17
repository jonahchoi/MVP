import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommonButton = ({text, type, onClick}) => {

  const buttonVar = {
    rest: { scale: 0},
    hover: { scale: 1.1 }
  }
  const backVar = {
    rest: {},
    hover: {}
  }
  return (
    <div>
      <Button
      type={type}
      onClick={onClick}
      variant={buttonVar}
      animate='rest'
      whileHover='hover'
      >
        {text}
        <Backer variant={backVar} backgroundColor='blue'></Backer>
      </Button>
    </div>
  )
}
const Button = styled(motion.button)`
  font-family: inherit;
  position: relative;
  width: 200px;
  height: 30px;
  margin: 20px;
  background-color: #9EE37D;
  border-radius: 5px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.9) 1.95px 1.95px 2.6px;
`
const Backer = styled(motion.div)`
  height: 30px;
  width: 200px;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: bottom left;
  background-color: ${props=>props.backgroundColor};
`
export default CommonButton;
