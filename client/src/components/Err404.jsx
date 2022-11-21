import React from 'react'
import styled from 'styled-components'

const Err404 = () => {
  return (
    <GiantLetters>
      404
    </GiantLetters>
  )
}
const GiantLetters = styled.div`
  font-size: 15rem;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default Err404
