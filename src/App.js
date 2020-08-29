import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Sidebar from './SideBar/SideBar.js';
import Feed from './Feed/Feed.js';


function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
