import React from 'react';
import Typist from 'react-typist';
import Typed from 'react-typed';
const Header = () => {
  return (
    <div id='home' className='header-wrap'>
      <div className='main_text'>
        <Typist>
          <h3 className='typist_hello'>Hello Folks! I'm</h3>
          <br />
          <h1 className='typist_name'>Krishna Sai Surendra Babu Kalluri</h1>
          <br />

          <h3 className='typist_job'>
            <Typed
              strings={[
                ' Front End Developer, Working with React, React-Native, Node and other.',
              ]}
              typeSpeed={60}
              loop
              backSpeed={40}
            />
          </h3>
          <Typist.Backspace count={0} />
        </Typist>
        <a
          className='btn-main-offer'
          onClick={() => window.open('resume/krishna-kalluri.pdf')}
          target='_blank'
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
