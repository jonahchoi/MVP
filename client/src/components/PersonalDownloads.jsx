import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../Hooks/useAuth';
import { useStorage } from '../Hooks/useStorage';
import { motion } from 'framer-motion';
import DocumentPNG from '../assets/DocumentPNG.png';
import { download, isImage } from '../Tools/imageTools';
import CommonButton from './CommonStyles/CommonButton.jsx';

const PersonalDownloads = ({ navigate }) => {
  const [docs, setDocs] = useState([]);
  const { currentUser } = useAuth();
  const { queryUserDocs } = useStorage();

  useEffect(() => {
    (async() => {
      let results = await queryUserDocs(currentUser.uid);
      // setDocs([results[0].data(), results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),results[0].data(),])
      setDocs(results.map((doc)=>doc.data()));
    })();
  }, []);

  const DocVar = {
    'hover': {},
    'rest': {}
  }
  const TooltipVar = {
    'hover': {opacity: 1},
    'rest': {opacity: 0}
  }
  const navToShare = () => {
    navigate(``)
  }

  return (
    <DocDisplay>
      {console.log(docs)}
      {docs.map((doc) =>
      <Doc key={doc.code}
      tabIndex={0}
      initial='rest'
      whileFocus='hover'>
        <ImgContainer>
          <Img src={isImage(doc) ? doc.url : DocumentPNG} />
        </ImgContainer>
        <p>{doc.name}</p>
        <TooltipArrow animate={{rotate: 45}} variants={TooltipVar}/>
        <Tooltip variants={TooltipVar}>
          Sent On: {doc.createdAt.slice(0, 10)}
          {/* <CommonButton type="button" onClick={navToShare}>Share</CommonButton> */}
          <SmallerDownloadButton type="button" onClick={()=>download(doc)}>Download</SmallerDownloadButton>
        </Tooltip>
      </Doc>)
      }
    </DocDisplay>
  )
}
const DocDisplay = styled.div`
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
`
const Tooltip = styled(motion.div)`
  position: absolute;
  background-color: #fff;
  color: #000;
  padding: 5px;
  border-radius: 5px;
  top: 220px;
`
const SmallerDownloadButton = styled(CommonButton)`
  width: 150px;
`


export default PersonalDownloads
