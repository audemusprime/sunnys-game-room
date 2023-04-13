import React, { useState, useRef, useEffect } from 'react';
import '../css/style.css';
import Arrow from './Arrow';

function About() {
  const options = {
    rootMargin: '0px',
    threshold: 0.15
  };

  // prettier-ignore
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.classList.add('fadeIn');
    }
    // else {
    //   ref.current.classList.add('fadeDown');
    // }
  }, [isIntersecting]);

  return (
    <>
      <section className="page subpage about" id="who-we-are" ref={ref}>
        <div id="about-header">
          <h2 className="subpage-header">Who we are</h2>
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
          <div id="arrow">
            <Arrow link="#what-we-do">What We Do</Arrow>
          </div>
        </div>
        <div id="dylan">
          <img src="https://picsum.photos/250" alt="" />
        </div>
      </section>
    </>
  );
}

export default About;
