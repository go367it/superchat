import './App.css';

// importing from firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// importing hooks for functions
import { useAuthState } from 'react-firebase-hooks/auth';

//importing components
import Chatroom from './Chatroom';
import Signin from './Signin';

// initializing firebase app
firebase.initializeApp({
  apiKey: "AIzaSyDUcj3Vzvrtx4QzkhBfRVIBbZA-ivOyHlI",
  authDomain: "superchat-da549.firebaseapp.com",
  projectId: "superchat-da549",
  storageBucket: "superchat-da549.appspot.com",
  messagingSenderId: "960349098249",
  appId: "1:960349098249:web:7ad50e3ac7657b35f0c3d8",
  measurementId: "G-WSB1H3TFVL"
})

// initializing firebase global variables
export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">

      {
        user ? <Chatroom /> : <Signin />
      }

    </div>
  );
}

export default App;
