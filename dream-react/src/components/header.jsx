import React from 'react';
import '../assets/styles/App.css';

function Header(){
    return (
        <header className="absolute top-0 left-0 pt-12 px-10 w-full bg-blue-500 flex justify-between items-center">
            <div className="header-title pl-6">
                <h1>Dream</h1>
            </div>
            <div className="header-items">
                <ul className='list-none flex'>
                    <li>Our Socials</li>
                    <li>Support</li>
                    <li>More</li>
                    <li><a href='#register'>Register</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;