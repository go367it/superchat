import './App.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUcj3Vzvrtx4QzkhBfRVIBbZA-ivOyHlI",
  authDomain: "superchat-da549.firebaseapp.com",
  projectId: "superchat-da549",
  storageBucket: "superchat-da549.appspot.com",
  messagingSenderId: "960349098249",
  appId: "1:960349098249:web:7ad50e3ac7657b35f0c3d8",
  measurementId: "G-WSB1H3TFVL"
};

firebase.initializeApp({
  firebaseConfig
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">

    </div>
  );
}

export default App;
