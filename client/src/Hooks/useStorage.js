import { storage, db } from '../Firebase/index.js';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, doc, getDoc, query, where, getDocs, orderBy } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react';
import ShortUniqueId from 'short-unique-id';
import { serverTimestamp } from 'firebase/firestore';

const StorageContext = React.createContext();

export const useStorage = () => {
  return useContext(StorageContext);
}

export const StorageProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [firestoreId, setFirestoreId] = useState(null);
  const [err, setErr] = useState(null);
  const [idCode, setIdCode] = useState(null);
  const uniqid = new ShortUniqueId();

  const filesRef = collection(db, 'files');

  const uploadToStorage = (file, uid) => {
    let location = 'files';
    if(uid) {
      location = uid;
    }
    const storageRef = ref(storage, `/${location}/${file.name}`);
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

          let code = uniqid();
          let doc = {
            code,
            url: link,
            name: file.name,
            type: file.type,
            createdAt: serverTimestamp()
          };

          if(uid) {
            let userRef = collection(db, uid);
            await addDoc(userRef, doc);
          } else {
            let docRef = await addDoc(filesRef, doc);
            setFirestoreId(docRef.id);
            setIdCode(code);
          }
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
    let q = query(filesRef, where('code', '==', code));

    let snapshot = await getDocs(q);

    if(snapshot.empty) {
      throw new Error('Invalid code');
    }
    return snapshot.docs[0].id;
  }

  const queryUserDocs = async (uid) => {
    let snapshot = await getDocs(query(collection(db, uid), orderBy('createdAt', 'desc')));
    if(snapshot.empty) {
      return [];
    }
    return snapshot.docs;
  }

  const value = {
    progress,
    firestoreId,
    idCode,
    err,
    uploadToStorage,
    getFromStorage,
    queryFromStorage,
    queryUserDocs
  };

  return (
    <StorageContext.Provider value={value}>
      {children}
    </StorageContext.Provider>
  )
};