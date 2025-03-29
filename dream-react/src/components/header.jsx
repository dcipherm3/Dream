import React from 'react';
import '../assets/styles/App.css';

function Header({clickRegister}){
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center">
            <div className="header-title">
                <h1>Dream</h1>
            </div>
            <div className="header-items">
                <ul className='list-none flex'>
                    <li>Our Socials</li>
                    <li>Support</li>
                    <li>More</li>
                    <li><a id='regButton' className='cursor-pointer' onClick={clickRegister}>Join</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;