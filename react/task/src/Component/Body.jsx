import React from 'react'

import logo from '../Assests/image 27.png'
import Slider from './Slider'
import './body.css'
function Body() {
  return (
    <div>
        <img src={logo} alt='logo' className='logo'style={{height:'50px' ,width:'300px'}}/>
        <div className='Container'>
          <div className='Slider'>
            <Slider/>
          </div>
        </div> 
    </div>
  )
}
export default Body
