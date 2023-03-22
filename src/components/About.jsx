import React from 'react';

function About() {
  return (
    <section className="page subpage about">
      <div id="about-header">
        <h2 className="subpage-header" id="who-we-are">
          Who we are
        </h2>
      </div>
      <div id="sunny">
        <img src="https://picsum.photos/250" alt="" />
      </div>
      <div id="desc-a">
        Words about Sunny. Words about Sunny. Words about Sunny. Words about Sunny. Words about Sunny. Words about
        Sunny. Words about Sunny. Words about Sunny.
      </div>
      <div id="desc-b">
        Words about Dylan. Words about Dylan. Words about Dylan. Words about Dylan. Words about Dylan. Words about
        Dylan. Words about Dylan. Words about Dylan.
      </div>
      <div id="dylan">
        <img src="https://picsum.photos/250" alt="" />
      </div>
    </section>
  );
}

export default About;
