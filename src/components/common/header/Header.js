import React, { useState, useEffect, useRef } from 'react'
import {useLocation } from "react-router-dom";
import './header.css'
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'

export default function Header({setHashValue}) {
    const location=useLocation();
  useEffect(() => {
    setHashValue(window.location.hash);
  }, [location])
    const headerMenu = [
        { name: "Home", link: "/", subMenu: [] },
        {
            name: "Services", link: "/services", subMenu: [
                { name: "Wedding Shoot", link: "/services" },
                { name: "Videography", link: "/services" },
                { name: "Still Photography", link: "/services" },
                { name: "Cenematic Video", link: "/services" },
                { name: "Youtube Video/Shots", link: "/services" },
                { name: "Instagram Video/Shots", link: "/services" },
            ]
        },
        { name: "About Us", link: "/aboutus", subMenu: [] },
        { name: "Contact Us", link: "/contactus", subMenu: [] }
    ]
    const [displaySideMenu, setDisplaySideMenu] = useState(false);
    const [showHeaderMenu, setShowHeaderMenu] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const headerRef = useRef();
    const minMobileScreenWidth = parseInt(process.env.REACT_APP_MOBILE_MIN_SCREEN_WIDTH);
    useEffect(() => {

        setScreenWidth(window.screen.width);
        if (window.screen.width < minMobileScreenWidth) {
            setShowHeaderMenu(false);
            setDisplaySideMenu(false);
        }
        else {
            setDisplaySideMenu(false);
            setShowHeaderMenu(true);
        }
    }, [window.screen.width, window.screen.orientation, window.screenTop]);

    window.onscroll = function () { onScrollHandler() };

    const onScrollHandler = () => {
        if (document.documentElement.scrollTop > 50) {
            headerRef?.current?.classList?.add('bg-dark')
            headerRef?.current?.classList?.remove('bg-transparent')
        } else {
            headerRef?.current?.classList?.remove('bg-dark')
            headerRef?.current?.classList?.add('bg-transparent')
        }
    }


    return (
        <>
            <header ref={headerRef} className={`site-header header-1747 fixed-header`}>
                <div className='header-main-block'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='d-flex align-items-center'>
                                <div className='brand'>
                                    <div className='col-auto d-flex align-items-center brand-item'>
                                        <div className='bar-icon mx-2'>
                                            <Link className='d-md-none d-lg-none d-xl-none' target='_blank' to={`https://wa.me/${process.env.REACT_APP_WHATSAPP_NO}/?text=${encodeURI(process.env.REACT_APP_WHATSAPP_TEXT)}`}>
                                                <i className="bi bi-whatsapp mx-3"></i>
                                            </Link>
                                            <i className="bi bi-list" onClick={e => { screenWidth > minMobileScreenWidth ? setDisplaySideMenu(pre => !pre) : setShowHeaderMenu(pro => !pro) }}></i>
                                        </div>
                                        <div className='bar-icon mx-2'>

                                        </div>
                                        <div className='logo-block'>
                                            <div className='logo site-logo'>
                                                <a href='#'>
                                                    <img src='./assets/logo64.png'></img>
                                                    <span>{process.env.REACT_APP_SITE_NAME}</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {((screenWidth < minMobileScreenWidth && showHeaderMenu) || screenWidth >= minMobileScreenWidth) && <div className='col d-flex flex-row-reverse'>
                                    <nav className='header-menu'>
                                        <ul className='menu'>
                                            {
                                                headerMenu?.map((ele, index) => {
                                                    return <>
                                                        <li key={index} className={index === 0 ? 'current-menu-item menu-item' : "menu-item"}>
                                                            <Link to={ele?.link}>
                                                                <span>{ele?.name}</span>
                                                            </Link>
                                                            {ele?.subMenu?.length > 0 && <ul className='sub-menu'>
                                                                {
                                                                    ele?.subMenu?.map((innerEle, ind) => {
                                                                        return <li key={ind} className='sub-menu-item'>
                                                                            <Link to={innerEle?.link}>
                                                                                <span>{innerEle?.name}</span>
                                                                            </Link>
                                                                        </li>
                                                                    })
                                                                }
                                                            </ul>
                                                            }
                                                        </li>
                                                    </>
                                                })
                                            }
                                        </ul>
                                    </nav>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {screenWidth >= minMobileScreenWidth && <SideMenu displayMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu}></SideMenu>}
        </>
    )
}
