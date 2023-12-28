import React from 'react'
import img from '../../assets/images/banner2.png'
import './Home.css';
import Buttons from '../Button/Button';
import { BsMouse } from 'react-icons/bs';
import About from '../About/About';
import Certificates from '../Certificates/Certificates';
import Navbar from '../Nav/Nav';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <Navbar/>
      <div className='banner'>
        <img className='img' src={img} alt='' />
      </div>
      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>
      <About />
      <h1>DOWNLOAD CV</h1>
      <Buttons />
      <br/>
      <h1>CERTIFICATES</h1>
      <Certificates />
    </div>
  )
}

export default Home