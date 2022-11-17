import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { ColumnFlex } from './Styles.jsx';
import AnimatedButton from './AnimatedButton.jsx';

/*
  TODO:
  Animate loading screen dots
*/
const SelectScreen = ({ firstLoad }) => {
  const rightControls = useAnimation();
  const leftControls = useAnimation();
  const innerRightControls = useAnimation();

  const animate = async () => {
    leftControls.start({
      opacity: [0, 1],
      transition: {
        duration: 0,
        delay: 1.5
      }
    })
    innerRightControls.start({
      opacity: 0,
      transition: {duration: 0}
    })
    await rightControls.start({
      left: ['-150%', '-100%', '-50%', '0%', '0%'],
      scaleX: [2, 2, 2, 2, 1],
      transition: {
        // left: {duration: 3},
        // scaleX: {duration: 4},
        duration: 2,
        delay: 0.5,
        times: [0, 0.25, 0.5, 0.8, 1],
        ease: 'linear'
      }
    })
    await innerRightControls.start({
      opacity: 1,
      transition: {
        duration: 1.5
      }
    })

    // rightControls.start({
    //   scaleX: 1,
    //   transition: {duration: 0}
    // })
  }

  useEffect(() => {
    firstLoad && animate();
  }, []);

  return (
    <HalfScreens>
      { firstLoad &&
      <LoadingScreen>
        <i className="fa-solid fa-desktop"></i>...<i className="fa-solid fa-mobile-screen-button"></i>
      </LoadingScreen> }
      <LeftSide
      animate={leftControls}>
        <h2>Sending files is as easy as 1, 2, 3</h2>
        <p>lorem ipsum doloris</p>
      </LeftSide>
      <RightSide
      animate={rightControls}>
        <VerticalContainer
        as={motion.div}
        animate={innerRightControls}>
          <AnimatedButton direction={'upload'} />
          <VerticalBar />
          <AnimatedButton direction={'download'}/>
          {/* <ButtonAnimate>
            <HalfButton to="/upload">Upload</HalfButton>
          </ButtonAnimate>
          <ButtonDiv>
            <HalfButton HalfButton to="/download">Download</HalfButton>
          </ButtonDiv> */}
        </VerticalContainer>
      </RightSide>
    </HalfScreens>
  )
}

const HalfScreens = styled(ColumnFlex)`
  flex-direction: row;
  background-color: #9EE37D;
  color: black;
`
const RightSide = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #042A2B;
  color: white;
  position: relative;
`
const VerticalContainer = styled(ColumnFlex)`

`
const LoadingScreen = styled.div`
  position: absolute;
  font-size: 10rem;
  color: black;
  top: calc(50% - 3.5rem);
  left: 35vw;

`
const LeftSide = styled(motion.div)`
  width: 100%;
  font-size: 1.5rem;
  text-align: center;
`
const VerticalBar = styled.div`
  background-color: white;
  height:5px;
  width: 100%;
`



/* background: $bcolor;

 border: $bor;
 color: $col;
@include button(#000,
  "",
  2300%,
  100%,
  none,
  #fff);
  cursor: pointer;
 */

export default SelectScreen;
