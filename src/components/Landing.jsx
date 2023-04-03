import React from 'react';
import Arrow from './Arrow';

function Landing() {
  return (
    <section className="page" id="landing">
      <div id="hero-image"></div>
      <div id="hero-text">
        <h1 id="hero-title">Sunny's Game Room</h1>
        <h2 id="subheader">Pool table moving, recovery, and repair</h2>
        <h3>Serving the Washington DC metro area</h3>
        <a href="#who-we-are">
          <p style={{ display: 'grid', justifyItems: 'center' }}>
            <Arrow>Who We Are</Arrow>
          </p>
        </a>
      </div>
    </section>
  );
}

export default Landing;
