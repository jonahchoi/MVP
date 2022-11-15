const storage = require('../db/firebase');
const { ref, uploadBytesResumable, getDownloadURL } = require('firebase/storage');

module.exports = {
  addFile: async (file) => {
    const storageRef = ref(storage, `/files/${file.originalname}`);
    const uploadTask = uploadBytesResumable(storageRef, file.buffer);
    let url;
    uploadTask.on('state_changed',
      null,
      (err) => console.log(err),
      async () => {
        url = await getDownloadURL(uploadTask.snapshot.ref);
        return url;
      }
    );
    return url;
  }
}