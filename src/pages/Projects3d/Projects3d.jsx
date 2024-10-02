import React from 'react'
import style from './Projects3d.module.css'
import { Link } from 'react-router-dom'
import images from './assets/Castle0.png'
import characters from './assets/Tanjiro4.png'
import animation from './assets/Watch.png'
export default function Projects3d() {
  return (
    <div className={`${style.projects} `}>
        <div className={`${style.container}`}>
        <h3>3d Art</h3>
        <div className={`${style.options}`}>
          <Link to="/Images"><span></span><img src={`${images}`} /><p>Images</p></Link>
          <Link to="/Characters"><span></span><img src={`${characters}`} /><p>Characters</p></Link>
          <Link to="/Animations"><span></span><img src={`${animation}`} /><p>Animations</p></Link>
        </div>
        </div>
    </div>
  )
}
