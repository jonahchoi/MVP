import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { ColumnFlex } from './CommonStyles/Styles.jsx';
import UploadForm from './UploadForm.jsx';

const PersonalUpload = ({ returnHome }) => {
  const {uid} = useParams();

  return (
    <ColumnFlex>
      <UploadForm uid={uid} returnHome={returnHome} />
    </ColumnFlex>
  )
}

export default PersonalUpload
