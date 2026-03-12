import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <aside className="social-sidebar">

            <a href="#" className="social-link">
                <i className="fab fa-facebook-f"></i>
            </a>

            <a href="#" className="social-link">
                <i className="fab fa-twitter"></i>
            </a>

            <a href="#" className="social-link">
                <i className="fab fa-instagram"></i>
            </a>

            <a href="#" className="social-link">
                <i className="fab fa-discord"></i>
            </a>

        </aside>
    );
}

export default Footer;