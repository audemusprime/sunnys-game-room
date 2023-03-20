import React, { useState } from 'react';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <span className="header-title">
            <a href="#">Sunny's Game Room</a>
          </span>
          <ul>
            <li>
              <a href="#who-we-are">Who we are</a>
            </li>
            <li>
              <a href="#what-we-do">What we do</a>
            </li>
            <li>
              <a href="#what-people-said">What people said</a>
            </li>
            <li>
              <a href="#contact">Get in touch</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
