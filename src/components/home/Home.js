import React from 'react'
import './home.css'
import MainCarousel from './MainCarousel'

export default function Home() {
  const imageData=['https://promo-theme.com/novo/wp-content/uploads/2019/08/slide31.jpg','https://promo-theme.com/novo/wp-content/uploads/2018/10/project43.jpg','https://promo-theme.com/novo/wp-content/uploads/2017/08/slide11.jpg']
  return (
    <>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    <MainCarousel imageData={imageData}></MainCarousel>
    </>
  )
}
