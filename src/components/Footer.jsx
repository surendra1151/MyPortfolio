import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6'>
            <div className='d-flex'>
              <p>surendra.kalluri1997@gmail.com</p>
            </div>
            <div className='d-flex'>
              <a href='tel:512-998-4240'>+1 (512)-998-4240</a>
            </div>
          </div>
          <div className='col-lg-3 col-md-2 col-sm-6'>
            <div className='row'>
              <div className='col'>
                <Link
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to='home'
                  className='footer-nav'
                >
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to='about'
                  className='footer-nav'
                >
                  About
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to='education'
                  className='footer-nav'
                >
                  Education
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to='experience'
                  className='footer-nav'
                >
                  Experience
                </Link>
              </div>
              <div className='col'>
                <Link
                  smooth={true}
                  offset={-100}
                  duration={100}
                  to='skill-set'
                  className='footer-nav'
                >
                  Skills
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to='portfolio'
                  className='footer-nav'
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  offset={-50}
                  duration={100}
                  to='contact'
                  className='footer-nav'
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className='col rights-reserved'>
            <p className='copyrights'>
              Designed & Developer By Surendra Kalluri
            </p>
            <p className='pt-3'>
              {' '}
              Copyright &copy;{new Date().getFullYear()}&nbsp;New Horizon | All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
