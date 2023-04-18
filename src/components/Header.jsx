import React, { useState } from 'react';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <span className="header-title">
            <a href="#">Sunny's Gameroom</a>
          </span>
          <ul>
            <li>
              <a href="#who-we-are" className="nav-link">
                Who we are
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="nav-link">
                What we do
              </a>
            </li>
            <li>
              <a href="#what-people-said" className="nav-link">
                What people said
              </a>
            </li>
            <li>
              <a href="#contact">
                <button>Get in touch</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
