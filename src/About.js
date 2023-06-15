import React from 'react';

import { Footer,  Possibility, Infers} from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const About = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      
    </div>



    <Possibility />
    <Infers/>
    <CTA />
   
    <Footer />
  </div>
);

export default About;
