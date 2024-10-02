import React, { useEffect, useRef, useState } from 'react';
import style from './Home.module.css';
import style1 from './About.module.css';
import style2 from './Projects.module.css';
import style3 from './Contacts.module.css';
import { Link } from 'react-router-dom';

import ProfilePic from '/public/profilepic.png'
import blender from '/public/blender.svg'
import figma from '/public/Figma.svg'
import uiux from '/public/uiux.png'
import d3 from '/public/d3art.png'

import YT from '/public/YT.png'
import LI from '/public/LI.svg'
import GM from '/public/GM.png'
import Insta from '/public/Insta.svg'
import WA from '/public/WA.png'
import QR from '/public/scan.png'
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const divRef = useRef(null);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    // Attach the click event listener to the document
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className={`${style.allHome}`} id="Home">
        <div className="container">
          <div className={`${style.Home}`}>
            <h3>Fakhri AbuBaih</h3>
            <h4>UI/UX Designer & 3D Artist</h4>
            <p>Designing seamless user interfaces and creating
              immersive 3D models.</p>
            <div className={`${style.buttons}`}>
              <button className={`${style.projects}`}><a href="#Projects">Go To Projects</a></button>
              <button className={`${style.contacts}`}><a href="#Contacts">Contact me</a></button>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style1.About}`} id="About">
        <span>About Me</span>
        <div className={`container ${style1.aboutSec}`}>
          <img src={ProfilePic} className={`${style1.img}`} />
          <div className={`${style1.AboutMeText}`}>
            <h4>UI/UX Designer & 3D Artist</h4>
            <p className={`${style1.para}`}>I am Computer Systems Engineer with a strong foundation in both UI/UX design and 3D artistry.<br></br>My journey in digital creativity has led me to develop intuitive and user-centered interfaces in Figma while <br></br> also bringing characters and objects to life through 3D modeling in Blender.</p>
            <div className={`${style1.infoBox}`}>
              <div className={`${style1.info}`}>
                <p>Name: </p>
                <p>Fakhri AbuBaih</p>
              </div>
              <div className={`${style1.info}`}>
                <p>Major: </p>
                <p>Computer Systems Engineering</p>
              </div>
              <div className={`${style1.info}`}>
                <p>From: </p>
                <p>Palestine</p>
              </div>
              <div className={`${style1.info}`}>
                <p>Email: </p>
                <p>fakhribaih@gmail.com</p>
              </div>
              <div className={`${style1.info}`}>
                <a href='/FakhriAbubaih-Resume.pdf' download>Download CV</a>
              </div>
              <div className={`${style1.info}`}>
                <p>Programs: </p>
                <p>Blender<img src={blender} />, Figma <img src={figma} /></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${style2.Projects}`} id="Projects">
        <h3>Projects</h3>
        <div className={`${style2.options}`}>
          <Link to="/uiuxProjects"><img src={uiux} /><span>UI/UX</span></Link>
          <Link to="/Projects3d"><img src={d3} /><span>3D Art</span></Link>
        </div>
      </div>

      <div className={`${style3.Contacts} main`} id="Contacts">
        <div className={`container ${style3.contacts}`}>
          <h3>... Contact us on ...</h3>
          <div className={`${style3.contactsOptions}`}>
            <div className={`${style3.option}`}>
              <img src={YT} />
              <div className={`${style3.spans}`}>
                <span>YouTube</span>
                <span>Fakhri AbuBaih</span>
              </div>
              <a href="https://www.youtube.com/@FakhriAbubaih">View</a>
            </div>
            <div className={`${style3.option}`}>
              <img src={LI} />
              <div className={`${style3.spans}`}>
                <span>LinkedIn</span>
                <span>Fakhri AbuBaih</span>
              </div>
              <a href="https://www.linkedin.com/in/fakhri-abubaih/">View</a>
            </div>
            <div className={`${style3.option}`}>
              <img src={GM} />
              <div className={`${style3.spans}`}>
                <span>Email</span>
                <span>fakhribaih@gmail.com</span>
              </div>
              <a href="mailto:fakhribaih@gmail.com">View</a>
            </div>
            <div className={`${style3.option}`}>
              <img src={Insta} />
              <div className={`${style3.spans}`}>
                <span>Instagram</span>
                <span>fakhri3d</span>
              </div>
              <a href="https://www.instagram.com/fakhri3d/">View</a>
            </div>
            <div className={`${style3.option}`}>
              <img src={WA} />
              <div className={`${style3.spans}`}>
                <span>Whats App</span>
                <span>+970 599 468 002</span>
              </div>
              <a href="#Contacts" onClick={toggleVisibility}>View</a>
            </div>
          </div>
          {isVisible && (
            <div ref={divRef} id="whatsAppQRCode" className={`${style3.WWindow}`}>
              <a href="#Contacts" onClick={toggleVisibility}>×</a>
              <img src={QR} alt="WhatsApp QR Code" />
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
