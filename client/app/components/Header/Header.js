import React from 'react';

import { Link } from 'react-router-dom';

const winter = '../assets/img/footerStone.png';
const Header = () => (
  <header >
  <div style={{ width: '100%' ,backgroundImage: "url(" + winter + ")"}}>
    <h1 className="headerh1" > Mat i balans </h1>
    <br />
     
    <Link to="/">Hem</Link>
    <br />  
    </div>
  </header>
);

export default Header;


  {/*  <nav>
      <Link to="LogOut/LogOut">Logga Ut</Link>
    </nav> */}