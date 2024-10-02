import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Navbar.module.css';

export default function Navbar() {
    const location = useLocation();
    const loggedIn = localStorage.getItem('name');

    return (
        <div>
            <nav>
                <div className="container">
                    <div className={`${style.nav}`}>
                        <div className={`${style.logo}`}>Eng, Fakhri AbuBaih</div>
                        {location.pathname === "/" ?
                            <ul>
                                {/* Section navigation within the base page */}
                                <li className="nav-item">
                                    <a className={`nav-link ${location.hash === "#Home" ? style.active : ""}`} href="#Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.hash === "#About" ? style.active : ""}`} href="#About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.hash === "#Projects" ? style.active : ""}`} href="#Projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${location.hash === "#Contacts" ? style.active : ""}`} href="#Contacts">Contacts</a>
                                </li>
                            </ul>
                            :
                            <ul>
                                {/* Page-to-page navigation */}
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Home" ? style.active : ""}`} to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/About" ? style.active : ""}`} to="/#About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${style.active}`} to="/#Projects">Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/Contacts" ? style.active : ""}`} to="/#Contacts">Contacts</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}
