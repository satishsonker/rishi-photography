import React from 'react'
import { Link } from 'react-router-dom'
import SideMenuFooter from './SideMenuFooter'
import EmailAndPhone from '../EmailAndPhone'

export default function SideMenu({setDisplaySideMenu,displayMenu=false}) {
    return (
        <>
       {displayMenu &&   <div className='side-menu'>
                <div className='side-menu-close'>
                    <i className="bi bi-x" onClick={e=>setDisplaySideMenu(false)}></i>
                </div>
                <div className='side-menu-items'>
                    <div className='side-menu-item'>
                        <div id="text-2" className="widget widget_text">
                            <h5 className="widget-title">My name is Alex Novo,I’m a photographer.</h5>
                            <div className="textwidget">
                                <p>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                            </div>
                        </div>
                    </div>
                    <div className='side-menu-item'>
                        <div id="text-2" className="widget media-gallery">
                            <h5 className="widget-title">Latest Photo</h5>
                            <div id="gallery-1" className="gallery">
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project1/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project1-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" />
                                        </a>
                                    </dt>
                                </dl>
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project13/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project13-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" />
                                        </a>
                                    </dt>
                                </dl>
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project14/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project14-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" />
                                        </a>
                                    </dt>
                                </dl>
                                <br style={{ clear: 'both' }} />
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project10/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcSet="https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-150x150.jpg 150w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px" />
                                        </a>
                                    </dt>
                                </dl>
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project12/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project12-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcSet="https://promo-theme.com/novo/wp-content/uploads/2017/08/project12-150x150.jpg 150w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project12-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px" />
                                        </a>
                                    </dt>
                                </dl>
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project6/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcSet="https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-150x150.jpg 150w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-300x300.jpg 300w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-1024x1024.jpg 1024w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-768x768.jpg 768w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-70x70.jpg 70w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-780x780.jpg 780w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-100x100.jpg 100w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project6.jpg 1350w" sizes="(max-width: 150px) 100vw, 150px" />
                                        </a>
                                    </dt>
                                </dl>
                                <br style={{ clear: 'both' }} />
                            </div>
                        </div>
                    </div>
                    <div className='side-menu-item' style={{ flexDirection: "column" }}>
                        <div id="text-2" className="widget">
                            <h5 className="widget-title">Categories</h5>
                        </div>
                        <ol className='side-menu-item-menu'>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-arrow-left"></i>
                                    <span>Fashion</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-arrow-left"></i>
                                    <span>Lifestyle</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-arrow-left"></i>
                                    <span>Music</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-arrow-left"></i>
                                    <span>Nature</span>
                                </Link>
                            </li>
                        </ol>
                    </div>
                    <div className='side-menu-item' style={{ flexDirection: "column" }}>
                        <div id="text-2" className="widget">
                            <h5 className="widget-title">Contact Us</h5>
                        </div>
                        <div className="textwidget custom-html-widget w100">
                            <div className="contact-row">
                                <span>Phone : </span>
                                <EmailAndPhone type="phone"></EmailAndPhone>
                            </div>
                            <div className="contact-row">
                                <span>Email : </span>
                                <EmailAndPhone type="mail"></EmailAndPhone>
                            </div>
                        </div>
                    </div>
                </div>
                <SideMenuFooter></SideMenuFooter>
            </div>
    }
        </>

    )
}
