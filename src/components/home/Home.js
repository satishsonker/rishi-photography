import React from 'react'
import './home.css'
import MainCarousel from './MainCarousel'
import ContactUs from './ContactUs'
import Footer from './Footer'
import SocialShare from '../common/SocialShare'
import OurTeams from './OurTeams'
import Gallery from './Gallery'

export default function Home() {
  const imageData=['https://promo-theme.com/novo/wp-content/uploads/2019/08/slide31.jpg','https://promo-theme.com/novo/wp-content/uploads/2018/10/project43.jpg','https://promo-theme.com/novo/wp-content/uploads/2017/08/slide11.jpg']
  return (
    <>
    <MainCarousel imageData={imageData}></MainCarousel>
    <Gallery></Gallery>
    <OurTeams></OurTeams>
    <SocialShare></SocialShare>
    <ContactUs></ContactUs>
    <Footer></Footer>
    </>
  )
}
