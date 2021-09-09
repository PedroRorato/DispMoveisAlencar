import firebase from "firebase/app";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyApEx3geggorqqFttAvt79IIpAgF4At8v0",
  authDomain: "agendoume-5adb6.firebaseapp.com",
  projectId: "agendoume-5adb6",
  storageBucket: "agendoume-5adb6.appspot.com",
  messagingSenderId: "847652413319",
  appId: "1:847652413319:web:1c463989b13367f2097d22",
  measurementId: "G-SYQ2RRMPDH",
});

export const getDownloadURL = async (path) => {
  return firebase.storage().ref().child(path).getDownloadURL();
};
