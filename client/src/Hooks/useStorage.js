import { storage, db } from '../Firebase/index.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [currentId, setCurrentId] = useState(null);
  const [err, setErr] = useState(null);

  const collectionRef = collection(db, 'files');

  const uploadToStorage = (file) => {
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(percent);
      },
      (error) => setErr(error),
      async () => {
        try{
          let link = await getDownloadURL(uploadTask.snapshot.ref);

          let doc = {
            url: link,
            code: 'ABC',
            name: file.name
          };

          let docRef = await addDoc(collectionRef, doc);
          setCurrentId(docRef.id);
        } catch(err) {
          console.log(err);
        }
      }
    );
  };

  const getFromStorage = async (id) => {
    let docRef = doc(db, 'files', id);
    let docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      return docSnap.data();
    } else {
      console.log('Doc does not exist');
    }
  }

  return {progress, currentId, err, uploadToStorage, getFromStorage};
};

export default useStorage;