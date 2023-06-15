import React from 'react';
import ai from '../../assets/img.png';
import './header.css';

const Header = () => (
  <div className="koach__header section__padding" id="home">
   <div className="koach__header-content">
  <h1>
    Koach is an <br />
    <span className="gradient__text">AI powered talent</span> <br /> Service platform.
  </h1>
  <p>Smart firms are collaborating with on-demand talent platforms to manage hybrid workforces and develop internal competencies in the face of technological breakthroughs, cultural shifts, and the COVID-19 pandemic.</p>
</div>

    <div className="koach__header-image">
      
    <div className="gradient__overlay">
      <img src={ai} alt="AI" />
      </div>
      
    </div>

   

  </div>
);

export default Header;
