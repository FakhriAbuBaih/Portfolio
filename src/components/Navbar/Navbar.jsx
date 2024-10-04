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
        <div className={`${style.main}`}>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className={`${style.logo}`}>Eng, Fakhri AbuBaih</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                        {location.pathname === "/" ?
                            <ul className="navbar-nav">
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
                            <ul className="navbar-nav">
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
            </nav>

        </div>
    );
}