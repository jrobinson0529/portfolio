import React from 'react';
// import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import 'firebase/auth';
import './App.scss';
import Routes from '../helpers/Routes';
import NavBar from '../components/NavBar';

function App() {
  return (
    <div className='App'>
     <Router>
        <NavBar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;
