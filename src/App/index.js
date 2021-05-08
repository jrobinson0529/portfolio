import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { createUser } from '../helpers/data/userData';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfo = {
          fullName: authed.displayName,
          username: authed.email.split('@')[0],
          uid: authed.uid,
          admin: false,
        };
        createUser(userInfo);
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div className='App'>
     <Router>
        <NavBar user={user}/>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
