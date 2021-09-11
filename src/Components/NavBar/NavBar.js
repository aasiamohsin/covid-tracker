import React from 'react';
import covid19_logo from './covid19_logo.png';

export const NavBar = () => {
  return (
    <nav>
      <div className='nav-wrapper grey darken-4'>
        <a
          href='!#'
          className='brand-logo center yellow-text
            text-lighten-5'
        >
          <img
            style={{ height: '50px', marginTop: '5px' }}
            src={covid19_logo}
            alt=''
          />
          {' Tracker'}
        </a>
      </div>
    </nav>
  );
};
