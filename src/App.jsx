import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import Arrow from './components/Arrow';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* 
Page Section components:
- Header
- Page arrow
- Landing
- About
- Services
- Testimonials
- Contact
- Footer

Subsection components AND/OR requirements:
LANDING
  - Hero image
ABOUT
  - Owner description
    - Photo
    - Description
SERVICES
  - Fee list x3
  - Jump to contact button
TESTIMONIALS
  - Image carousel
  - Testimonial carousel OR section??
CONTACT
  - Contact form
  - Newsletter subscription
  - Phone numbers
*/

function App() {
  return (
    <>
      <div className="min-h-screen min-w-full">
        <Header />
        <Landing />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
