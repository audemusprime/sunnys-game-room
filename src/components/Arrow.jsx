import React from 'react';

function Arrow({ link, children }) {
  return (
    <>
      <a href={link}>
        <h3 id="arrow-header">{children}</h3>
        <svg fill="#439989" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M12 2.25a.75.75 0 01.75.75v16.19l6.22-6.22a.75.75 0 111.06 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06l6.22 6.22V3a.75.75 0 01.75-.75z"
          />
        </svg>
      </a>
    </>
  );
}

export default Arrow;
