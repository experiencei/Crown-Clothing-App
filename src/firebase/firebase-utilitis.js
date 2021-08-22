import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
 
const config = {
  apiKey: "AIzaSyCw4UIVmYkFzo_-uDEGApt2zVRQuJxeQFE",
  authDomain: "certy-fa388.firebaseapp.com",
  projectId: "certy-fa388",
  storageBucket: "certy-fa388.appspot.com",
  messagingSenderId: "265946296123",
  appId: "1:265946296123:web:5cda6f92e087286b08911e",
  measurementId: "G-SV98VC8ZGV"
};

 
firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

 