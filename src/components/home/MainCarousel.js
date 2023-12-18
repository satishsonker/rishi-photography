import React, { useState } from 'react'
import ReactTyped from "react-typed";
import './mainCarousel.css'

export default function MainCarousel({ imageData }) {
    imageData = imageData === undefined ? [] : imageData;
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0)
    return (
        <div className='banner'>
            <div className='banner-dots'>
                <li onClick={e => setCurrentBannerIndex(0)} className={`dot ${(currentBannerIndex === 0 ? "active" : "")}`}>01</li>
                <li onClick={e => setCurrentBannerIndex(1)} className={`dot ${(currentBannerIndex === 1 ? "active" : "")}`}>02</li>
                <li onClick={e => setCurrentBannerIndex(2)} className={`dot ${(currentBannerIndex === 2 ? "active" : "")}`}>03</li>
            </div>
            <div className="bg-image" style={{backgroundImage:`url(${imageData[currentBannerIndex]})`}}>
                <h1 className='heading'>
                    We Are Photo Shoot Agency
                    <br />
                    Focused on
                    <strong className='heading-color'> [</strong> <ReactTyped className='heading-color' strings={[" Creativity", " Quality ", "Best Customer Experiance"]} typeSpeed={100} loop /><strong className='heading-color'>]</strong>
                </h1>
                <small>The world without photo will be meaningless</small>
            </div>
        </div>
    )
}
