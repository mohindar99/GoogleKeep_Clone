import React from 'react';
import logo from './asserts/keep-512.png'
import './Header.css'

const Header = () => { 
    return <>
        <div className='header'>
            <img src={logo} alt="logo" width='80' height='80'/>
            <h1 >Google Keep</h1>
       </div>
    </>;
}

export default Header;