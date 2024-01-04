import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'
import GalleryView from '../Gallery/GalleryView'

export default function Services({showItems=8}) {
  const data=[{
    icon:"bi bi-camera-reels",
    name:"Wedding Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-bullhorn",
    name:"Advertising Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-bag-shopping",
    name:"Product Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-shirt",
    name:"Product Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-calendar-check",
    name:"Event Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-calendar-check",
    name:"Event Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-images",
    name:"Model Portfolio",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-baby",
    name:"Baby Photography",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-brands fa-youtube",
    name:"Youtube/Instagram Reels",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-handshake",
    name:"Meetings Capturing",
    title:"We invest all our professionalism, commitment and care."
  },
  {
    icon:"fa-solid fa-person-rays",
    name:"Biogeography videos shoot",
    title:"We invest all our professionalism, commitment and care."
  }]

  
// add
// Wedding and engagement
// add
// Aerial wedding photography
// add
// Beach wedding photography
// add
// Bridal photography
// add
// Corporate photography
// add
// Couples photography
// add
// Destination wedding photography
// add
// Elopement photography
// add
// Events and parties
// add
// Family and group
// add
// Headshots and portraits
// add
// Honeymoons
// add
// Individual photography
// add
// Marriage proposal photography
// add
// Maternity and newborn
// add
// Photo booth rentals
// add
// Photo editing
// add
// Pre-wedding photo shoots
// add
// Product
// add
// Property photography
// add
// Rural wedding photography
// add
// School portraits
// add
// Trash-the-dress photography
// add
// Wedding albums
// add
// Wedding ceremony photography
// add
// Wedding photo packages
// add
// Wedding preparations photography
// add
// Wedding rehearsal photography 
  return (
    <>    
    <div className="">
      <div className='row'>
        <div className='col-12'>
          <div className='service'>
            our <span>Services</span>
            <div className='divider'>
              ___
            </div>
          </div>
        </div>
        {
          data?.map((ele,index)=>{
            if(index>=showItems)
            return <></>
            else
            return   <div className='col-md-3 col-sm-12'>
            <div className='service-items'>
              <div className='item icon'>
                <i className={ele?.icon}></i>
              </div>
              <div className='item heading'>
                <strong>{ele?.name}</strong>
              </div>
              <div className='item sub-heading'>
                <strong>{ele.title}</strong>
              </div>
              <div className='item readmore'>
                <Link to="#" >
                  <span>More... <i className="bi bi-chevron-right"></i></span>
                </Link>
                 <Link to="#" >
                  <span>Gallery <i className="fa-regular fa-images"></i></span>
                </Link>
              </div>
            </div>
          </div>
          })
        }
      </div>
      </div>
    </>
  )
}
