import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Confidence. Potential. Support.',
    text: 'We all need support and guidance. Koach will help you build your confidence effectively andsustainably and help you unlock your full potential so you can reach any goal.',
  },
  {
    title: 'On-Demand Expertise for Tomorrow',
    text: 'We understand that the trend towards engaging with on-demand experts instead of full-time employees is shaping the future of work, and we are here to help companies stay ahead of this revolution.',
  },
  {
    title: 'Message or am nothing',
    text: 'At KOACH, we offer a premium platform that connects organizations with highly qualified independent  management consultants and industry experts. With our help, businesses can access the expertise they need to achieve their goals.',
  },
];

const Features = () => (
  <div className="koach__features section__padding" id="features">
    <div className="koach__features-heading">
      <h1 className="gradient__text">Unleash Your Potential: Embrace the Journey of Constant Growth and Improvement Every Day!</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="koach__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
