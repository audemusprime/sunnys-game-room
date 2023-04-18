import React, { useState, useEffect, useRef } from 'react';
import reviews from '../data/reviews';
import '../css/style.css';

function Testimonials() {
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
  }, [isIntersecting]);
  return (
    <section className="page subpage" id="what-people-said" ref={ref}>
      <h2 className="subpage-header">What people said</h2>
    </section>
  );
}

export default Testimonials;
