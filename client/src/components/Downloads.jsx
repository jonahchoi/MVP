import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ColumnFlex } from './Styles.jsx';

const Downloads = ({ getFromStorage }) => {
  const { id } = useParams();
  const [metadata, setMetadata] = useState(null);

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
      <img src={metadata?.url} width='35%' height="auto" />
      <div>
        {metadata?.name}
      </div>
      <button type="button" onClick={download}>Download</button>
    </ColumnFlex>
  )
}

export default Downloads;
