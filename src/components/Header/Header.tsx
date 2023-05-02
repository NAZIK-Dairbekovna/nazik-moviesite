import React from 'react';
import {FaSearch} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="left">
                <NavLink to={'/'}><h1>TMDB</h1></NavLink>
                <Link to={'/TopRated'}>Top Rated</Link>
                <Link to={'/Popular'}>Popular</Link>
                <Link to={'/NowPlaying'}>Now Playing</Link>
                <Link to={'/Upcoming'}>Upcoming</Link>
            </div>
            <div className="right">
                <button className="lang-btn">RU</button>
                <input type="search"/>
                <FaSearch style={{color: "#fff", marginLeft: "10px"}}/>
            </div>
        </header>
    );
};

export default Header;