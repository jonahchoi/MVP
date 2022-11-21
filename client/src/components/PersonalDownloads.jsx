import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../Hooks/useAuth';
import { useStorage } from '../Hooks/useStorage';
import { motion } from 'framer-motion';
import DocumentPNG from '../assets/DocumentPNG.png';
import { download, isImage } from '../Tools/imageTools';
import CommonButton from './CommonStyles/CommonButton.jsx';
import LoadingSpinner from './CommonStyles/LoadingSpinner.jsx';

const PersonalDownloads = ({ navigate }) => {
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTooltipNumber, setShowToolTipNumber] = useState(null);
  const { currentUser } = useAuth();
  const { queryUserDocs } = useStorage();

  useEffect(() => {
    (async() => {
      let results = await queryUserDocs(currentUser.uid);
      setDocs(results.map((doc)=>doc.data()));
      setIsLoading(false);
    })();
  }, []);

  const DisplayVar = {
    'initial': {},
    'load': {
      transition: {
        staggerChildren: 0.3,
      }
    }
  }
  const DocVar = {
    'initial': {
      opacity: 0,
      y: 100
    },
    'load': {
      opacity: 1,
      y: 0
    }
  }
  const ShowTooltip = (idx) => {
    setShowToolTipNumber(idx);
  }

  return (
    <>
      {isLoading
      ? <LoadingSpinner />
      :<DocDisplay
      onClick={()=>ShowTooltip(null)}
      variants={DisplayVar}
      initial='initial'
      animate='load'
      >
        {docs.map((doc, i) =>
        <Doc
        key={doc.code}
        tabIndex={0}
        onClick={(e)=>{ e.stopPropagation(); ShowTooltip(i)}}
        variants={DocVar}
        >
          <ImgContainer>
            <Img src={isImage(doc) ? doc.url : DocumentPNG} />
          </ImgContainer>
          <p>{doc.name}</p>
          {showTooltipNumber === i
          ? <>
              <TooltipArrow initial={false} animate={{rotate: 45}} />
              <Tooltip initial={{opacity: 0}} animate={{opacity: 1}}>
                Sent On: {doc.createdAt.slice(0, 10)}
                {/* <CommonButton type="button" onClick={navToShare}>Share</CommonButton> */}
                <SmallerDownloadButton type="button" onClick={(e)=>download(doc)}>Download</SmallerDownloadButton>
              </Tooltip>
            </>
          : null}
        </Doc>)
        }
      </DocDisplay>
      }
    </>

  )
}
const DocDisplay = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  padding: 100px 200px;
  row-gap: 25px;
`
const Doc = styled(motion.div)`
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #CBBEB3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const ImgContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  border-radius: 5px 5px 0 0;
`
const Img = styled.img`
  width: auto;
  height: 100%;
`
const TooltipArrow = styled(motion.div)`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 208px;
  background: linear-gradient(-45deg, transparent 50%, #fff 50%);
  z-index: 2;
`
const Tooltip = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  color: #000;
  padding: 5px;
  border-radius: 5px;
  top: 220px;
  z-index: 2;
`
const SmallerDownloadButton = styled(CommonButton)`
  width: 150px;
`


export default PersonalDownloads
