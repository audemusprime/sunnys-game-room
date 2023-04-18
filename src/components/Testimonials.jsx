import React, { useState, useEffect, useRef } from 'react';
import reviews from '../data/reviews';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
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
    <section className="page subpage testimonials" id="what-people-said" ref={ref}>
      <div>
        <h2 className="subpage-header">What people said</h2>
      </div>
      <div className="image-carousel">testing out this area</div>
      <div className="review-carousel">
        <h2 id="contact-header">Reviews</h2>
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={6000}
          showStatus={false}
          showIndicators={false}
          renderArrowPrev={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, left: 5 }}>
                ◀︎
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev) =>
            hasPrev && (
              <button onClick={onClickHandler} style={{ ...arrowStyles, right: 5 }}>
                ▶︎
              </button>
            )
          }>
          {reviewData}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
