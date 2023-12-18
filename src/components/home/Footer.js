import React from 'react'
import './footer.css';
import EmailAndPhone from '../common/EmailAndPhone';

export default function Footer() {
    return (
        <footer>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    <div className='footer-title brand'>
                        {process.env.REACT_APP_SITE_NAME}
                    </div>
                    <p className='footer-para'>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <div className='footer-title'>
                        Latest Photo
                        <span className='border'></span>
                    </div>
                    <div className='footer-content'>
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
                                <dl className="gallery-item">
                                    <dt className="gallery-icon landscape">
                                        <a href="https://promo-theme.com/novo/project10/">
                                            <img src="https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-150x150.jpg" className="attachment-thumbnail size-thumbnail" alt="" loading="lazy" srcSet="https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-150x150.jpg 150w, https://promo-theme.com/novo/wp-content/uploads/2017/08/project10-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px" />
                                        </a>
                                    </dt>
                                </dl>
                                <br style={{ clear: 'both' }} />
                            </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-4'>
                    <div className='footer-title'>
                        Contact Us
                        <span className='border'></span>
                    </div>
                    <div className='footer-content'>
                        <div className="footer-content-item">
                            <span>Phone: </span>
                            <EmailAndPhone type="phone"></EmailAndPhone>
                        </div>
                        <div className="footer-content-item">
                            <span>Email: </span>
                            <EmailAndPhone type="mail"></EmailAndPhone>
                            <div className='copyrights'>Copyright &copy; {new Date().getFullYear()} {process.env.REACT_APP_SITE_NAME}. All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}
