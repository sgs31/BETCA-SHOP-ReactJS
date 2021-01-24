import React from 'react';
import './styles/Footer.css'
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

export default function Footer() {
    return (
        <div className="footer">
            <div className="contact-footer">
                <h4>Contacto</h4>
                <p>Av. Cualquiera 1234</p>
                <p>Tel. 0800-666-6666</p>
                <p>Email: comercial@drops.com</p>
            </div>
            <div>
                <span>®DROPS 2021</span>
            </div>
            <div className="social-media">
                <div>
                    <a href=""><img src={linkedin} alt=""/></a>
                </div>
                <div>
                    <a href=""><img src={github} alt=""/></a>
                </div>
            </div>
        </div> 
    );
}