import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
  const animation = {
    rotate: 360,
    transition: {
      repeat: Infinity,
      ease: 'linear',
      duration: 1
    }
  }
  return (
    <Container>
      <Spinner
        animate={animation}
      />
    </Container>
  )
}

const Spinner = styled(motion.span)`
  display: block;
  width: 3rem;
  height: 3rem;
  border: 0.5rem solid #e9e9e9;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
`
const Container = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
`

export default LoadingSpinner
