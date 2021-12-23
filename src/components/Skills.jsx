import React from 'react';
import { Link } from 'react-scroll';
const Skills = () => {
  return (
    <div id='skills' className='container py-5'>
      <div className='row'>
        <div className='col-md-3'>
          <nav className='resume_link' id='navi'>
            <ul>
              <li>
                <Link smooth={true} offset={-100} duration={200} to='education'>
                  Education
                </Link>
              </li>
              <li>
                <Link
                  smooth={true}
                  offset={-100}
                  duration={200}
                  spy={true}
                  to='experience'
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link smooth={true} offset={-100} duration={200} to='skill-set'>
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='col-md-9'>
          <div id='education' className='page one'>
            <h2 className='heading'>Education</h2>
            <div className='resume-wrap d-flex'>
              <div className='icon d-flex align-items-center justify-content-center'>
                <i className='fas fa-graduation-cap'></i>
              </div>
              <div className='text ml-5'>
                <h2>Arkansas State University</h2>
                <span className='position'>Master's in Computer Science</span>
                <p>Jonesboro - Arkansas</p>
                <p>GPA: 3.4/4</p>
                <span className='date'>2020-2021</span>
              </div>
            </div>
            <div className='resume-wrap d-flex'>
              <div className='icon d-flex align-items-center justify-content-center'>
                <i className='fas fa-graduation-cap'></i>
              </div>
              <div className='text pl-3'>
                <h2>R.V.R & J C College Of Engineering</h2>
                <span className='position'>
                  Bachelors in Electrical and Electronics Engineering
                </span>
                <p>Andhra Pradesh - India</p>
                <p>GPA: 8.58/10</p>
                <span className='date'>2014-2018</span>
              </div>
            </div>
          </div>
          <div id='experience' className='page two'>
            <h2 className='heading'>Experience</h2>
            <div className='resume-wrap d-flex'>
              <div className='icon d-flex align-items-center justify-content-center'>
                <i className='fas fa-briefcase'></i>
              </div>
              <div className='text pl-3 experience'>
                <h2>Graduate Assistant</h2>
                <span className='position'>Arkansas State University</span>
                <p className='date'>Sep 2020 - Jul 2021</p>
                <ul>
                  <li>
                    Responsible for building a plant sale e-commerce website
                  </li>
                  <li>Developed Application user Interface by using ReactJs</li>
                  <li>
                    As part of back-end technologies for the application used
                    Node JS, Express JS, MongoDB, and Mongoose, the complete
                    MERN Stack to provide RESTful API
                  </li>
                  <li>
                    Developed functionalities like Pagination, Page Filtering,
                    Search Function
                  </li>
                  <li>
                    Able to perform CRUD operations using queries for MongoDB
                  </li>
                </ul>
              </div>
            </div>
            <div className='resume-wrap d-flex'>
              <div className='icon d-flex align-items-center justify-content-center'>
                <i className='fas fa-briefcase'></i>
              </div>
              <div className='text pl-3 experience'>
                <h2>Front End Developer</h2>
                <span className='position'>
                  Agrometrics Analytics and Technology
                </span>
                <p className='date'>Jun 2019 - Nov 2019</p>
                <ul>
                  <li>
                    Responsible for Developing User Interface for mobile
                    application by integrating several modules using
                    React-Native
                  </li>
                  <li>
                    Engineered login front end functionality - including RESTful
                    service calls, credential storage, routing, token
                    verification, and error notifications for AgPivot mobile
                    application
                  </li>
                  <li>
                    Responsible for design and development of various components
                    such as tab bars, push notifications, sign in/out features,
                    and navigation using react-native
                  </li>
                  <li>
                    Responsible for Developing Support Pages for a web
                    application like FarmPro using React.Js
                  </li>
                  <li>
                    Responsible for developing Restful Webservices using spring
                    framework
                  </li>
                </ul>
              </div>
            </div>

            <div id='skill-set' className='page-three'>
              <h2 className='heading'>Skills</h2>
              <div className='row mb-4 '>
                <img
                  className='img-fluid'
                  src='images/html.png'
                  title='HTML'
                  alt='HTML'
                />
                <img
                  className='img-fluid'
                  src='images/css.png'
                  title='CSS'
                  alt='CSS'
                />
                <img
                  className='img-fluid'
                  src='images/javascript.png'
                  title='JavaScript'
                  alt='JavaScript'
                />
                <img
                  className='img-fluid'
                  src='images/react.png'
                  title='React'
                  alt='React'
                />
                <img
                  className='img-fluid'
                  src='https://i.ibb.co/7NfB2rt/rn2.png'
                  title='React-Native'
                  id='react-native'
                  alt='React-Native'
                />
                <img
                  className='img-fluid'
                  src='images/node.png'
                  title='NodeJS'
                  alt='NodeJs'
                />
                <img
                  className='img-fluid'
                  src='images/bootstrap.png'
                  title='Bootstrap'
                  alt='BootStrap'
                />
                <img
                  className='img-fluid'
                  src='https://img.icons8.com/color/144/000000/redux.png'
                  title='Redux'
                  alt='Redux'
                />
                <img
                  className='img-fluid'
                  src='https://img.icons8.com/ios-filled/144/000000/jquery.png'
                  title='Jquery'
                  id='jquery'
                  alt='Jquery'
                />
                <img
                  className='img-fluid'
                  src='https://i.ibb.co/zs6B3yR/sass.png'
                  title='SASS'
                  id='sass'
                  alt='SASS'
                />
                <img
                  className='img-fluid'
                  src='https://material-ui.com/static/logo_raw.svg'
                  title='Material UI'
                  id='materialui'
                  alt='MaterialUI'
                />
                <img
                  className='img-fluid'
                  src='https://img.icons8.com/color/144/000000/npm.png'
                  title='NPM'
                  id='npm'
                  alt='NPM'
                />
                <img
                  className='img-fluid'
                  src='https://i.ibb.co/9smDM6j/pngegg.png'
                  title='Express JS'
                  id='expressjs'
                  alt='ExpressJs'
                />
                <img
                  className='img-fluid'
                  src='https://i.ibb.co/ZVh01dm/rsz-mong2.png'
                  title='MongoDB'
                  id='mongo'
                  alt='MongoDB'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
