import React from 'react';
import './Home.css';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';
import bg from '../Assests/1.png';
import car from '../Assests/car.png';
import money from'../Assests/money.png';
import build from '../Assests/build.png';
import buket from '../Assests/buket.png';
import bg2 from '../Assests/2bg.png';
import Body from './Body';

function Home() {
  return (
    <>
    <div className='background'>
      <img src={bg} alt='bg image' className='img'/>
      </div>
      <div className='body'>
        <BrowserRouter><NavBar sticky="top" /></BrowserRouter>
        <div className='Bcontainer'>
          <img src={buket} alt= 'bucket'style={{ height: '70px' }}className='con'/>
         <img src={build} alt='build' style={{ height: '70px' }} className='con'/>
        <img src={money} alt= 'money'style={{ height: '70px' }}className='con'/>
        <img src={car} alt= 'car'style={{ height: '70px' }} className='con'/>
        </div>
        <div className='search'>
          <input type='text' placeholder='  Search...' className='input'></input>
        </div>
        {/* <img src={bg2} alt='bg image' className='img1'/> */}
      </div>
      
    </>
  );
}

export default Home;
