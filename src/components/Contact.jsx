import React, { useState, useEffect, useRef } from 'react';

function Contact() {
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
    <section className="page subpage contact" id="contact" ref={ref}>
      <div id="messageForm">
        <h2 className="contact-header">Send us a message</h2>
        <div>
          <input type="text" name="" id="contact" placeholder="Name" />
          <br />
          <input type="email" name="" id="contact" placeholder="Email" />
          <br />
          <textarea name="" id="form-text" rows="10"></textarea>
          <br />
          <input type="submit" value="Submit" />
        </div>
      </div>
      <div id="subscribe">
        <h2 className="contact-header">Subscribe</h2>
        <h3 className="contact-subheader">Sign up to hear about current promotions and available used pool tables!</h3>
        <div id="signup">
          <input type="email" name="" id="newsletter" /> <input type="submit" value="Sign Up" />
        </div>
      </div>
      <div id="call">
        <h2 className="contact-header">Give us a call</h2>
        <div>
          <p>
            <span className="call-name">Sunny</span> <span className="call-number">(###) ###-####</span>
          </p>
          <p>
            <span className="call-name">Dylan</span> <span className="call-number">(###) ###-####</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
