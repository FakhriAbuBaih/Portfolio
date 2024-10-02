import React, { useState } from 'react';
import style from './main.module.css'
import style1 from './images.module.css'
import style2 from './main.module.css'
import castle from '../assets/Castle01.png'
import girl from '../assets/Castle01.png'
import Watch from '../assets/Watch.png'
import Burgers from '../assets/Castle01.png'
import Valentino from '../assets/Valentino00.png'
import Ford from '../assets/Castle01.png'
import CR7 from '../assets/Castle01.png'
import Pringles from '../assets/Castle01.png'
import Sauvage from '../assets/Castle01.png'
import Chanel from '../assets/chanel.jpg'
import chair from '../assets/Castle01.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import CharactersSwiper from '../../../components/CharactersSwiper/CharactersSwiper'
export default function Projects() {
    var directories = location.pathname.split("/");
    var lastDirecotry = directories[(directories.length - 1)];
    return (
        <div className={`${style.main}`}>
            <div className={`${style.bar}`}>
                <Link className={`${location.pathname === "/Images" ? style.active : ""}`} to="/Images">images</Link>
                <Link className={`${location.pathname === "/Characters" ? style.active : ""}`} to="/Characters">characters</Link>
                <Link className={`${location.pathname === "/Animations" ? style.active : ""}`} to="/Animations">animations</Link>
            </div>
            <div className='container'>
                <h3>3D Arts : {lastDirecotry}</h3>

                {location.pathname === "/Images" ? <>
                    <div className={`${style1.images}`}>
                        <div className={`${style1.image}`}>
                            <img src={`${castle}`} />
                            <span>Castle</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${girl}`} />
                            <span>Viking Girl</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Watch}`} />
                            <span>Watch</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Burgers}`} />
                            <span>Burgers</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Valentino}`} />
                            <span>Valentino Perfume</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Ford}`} />
                            <span>Ford Mustang</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${CR7}`} />
                            <span>CR7 Perfume</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Pringles}`} />
                            <span>Pringles</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Sauvage}`} />
                            <span>Sauvage Perfume</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${Chanel}`} />
                            <span>Blue Chanel Perfume</span>
                            <a href="" >View</a>
                        </div>
                        <div className={`${style1.image}`}>
                            <img src={`${chair}`} />
                            <span>chair</span>
                            <a href="" >View</a>
                        </div>

                    </div>
                </> : location.pathname === "/Characters" ?
                    <div className={`${style.models}`}>

                        <Swiper
                            modules={[EffectCoverflow, Navigation]}
                            grabCursor={true}
                            centeredSlides={true}
                            spaceBetween={45}
                            slidesPerView={3}
                            navigation={true}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 0,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            className="mySwiper"

                        >
                            <SwiperSlide>
                                {({ isActive }) => (
                                    <CharactersSwiper model='farmer' status={`${isActive ? 'active' : 'notactive'}`} />
                                )}
                            </SwiperSlide>
                            <SwiperSlide>
                                {({ isActive }) => (
                                    <CharactersSwiper model='Neon' status={`${isActive ? 'active' : 'notactive'}`} />

                                )}
                            </SwiperSlide>
                            
                            <SwiperSlide>
                                {({ isActive }) => (
                                    <CharactersSwiper model='WariorWoman' status={`${isActive ? 'active' : 'notactive'}`} />
                            )}
                        </SwiperSlide>
                        <SwiperSlide>
                                {({ isActive }) => (
                                    <CharactersSwiper model='Beast' status={`${isActive ? 'active' : 'notactive'}`} />
                            )}
                        </SwiperSlide>
                        <SwiperSlide>
                                {({ isActive }) => (
                                    <CharactersSwiper model='Gojo' status={`${isActive ? 'active' : 'notactive'}`} />
                            )}
                        </SwiperSlide>





                    </Swiper>


                </div> : location.pathname === "/Animations" ? <>
            </> : <>
            </>}
        </div>

    </div >
)
}
