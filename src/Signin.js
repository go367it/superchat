import React from "react";
import firebase from 'firebase/compat/app';
import { auth } from "./App";


const Signin = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  };

  return (
    <div className=" w-full flex justify-center items-center p-4">
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="px-10 py-3 bg-blue-500 rounded-md text-white hover:bg-blue-600 transform duration-300
          focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default Signin;
