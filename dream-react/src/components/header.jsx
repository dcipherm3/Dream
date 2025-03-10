import React from 'react';

function Header(){
    return (
        <header className="absolute top-0 left-0 p-6 w-full bg-blue-500 flex justify-between items-center">
            <h1 className="text-2xl">FUCK YOU</h1>
            <div className="flex">
                <a href="#"><p className='text-white text-3xl p-6'>Home</p></a>
                <a href="#"><p className='text-white text-3xl p-6'>About</p></a>
                <a href="#"><p className='text-white text-3xl p-6'>Contact</p></a>
            </div>
        </header>
    );
};

export default Header;