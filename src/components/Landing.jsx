import React from 'react';
import Arrow from './Arrow';

function Landing() {
  return (
    <section id="landing">
      <div id="hero-image"></div>
      <div id="hero-text">
        <h1 id="hero-title">Sunny's Gameroom</h1>
        <h2 id="subheader">Pool table moving, recovery, and repair</h2>
        <h3>Serving the Washington DC metro area</h3>
        <div id="arrow">
          <Arrow link="#who-we-are">Who We Are</Arrow>
        </div>
      </div>
    </section>
  );
}

export default Landing;
