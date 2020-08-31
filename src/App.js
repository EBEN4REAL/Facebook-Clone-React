import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Sidebar from './SideBar/SideBar.js';
import Feed from './Feed/Feed.js';
import Widgets from './Widgets/Widget';
import Login from './Login/Login'
import {useStateValue} from './StateProvider'
import {useEffect} from 'react'
import {auth} from './firebase';
import {actionTypes} from './reducer';

function App() {
  const [{user}, dispatch] = useStateValue()
  useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch({
            type: actionTypes.SET_USER,
            user: user
          })
        }
      })
    }, [])
  
  return (
    <div className="app">
      {!user ? (
       <Login />
      ) :
      (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )
    }
      
    </div>
  );
}

export default App;

