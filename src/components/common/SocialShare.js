import React from 'react'
import './socialshare.css';

export default function SocialShare() {
    return (
        <div className="footer-social-button">
            <a href="#" className="item" target="_self&quot;">
                <i className="bi bi-youtube"></i>
                <span>Youtube</span>
            </a>
            <a href="#" className="item" target="_self&quot;">
                <i className="bi bi-facebook"></i>
                <span>Facebook</span>
            </a>
            <a href="#" className="item" target="_self&quot;">
                <i className="bi bi-instagram"></i>
                <span>Instagram</span>
            </a>
        </div>
    )
}
