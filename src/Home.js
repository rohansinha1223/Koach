import React from 'react';

import { Footer,Features, WhatGPT3, Header } from './containers';
import {  Navbar } from './components';

import './App.css';

const Home = () => (
<div className="home">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Footer />
  </div>
);

export default Home;
