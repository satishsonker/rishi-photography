import React, { useState } from 'react'
import './gallery.css';

export default function Gallery({ data }) {
    data = data === undefined || data === null ? [
        { path: '/uploads/gallery/img-01.jpg', thumbPath: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project1-300x200.jpg', category: 'all', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-02.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-03.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-04.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-05.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: '/uploads/gallery/img-06.jpg', thumbPath: '', category: 'portraits', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project33-1024x686.jpg', thumbPath: '', category: 'studio', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project39-1024x441.jpg', thumbPath: '', category: 'lifestyle', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project8-1024x686.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project7-1024x1024.jpg', thumbPath: '', category: 'fashion', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project34-1024x684.jpg', thumbPath: '', category: 'lifestyle', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project37-1024x768.jpg', thumbPath: '', category: 'studio', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project36-1024x685.jpg', thumbPath: '', category: 'nature', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' },
        { path: 'https://promo-theme.com/novo/wp-content/uploads/2017/08/project6-150x150.jpg', thumbPath: '', category: 'portraits', title: 'Wishing Well', subTitle: 'Lorem ipsum dolor sit amet, consectetur ad...' }
    ] : data;
    const [selectFilterMenuIndex, setSelectFilterMenuIndex] = useState(0)
    const filterMenu = [{ name: "All", category: "all" },
    { name: "Fashion", category: "fashion" },
    { name: "Lifestyle", category: "lifestyle" },
    { name: "Studio", category: "studio" },
    { name: "Portraits", category: "portraits" },
    { name: "Nature", category: "nature" }];

    const filterGalleryData = () => {
        var category = filterMenu[selectFilterMenuIndex]?.category;
        if (category?.toLocaleLowerCase() === "all")
            return data;
        else {
            var filterData = data?.filter(x => x.category === category);
            return filterData === undefined || filterData === null ? [] : filterData;
        }
    }
    return (
        <div className='gallery-container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="heading-block">
                        <h2 className="h">
                            Latest
                            <span>Work</span>
                        </h2>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='gallery-filter'>
                        <ul>
                            {
                                filterMenu?.map((res, index) => {
                                    return <li key={index} onClick={e => setSelectFilterMenuIndex(index)} className={selectFilterMenuIndex === index ? "active" : ""}>{res.name} <span></span></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className='col-12'>
                    <div className='gallery'>
                        {
                            filterGalleryData()?.map((ele, index) => {
                                return <article key={index} className='gallery-item'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
