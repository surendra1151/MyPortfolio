import React from 'react';
//import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
          <div className='container-fluid'>
            <Link
              smooth={true}
              className='navbar-brand'
              smooth={true}
              duration={100}
              to='home'
            >
              <p className='logo'>{'{SK}'}</p>
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
              color='white'
            >
              <span className='navbar-toggler-icon'></span>
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
                  Professional
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
                    window.open('https://www.facebook.com/kalluri.surendra.9/')
                  }
                  target='_blank'
                  rel='nofollow noopener noreferrer'
                  className='fa fa-facebook'
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
