import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ColumnFlex, ButtonContainer } from './Styles.jsx';
import CommonButton from './CommonButton.jsx';
import styled from 'styled-components';
import DocumentPNG from '../assets/DocumentPNG.png';
import LoadingSpinner from './LoadingSpinner.jsx';

const Downloads = ({ getFromStorage, returnHome }) => {
  const { id } = useParams();
  const [metadata, setMetadata] = useState(null);

  const isImage = (file) => {
    return file && file.type.split('/')[0] === 'image';
  }

  useEffect(() => {
    (async () => {
      let result = await getFromStorage(id);
      setMetadata(result);
    })();
  }, [id]);

  const download = async () => {
    if(metadata) {
      let result = await axios.get(metadata.url, {
        responseType: 'blob'
      });
      const tempUrl = URL.createObjectURL(result.data);
      const link = document.createElement('a');
      link.href = tempUrl;
      //SET NAME FOR DOWNLOAD
      link.setAttribute('download', metadata.name);
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(tempUrl);
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
        <CommonButton type="button" onClick={download} text="Download"></CommonButton>
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
