import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ColumnFlex, ButtonContainer } from './CommonStyles/Styles.jsx';
import CommonButton from './CommonStyles/CommonButton.jsx';
import styled from 'styled-components';
import DocumentPNG from '../assets/DocumentPNG.png';
import LoadingSpinner from './CommonStyles/LoadingSpinner.jsx';
import { isImage, download } from '../Tools/imageTools.js';

const Downloads = ({ getFromStorage, returnHome }) => {
  const { id } = useParams();
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    (async () => {
      let result = await getFromStorage(id);
      setMetadata(result);
    })();
  }, [id]);

  const handleDownload = () => {
    if(metadata){
      download(metadata);
    }
  }

  return (
    <ColumnFlex>
      {metadata === null
      ? <LoadingSpinner />
      : <Thumbnail src={isImage(metadata) ? metadata.url : DocumentPNG} />}
      <Text>
        {metadata?.name}
      </Text>
      <ButtonContainer>
        <CommonButton type="button" onClick={returnHome} text="Cancel" neg="true"></CommonButton>
        <CommonButton type="button" onClick={handleDownload} text="Download"></CommonButton>
      </ButtonContainer>
    </ColumnFlex>
  )
}
const Text = styled.p`
  font-size: 1.5rem;
`
const Thumbnail = styled.img`
  max-width: 35%;
  max-height: 25%;
`


export default Downloads;
