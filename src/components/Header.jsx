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
              <a href="#">Who we are</a>
            </li>
            <li>
              <a href="#">What we do</a>
            </li>
            <li>
              <a href="#">What people said</a>
            </li>
            <li>
              <a href="#">Get in touch</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
