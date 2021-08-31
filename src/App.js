import './App.css';
import Navbar from './components/Navbar';
import { React, Fragment } from 'react';
import Header from './components/Header';
import Particles from 'react-particles-js';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
    <Particles
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 1000,
            },
          },
          shape: {
            type: 'star',
            stroke: {
              width: 5,
              color: '#ffac00',
            },
          },
        },
      }}
    />
    <Navbar />
    <Header />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </Fragment>
);

export default App;
