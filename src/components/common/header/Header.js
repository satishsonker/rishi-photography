import React, { useState } from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import SideMenu from './SideMenu'

export default function Header() {
    const [displaySideMenu, setDisplaySideMenu] = useState(false)
    return (
        <>
            <header className="site-header header-1747 light-header fixed-header">
                <div className='header-main-block'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-auto d-flex align-items-center'>
                                <div className='bar-icon mx-2' onClick={e=>setDisplaySideMenu(pre=>!pre)}>
                                    <i className="bi bi-list"></i>
                                </div>
                                <div className='logo-block'>
                                    <div className='logo site-logo'>
                                        <a href='#'>
                                            <span>Photography</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col d-flex flex-row-reverse'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </header>            
          <SideMenu displayMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu}></SideMenu>
        </>
    )
}
