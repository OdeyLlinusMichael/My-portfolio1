import './About1.css';
import React, { useEffect } from 'react';

const About1 = () => {
    useEffect(() => {
        const spanTexts = document.querySelectorAll("#About .back-text span");

        for (let spanText of spanTexts) {
            spanText.classList.add("active");
        }
    }, []);

    return (
        <div id="About">
            <div className="deals">
                <h1>know Me More</h1>
                <div className="back-text">
                    <span>A</span>
                    <span>B</span>
                    <span>O</span>
                    <span>U</span>
                    <span className="targeted-span">T</span>
                    <span>M</span>
                    <span>E</span>
                </div>
            </div>
        </div>
    );
}

export default About1;