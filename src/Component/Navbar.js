import React, { useState } from 'react';
import logo from '../Assets/networking.jpg';
import menu from '../Assets/menu_2550298.png';
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const [selectedMenu, setSelectedMenu] = useState(null);

    const handleMenuClick = (menu) => {
        props.setMenu(menu);
        setSelectedMenu(menu);
    };

    return (
        <div className='bg-orange-100 w-full flex items-center p-3'>
            <img src={menu} className='w-8 h-8' alt='Menu Icon' />
            <img src={logo} className='w-10 h-10 ml-5' alt='Logo' />
            <div className='flex items-center'>
                <h1 onClick={() => handleMenuClick("us")} className={`ml-5 cursor-pointer ${selectedMenu === "us" ? 'text-blue-500' : ''}`}>US</h1>
                <h1 onClick={() => handleMenuClick("world")} className={`ml-5 cursor-pointer ${selectedMenu === "world" ? 'text-blue-500' : ''}`}>World</h1>
                <h1 onClick={() => handleMenuClick("politics")} className={`ml-5 cursor-pointer ${selectedMenu === "politics" ? 'text-blue-500' : ''}`}>Politics</h1>
                <h1 onClick={() => handleMenuClick("business")} className={`ml-5 cursor-pointer ${selectedMenu === "business" ? 'text-blue-500' : ''}`}>Business</h1>
                <h1 onClick={() => handleMenuClick("opinion")} className={`ml-5 cursor-pointer ${selectedMenu === "opinion" ? 'text-blue-500' : ''}`}>Opinion</h1>
                <h1 onClick={() => handleMenuClick("audio")} className={`ml-5 cursor-pointer ${selectedMenu === "audio" ? 'text-blue-500' : ''}`}>Audio</h1>
                <h1 onClick={() => handleMenuClick("live tv")} className={`ml-5 cursor-pointer ${selectedMenu === "live tv" ? 'text-blue-500' : ''}`}>Live Tv</h1>
                <h1 onClick={() => handleMenuClick("more")} className={`ml-5 cursor-pointer ${selectedMenu === "more" ? 'text-blue-500' : ''}`}>More</h1>
                <Link to="/login"><h1 className='border border-spacing-1 rounded-lg ml-20 cursor-pointer'>Login</h1></Link>
            </div>
        </div>
    );
};

export default Navbar;
