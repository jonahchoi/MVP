import axios from 'axios';

export const isImage = (file) => {
  return file && file.type.split('/')[0] === 'image';
}

export const download = async (file) => {
  let result = await axios.get(file.url, {
    responseType: 'blob'
  });
  const tempUrl = URL.createObjectURL(result.data);
  const link = document.createElement('a');
  link.href = tempUrl;
  //SET NAME FOR DOWNLOAD
  link.setAttribute('download', file.name);
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(tempUrl);

}