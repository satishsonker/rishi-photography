import React, { useState, useEffect, useRef } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'

export default function Header() {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);
    const [showHeaderMenu, setShowHeaderMenu] = useState(true);
    const [screenWidth, setScreenWidth] = useState(window.screen.width);
    const headerRef = useRef();
    const minMobileScreenWidth =parseInt(process.env.REACT_APP_MOBILE_MIN_SCREEN_WIDTH);
    useEffect(() => {

        setScreenWidth(window.screen.width);
        if (window.screen.width<minMobileScreenWidth){
        setShowHeaderMenu(false);
            setDisplaySideMenu(false);
        }
        else{
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
                                            <i className="bi bi-list" onClick={e =>{ screenWidth>minMobileScreenWidth? setDisplaySideMenu(pre => !pre):setShowHeaderMenu(pro=>!pro)}}></i>
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
                                            <li className='current-menu-item menu-item'>
                                                <Link to="/">
                                                    <span>Home</span>
                                                </Link>
                                                <ul className='sub-menu'>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>Home11</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>BLOG</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>PAGES</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>GALLERY</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>SHOP</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>CONTACTS</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>BOOKING</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>BLOG</span>
                                                </Link>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>PAGES</span>
                                                </Link>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>GALLERY</span>
                                                </Link>
                                                <ul className='sub-menu'>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>Home 1</span>
                                                        </Link>
                                                    </li>
                                                    <li className='sub-menu-item'>
                                                        <Link to="/">
                                                            <span>BLOG</span>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>SHOP</span>
                                                </Link>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>CONTACTS</span>
                                                </Link>
                                            </li>
                                            <li className='menu-item'>
                                                <Link to="/">
                                                    <span>BOOKING</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {screenWidth >= minMobileScreenWidth && <SideMenu displayMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu}></SideMenu>}
        </>
    )
}
