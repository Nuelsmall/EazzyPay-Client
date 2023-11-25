import './Header.css'

import React from 'react'

export const Header = () => {
  return (
    <div className='navBar'>
        <div className='logo'>EazzyPay</div>

        <div className='homeNav'>
            <a className='homeNav' href="http://#">Home</a>
            <a className='homeNav' href="http://#">About</a>
            <a className='homeNav' href="http://#">Blog</a>

        </div>
        <div className='navBtn'>
            <button className='navBtn_signup' >Sign Up</button>
            <button className='navBtn_login' >Login</button>

        </div>
    </div>
  )
};
