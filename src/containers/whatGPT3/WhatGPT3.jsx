import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="koach__whatkoach section__margin" id="wkoach">
    <div className="koach__whatkoach-feature">
      <Feature title="What is Koach?" text="KOACH is a Talent as a Service platform that connects businesses with subject matter experts, offering coaching, mentoring, and expert support. Their unique approach combines coaching and mentorship to help individuals achieve meaningful goals and improve performance. With a network of domain experts, freelance consultants, and professionals providing specialist support, KOACH delivers world-class advice for organizational success." />
    </div>
    <div className="koach__whatkoach-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="koach__whatkoach-container">
      <Feature title="World-class coaching & mentorship" text="Drive performance through 1-on-1 and group coaching with functional experts who work at the world’s top companies." />
      <Feature title="Tools to unlock growth" text="Supporting and promoting each person's unique goals and challenges through technology and software. " />
      <Feature title="Community of top performers" text="Bi-weekly community events and workshops with functional experts and coaches promote growth in collaborative settings. " />
    </div>
  </div>
);

export default WhatGPT3;
