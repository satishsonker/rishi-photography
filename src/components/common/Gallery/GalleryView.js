import React, { useState } from 'react'
import './galleryview.css'

export default function GalleryView({ data, modelId = "galleryViewModel", defaulView = "grid1", fullpage = false, title = "Image " }) {
    const [viewType, setViewType] = useState(defaulView);
    const [slideIndex, setSlideIndex] = useState(0);
    data = data === undefined || data === null ? [
        { path: '/uploads/gallery/img-01_thumb.jpg', thumbPath: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project1-300x200_thumb.jpg', category: 'all', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-02_thumb.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-03_thumb.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-04_thumb.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-05_thumb.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-06_thumb.jpg', thumbPath: '', category: 'portraits', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project33-1024x686.jpg', thumbPath: '', category: 'studio', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project39-1024x441.jpg', thumbPath: '', category: 'lifestyle', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project8-1024x686.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project7-1024x1024.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project34-1024x684.jpg', thumbPath: '', category: 'lifestyle', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project37-1024x768.jpg', thumbPath: '', category: 'studio', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project36-1024x685.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-150x150.jpg', thumbPath: '', category: 'portraits', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' }
    ] : data;
    return (
        <>
            <div className='gallery-view'>
                <div className='header'>
                    <div className='title'>
                        {title} <span>Gallery</span>
                    </div>
                    <div className='view-type'>
                        <i onClick={e => setViewType('grid1')} title='Grid big view' class={`fa-solid fa-grip ${(viewType === 'grid1' ? 'active' : '')}`}></i>
                        <i onClick={e => setViewType('grid2')} title='Grid small view' class={`fa-solid fa-braille ${(viewType === 'grid2' ? 'active' : '')}`}></i>
                        <i onClick={e => setViewType('list')} title='List view' class={`fa-solid fa-list ${(viewType === 'list' ? 'active' : '')}`}></i>
                        <i onClick={e => setViewType('slide')} title='Slide View' class={`fa-solid fa-images ${(viewType === 'slide' ? 'active' : '')}`}></i>
                    </div>
                </div>
                {viewType !== 'slide' && <div className={`${viewType} data`}>
                    {
                        data?.map((ele, index) => {
                            return <article key={index} className="gallery-item">
                                <div className='item'>
                                    <img src={ele?.path} loading="lazy"></img>
                                    <div className='popup'>
                                        <div className='title'>{ele.title}</div>
                                        <div className='sub-title'>{ele.subTitle}</div>
                                    </div>
                                </div>
                            </article>
                        })
                    }
                </div>}
                {viewType === 'slide' && <div className='slide'>
                    <div className='main-img'>
                        <img src={data[slideIndex]?.path} loading="lazy"></img>
                    </div>
                    <div className='img-list'>
                        {
                            data?.map((ele, index) => {
                                return <div key={index} onClick={e => setSlideIndex(index)} className='item'>
                                    <img src={ele?.path} className={slideIndex === index ? 'active' : ""} loading="lazy"></img>
                                </div>
                            })
                        }
                    </div>
                </div>
                }
            </div>
        </>
    )
}
