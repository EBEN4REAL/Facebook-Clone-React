import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Sidebar from './SideBar/SideBar.js';
import Feed from './Feed/Feed.js';
import Widgets from './Widgets/Widget';
import Login from './Login/Login'
import {useStateValue} from './StateProvider'

function App() {
  // const user = "kl";
  const [{user}, dispatch] = useStateValue({name:"Eben"})
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
