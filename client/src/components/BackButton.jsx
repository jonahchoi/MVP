import React from 'react';
import styled from 'styled-components';

const BackButton = ({ onClick, height, width, size }) => {
  return (
    <Button type="button" onClick={onClick} height={height} width={width} size={size}>
      Cancel
    </Button>
  )
}

const Button = styled.button`
  height: ${({height}) => height || '30px'};
  width: ${({width}) => width || '200px'};
  font-size: ${({size}) => size || '1.5rem'};
  border-radius: 5px;
  background: transparent;
  border: 2px solid #9EE37D;
  color: #9EE37D;
  cursor: pointer;
  font-family: inherit;
`

export default BackButton
