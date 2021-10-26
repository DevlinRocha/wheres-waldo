import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import App from './App';

const firebaseConfig = {

  apiKey: "AIzaSyA-_xHp4FOaCpr4mQkqyLxpg_YW3JhmPfQ",

  authDomain: "wheres-waldo-78b7d.firebaseapp.com",

  projectId: "wheres-waldo-78b7d",

  storageBucket: "wheres-waldo-78b7d.appspot.com",

  messagingSenderId: "91226203075",

  appId: "1:91226203075:web:01c1fbfc3ca1bf8df11376"

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);