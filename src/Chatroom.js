import React, { useState, useRef } from "react";
import { auth } from "./App";
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from "./App";
import firebase from 'firebase/compat/app';


const Chatroom = () => {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState(""); // for maintaning the state of the input field

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="w-full flex justify-center items-center p-4 h-screen">
      <div className=" w-[600px] h-full border rounded-sm">
        <header className="flex w-full justify-between items-center p-4 sticky top-0">
          <div className=" font-semibold">SuperChat</div>
          <button
            onClick={() => auth.signOut()}
            className="px-3 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-600 transform duration-300"
          >
            Log out
          </button>
        </header>
        <hr />
        <section className="chat overscroll-auto h-4/5">
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
        </section>
        <hr />
        <section className="chat_type flex justify-between items-center p-2">
          <div className="h-full w-10/12">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              className="outline-none h-full w-full px-2 py-3 border rounded-sm"
              placeholder="Say Something Nice"
            />
          </div>
          <div className="h-full relative">
            <button 
            onClick={(e)=>sendMessage(e)}
            className=" h-full bg-blue-500 text-white px-3 py-2 rounded-sm">
              Send
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Chatroom;

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt='' />
      <p>{text}</p>
    </div>
  </>)
}
