import React, { useState, useEffect, useRef } from 'react';
import reviews from '../data/reviews';
import tables from '../data/tables';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import '../css/style.css';
import Arrow from './Arrow';

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

  const tableImages = tables.map((table) => (
    <div key={table.alt}>
      <img src={table.image} alt={table.alt} />
    </div>
  ));

  const reviewData = reviews.map((review) => (
    <div key={review.name}>
      <p id="review-text">{review.review}</p>
      <br />
      <span id="review-name">{review.name}</span> &nbsp; &nbsp;-&nbsp;&nbsp; {review.rating}
      <br />
    </div>
  ));

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    color: 'var(--body-background)',
    opacity: 0.5,
    filter: 'none'
  };

  return (
    <section className="subpage testimonials" id="what-people-said" ref={ref}>
      <div id="testimonial-header">
        <h2 className="subpage-header testimonials-header">What people said</h2>
      </div>
      <div className="review-carousel">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={9000}
          showStatus={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, left: 100 }}>
                ◀︎
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, right: 100 }}>
                ▶︎
              </button>
            )
          }>
          {reviewData}
        </Carousel>
      </div>
      <div className="image-carousel">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={7000}
          // showArrows={false}
          showThumbs={false}
          showStatus={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, left: 100 }}>
                ◀︎
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext) =>
            hasNext && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, right: 100 }}>
                ▶︎
              </button>
            )
          }>
          {tableImages}
        </Carousel>
      </div>
      <div id="arrow">
        <Arrow link="#contact">Get in touch</Arrow>
      </div>
    </section>
  );
}

export default Testimonials;
