import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Navbar.module.css';

import home from '/public/home.svg'
import about from '/public/about.svg'
import proj from '/public/proj.svg'
import phone from '/public/phone.svg'

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

                                    <a className={`nav-link ${location.hash === "#Home" ? style.active : ""}`} href="#Home"><img src={home} /> Home</a>
                                </li>
                                <li className="nav-item">

                                    <a className={`nav-link ${location.hash === "#About" ? style.active : ""}`} href="#About"><img src={about} /> About</a>
                                </li>
                                <li className="nav-item">

                                    <a className={`nav-link ${location.hash === "#Projects" ? style.active : ""}`} href="#Projects"><img src={proj} /> Projects</a>
                                </li>
                                <li className="nav-item">

                                    <a className={`nav-link ${location.hash === "#Contacts" ? style.active : ""}`} href="#Contacts"> <img src={phone} />Contacts</a>
                                </li>
                            </ul>
                            :
                            <ul>
                                {/* Page-to-page navigation */}
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Home" ? style.active : ""}`} to="/"><img src={home} />Home</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/About" ? style.active : ""}`} to="/#About"><img src={about} /> About</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className={`nav-link ${style.active}`} to="/#Projects"><img src={proj} /> Projects</Link>
                                </li>
                                <li className="nav-item">

                                    <Link className={`nav-link ${location.pathname === "/Contacts" ? style.active : ""}`} to="/#Contacts"><img src={phone} /> Contacts</Link>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </nav>
        </div>
    );
}
