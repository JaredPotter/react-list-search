import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import NavBarItemA from './components/NavBarItemA';
import { NavLink} from 'react-router-dom';

function App(props) {
  const navItems = ['about', 'contact'];

  return (
    <div className="nav-bar">
      <input type="password"/>
    </div>
  );
}

export default App;
