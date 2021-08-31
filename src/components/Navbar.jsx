import React from 'react';
//import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';
import Portfolio from './Portfolio';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
          <div className='container-fluid'>
            <Link smooth={true} className='navbar-brand' href='/'>
              Surendra
            </Link>
            <button
              class='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
              color='white'
            >
              <span class='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navbar-nav'>
                <Link
                  smooth={true}
                  className='nav-link active'
                  aria-current='page'
                  to='home'
                  duration={100}
                >
                  Home
                </Link>
                <Link
                  smooth={true}
                  offset={-50}
                  className='nav-link'
                  to='about'
                  duration={100}
                >
                  About
                </Link>
                <Link
                  smooth={true}
                  offset={-50}
                  className='nav-link'
                  to='skills'
                  duration={100}
                >
                  Skills
                </Link>
                <Link
                  smooth={true}
                  offset={-50}
                  className='nav-link'
                  to='portfolio'
                  duration={100}
                >
                  Portfolio
                </Link>
                <Link
                  smooth={true}
                  offset={-50}
                  className='nav-link'
                  to='contact'
                  duration={100}
                >
                  Contact
                </Link>
              </div>
              <div className='socialmedia'>
                <Link
                  onClick={() => window.open('https://github.com/surendra1151')}
                  target='_blank'
                  className='fa fa-github'
                ></Link>
                <Link
                  onClick={() =>
                    window.open(
                      'https://www.linkedin.com/in/krishna-sai-surendra-kalluri-0165b9185/'
                    )
                  }
                  target='_blank'
                  className='fa fa-linkedin'
                ></Link>
                <Link
                  onClick={() =>
                    window.open('https://twitter.com/kalluri_suri')
                  }
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  className='fa fa-twitter'
                ></Link>
                <Link
                  onClick={() =>
                    window.open('https://www.instagram.com/surendra7731/')
                  }
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  className='fa fa-instagram'
                ></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
