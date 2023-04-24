import React, { useState } from 'react';
import { Hamburger, CloseNav } from './NavIcons';
import '../css/style.css';

function Header() {
  // prettier-ignore
  const [open, setOpen] = useState(false);

  return (
    <div>
      <header>
        <div className="nav-trigger" onClick={() => setOpen(!open)}>
          {open ? <CloseNav /> : <Hamburger />}
        </div>
        <nav className={open ? 'nav-active' : ''}>
          <span className="header-title">
            <a href="#" onClick={() => setOpen(false)}>
              Sunny's Gameroom
            </a>
          </span>
          <ul className={open ? 'nav-links active' : 'nav-links'}>
            <li>
              <a href="#who-we-are" className="nav-link" onClick={() => setOpen(false)}>
                Who we are
              </a>
            </li>
            <li>
              <a href="#what-we-do" className="nav-link" onClick={() => setOpen(false)}>
                What we do
              </a>
            </li>
            <li>
              <a href="#what-people-said" className="nav-link" onClick={() => setOpen(false)}>
                What people said
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setOpen(false)}>
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
