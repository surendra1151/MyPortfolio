import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {
  const openPopupboxRestaurant = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src='images/restaurant.png'
          alt='Indian-Restaurant App'
        />
        <h5 className='text-description'>
          It is a simple indian restaurant application which contains menu based
          on timings.
        </h5>
        <b className='text-color'>Live Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://dazzling-golick-44c443.netlify.app/')
          }
        >
          https://dazzling-golick-44c443.netlify.app/
        </a>
        <br />
        <b className='text-color'>Github:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/surendra1151/Indian-Restaurant')
          }
        >
          https://github.com/surendra1151/Indian-Restaurant
        </a>
      </>
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Indian-Restaurant APP',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };
  const popupboxConfigRestaurant = {
    titleBar: {
      enable: true,
      text: 'Indian-Restaurant APP',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxNotes = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox-notes'
          src='images/Note-taker.png'
          alt='Note-Taker App'
        />
        <h5 className='text-description'>
          It is a simple Note-taker which can add items list to our local
          storage.
        </h5>
        <b className='text-color'>Live Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://clever-bassi-e230d1.netlify.app/')
          }
        >
          https://clever-bassi-e230d1.netlify.app/
        </a>
        <br />
        <b className='text-color'>Github:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/surendra1151/Note-Taker')
          }
        >
          https://github.com/surendra1151/Note-Taker
        </a>
      </>
    );

    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: 'Note-Taker APP',
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };
  const popupboxConfigNotes = {
    titleBar: {
      enable: true,
      text: 'Note-Taker APP',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  const openPopupboxTic = () => {
    const content = (
      <>
        <img
          className='portfolio-image-popupbox'
          src='images/tic-tac-toe.png'
          alt='Tic-Tac-Toe Game'
        />
        <h5 className='text-description'>
          It is a simple Tic-Tac-Toe game where two players can play.
        </h5>
        <b className='text-color'>Live Demo:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://surendra1151.github.io/tic-tac-toe/')
          }
        >
          https://surendra1151.github.io/tic-tac-toe/
        </a>
        <br />
        <b className='text-color'>Github:</b>{' '}
        <a
          className='hyper-link'
          onClick={() =>
            window.open('https://github.com/surendra1151/tic-tac-toe')
          }
        >
          https://github.com/surendra1151/tic-tac-toe
        </a>
      </>
    );

    PopupboxManager.open({
      content,
    });
  };
  const popupboxConfigTic = {
    titleBar: {
      enable: true,
      text: 'Tic-Tac-Toe Game',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id='portfolio' className='portfolio-wrapper'>
      <div className='container'>
        <h1 className='text-uppercase text-center py-5'>Portfolio</h1>
        <div className='image-box-wrapper row '>
          <div className='portfolio-image-box' onClick={openPopupboxRestaurant}>
            <img
              className='portfolio-image'
              src='images/restaurant.png'
              alt='Indian-Restaurant App'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon ' icon={faSearchPlus} />
            <h4>Indian Restaurant</h4>
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxNotes}>
            <img
              className='portfolio-image note'
              src='images/Note-taker.png'
              alt='Note-Taker App'
            />
            <div className='overflow-notes'></div>
            <FontAwesomeIcon className='portfolio-icon ' icon={faSearchPlus} />
            <h4>Note-Taker</h4>
          </div>

          <div className='portfolio-image-box' onClick={openPopupboxTic}>
            <img
              className='portfolio-image'
              src='images/tic-tac-toe.png'
              alt='Tic-Tac-Toe App'
            />
            <div className='overflow'></div>
            <FontAwesomeIcon className='portfolio-icon ' icon={faSearchPlus} />
            <h4>Tic-Tac-Toe</h4>
          </div>
        </div>
      </div>
      <PopupboxContainer />
      <PopupboxContainer />
      <PopupboxContainer {...popupboxConfigTic} />
    </div>
  );
};

export default Portfolio;
