import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h1>THE</h1>
                <div className="oval"></div>
                <h1>M</h1>
                <div className="oval2"></div>
                <h1> VIE</h1>
                <div className="oval3"></div>
                <h1>DB</h1>
            </div>
            <div className="footer-right">
                <ul>
                    <h3 style={{fontWeight: "bolder"}}>THE BASICS</h3>
                    <li>About TMDB</li>
                    <li>Contact Us</li>
                    <li>Support Forums</li>
                    <li>API</li>
                    <li>System Status</li>
                </ul>
                <ul>
                    <h3 style={{fontWeight: "bolder"}}>GET INVOLVED</h3>
                    <li>Contribution Bible</li>
                    <li>Add New Movie</li>
                    <li>Add New TV Show</li>
                </ul>
                <ul>
                    <h3 style={{fontWeight: "bolder"}}>COMMUNITY</h3>
                    <li>Guidelines</li>
                    <li>Discussions</li>
                    <li>Leaderboard</li>
                    <li>Twitter</li>
                </ul>
                <ul>
                    <h3 style={{fontWeight: "bolder"}}>LEGAL</h3>
                    <li>Terms of Use</li>
                    <li>API Terms of Use</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;