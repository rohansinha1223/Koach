import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="koach__possibility section__padding" id="possibility">
    <div className="koach__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="koach__possibility-content">
     
      <h1 className="gradient__text">We think the solution to all of the world's significant issues<br/>lies in the thoughtful use of expertise. </h1>
      <p>Thanks to the technological breakthroughs, cultural shifts, and the significant effects of the COVID-19
       epidemic, the world is heading towards new talent models. To develop their internal competencies and
manage a hybrid workforce of in-house and on-demand employees, smart firms are already collaborating
with reputable on-demand talent platforms.</p>
      <h4>It's time for us to change with the rest of the world!</h4>
    </div>
  </div>
);

export default Possibility;
