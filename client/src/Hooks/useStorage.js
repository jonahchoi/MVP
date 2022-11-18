import { storage, db } from '../Firebase/index.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, getDoc, query, where, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import ShortUniqueId from 'short-unique-id';

const useStorage = () => {
  const [progress, setProgress] = useState(0);
  const [firestoreId, setFirestoreId] = useState(null);
  const [err, setErr] = useState(null);
  const [idCode, setIdCode] = useState(null);

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
          let uid = new ShortUniqueId();
          let code = uid();
          let doc = {
            code,
            url: link,
            name: file.name,
            type: file.type,
            createdAt: (new Date()).toISOString()
          };

          let docRef = await addDoc(collectionRef, doc);
          setFirestoreId(docRef.id);
          setIdCode(code);
        } catch(err) {
          console.log(err);
        }
      }
    );

    return uploadTask;
  };

  const getFromStorage = async (id) => {
    let docRef = doc(db, 'files', id);
    let docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      return docSnap.data();
    } else {
      throw new Error('Doc does not exist');
    }
  }

  const queryFromStorage = async (code) => {
    let q = query(collectionRef, where('code', '==', code));

    let snapshot = await getDocs(q);

    if(snapshot.empty) {
      throw new Error('Invalid code');
    }
    return snapshot.docs[0].id;
  }

  return {progress, firestoreId, idCode, err, uploadToStorage, getFromStorage, queryFromStorage};
};

export default useStorage;