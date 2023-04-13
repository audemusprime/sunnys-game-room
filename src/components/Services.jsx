import React, { useState, useEffect, useRef } from 'react';
import { serviceGroupOne, serviceGroupTwo, serviceGroupThree } from '../data/services';
import ServiceComponent from './ServiceComponent';
import Arrow from './Arrow';
import '../css/style.css';

function Services() {
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
    <section className="page subpage services" id="what-we-do" ref={ref}>
      <div>
        <h2 className="subpage-header">What we do</h2>
      </div>
      <section className="services-row">
        <div className="serviceBox">
          {serviceGroupOne.map((service) => (
            <ServiceComponent group={service.group} name={service.name} cost={service.cost} />
          ))}
        </div>
        <div className="serviceBox">
          {serviceGroupTwo.map((service) => (
            <ServiceComponent group={service.group} name={service.name} cost={service.cost} />
          ))}
        </div>
        <div className="serviceBox">
          {serviceGroupThree.map((service) => (
            <ServiceComponent group={service.group} name={service.name} cost={service.cost} />
          ))}
        </div>
      </section>
      <div id="service-action">
        <h3 id="subheader">We also buy and sell used pool tables!</h3>
        <button>Let's Do This!</button>
      </div>
    </section>
  );
}

export default Services;
