import React from 'react';

import { IoMdSearch } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";

import './style.css'; 

const Header = () => {
  return (
    <div>
        <div className="header">
            <div className="logo">
                <img src="./Logo.png" alt="Logo" className="logo-image" />
            </div>
            <div className="search">
                <h1 className="logo-text"> LOGO </h1>
            </div>
            <div className="icons">
                <div className="icon cart">
                    <IoMdSearch size={25}/>
                </div> 
                <div className="icon favorite">
                <MdFavoriteBorder size={25}/>
                </div>
                <div className="icon cart">
                <LiaShoppingBagSolid size={25}/>
                </div>
                <div className="icon profile">
                <CgProfile size={25}/>
                </div>
                <div className="icon language">
                <select>
                    <option value="eng">eng</option>
                </select>
                </div>
            </div>
        </div>
        <nav className="navigation">
            <ul>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#stories">Stories</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>

    </div>
  );
};

export default Header;
