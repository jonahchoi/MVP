import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Downloads = ({ getFromStorage }) => {
  const { id } = useParams();

  useEffect(() => {
    let metadata = getFromStorage(id);
    console.log(metadata);
  }, [id]);

  const download = async () => {
    /* let result = await axios.get(url, {
      responseType: 'blob'
    });
    const tempUrl = URL.createObjectURL(result.data);
    const link = document.createElement('a');
    link.href = tempUrl;
    //SET NAME FOR DOWNLOAD
    link.setAttribute('download', 'download');
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(tempUrl); */
  }
  return (
    <div>
      <button type="button" onClick={download}>Download</button>
    </div>
  )
}

export default Downloads;
