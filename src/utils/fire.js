import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDAGyBVKClK78qCVrDN7liNRcjQ7mEJFc",
  authDomain: "adinelsa-help-desk.firebaseapp.com",
  projectId: "adinelsa-help-desk",
  storageBucket: "adinelsa-help-desk.appspot.com",
  messagingSenderId: "631205383510",
  appId: "1:631205383510:web:fd0591d07f82ecdfdb1af7",
  measurementId: "G-FZRB5QKEBB",
};

const firebaseApp = initializeApp(firebaseConfig);

export const uploadFileWithFirebase = (file, setLoading) => {
  const storageRef = ref(storage, 'images/' + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  setLoading(true);

  uploadTask.on('state_changed',
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
      default: ;
    }
  },
  (error) => {
    setLoading(false);
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        console.log('User does not have permission to access the object');
        break;
      case 'storage/canceled':
        console.log('User canceled the upload');
        break;
      case 'storage/unknown':
      default:
        console.log('Unknown error occurred, inspect error.serverResponse');
        break;
    }
  },
  () => {
    setLoading(false);
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
}


export const storage = getStorage(firebaseApp);