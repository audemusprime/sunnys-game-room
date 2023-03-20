import React, { useState } from 'react';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <span className="header-title">
            <a href="#">Sunny's Game Room</a>
          </span>
          <a href="#">Who we are</a>
          <a href="#">What we do</a>
          <a href="#">What people said</a>
          <a href="#">Get in touch</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
