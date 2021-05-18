import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';
import { createUser, getSingleUser, getUsers } from '../helpers/data/userData';
import Footer from '../components/Footer';

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
        getUsers().then((response) => {
          const userExists = response.filter((object) => object.uid === userInfo.uid);
          if (userExists.length === 0) {
            createUser(userInfo);
          } else {
            getSingleUser(userExists[0].id).then(setUser);
          }
        });
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  return (
    <div className='App'>
     <Router>
        <NavBar user={user}/>
        <Routes user={user}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
