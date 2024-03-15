import React, { useEffect } from 'react'; 
import './Navbar.css'; 
import logo from '../../assets/image/logo.png'; 
import Typed from 'typed.js'; 



const Navbar = () => {
    useEffect(() => {
        
        var typed = new Typed(".auto-type", {
            strings: ["ODEY LINUS MICHAEL", "A FREELANCER", "A UI/UX DESIGNER", "PRODUCT DESIGNER", "GRAPHICS DESIGNER"],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });

        
        return () => {
            typed.destroy();
        };
    }, []); 

    return (
        <div id="header">
            <div className="container"> 
                <nav>
                    <img src={logo} className="logo" alt="Logo"/> {/* Use imported logo */}
                    <ul id="sidemenu">
                        <li><a href="#header">Home</a></li>
                        <li><a href="#About">About me</a></li>
                        <li><a href="#hero">Resume</a></li>
                        <li><a href="#Apor">Portfolio</a></li>
                        <li><a href="#serq2">Services</a></li>
                        <li><a href="#conq2">Contact</a></li>
                    </ul>
                </nav>
                <div className="txt1"><p>HI THERE!</p></div>
                <div className="wrapper">
                    <div className="wrapper">
                        <h1>I'M <span className="auto-type"></span></h1>
                    </div>
                </div>
                <div className="txt2"><h1>BASE IN LAGOS, NIGERIA</h1></div>
            </div>
        </div>
    );
};

export default Navbar;