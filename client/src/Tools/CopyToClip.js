export const copyToClip = async (data) => {
  try{
    await navigator.clipboard.writeText(data);
  } catch(err) {
    console.log(err);
  }
}

export const copyImgToClip = async (imgData) => {
  let res = await fetch(imgData);
  res = await res.blob();

  try{
    await navigator.clipboard.write([
      new ClipboardItem({
        'image/png': res
      })
    ]);
  } catch(err) {
    console.log(err);
  }
}