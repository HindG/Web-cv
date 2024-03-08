"use client"
import CMA from './cma.png'
import Sensia from './sensia.png'
import LauraBeaute from './laura_beaute.png'
import FestivalRecall from './festival_recall.png'
import App from './app.png'
import data from '../../Data/work.json'
import './WorkCarousel.css'
import { useState } from 'react'

export default function WorkCarousel() {
    const carouselLength = data.projects.length
    const [position, setPosition] = useState(1)
    const [projectImage, setProjectImage] = useState(CMA)

    return (
        <div className="workcarousel__container">
            <div className="workcarousel__datacontainer">
                <h4 className="workcarousel__projectname">{data.projects[position].name}</h4>
                <p className="workcarousel__projectdesc">{data.projects[position].desc}</p>
                <p className="workcarousel__projecttechno">{data.projects[position].techno}</p>
                <span className="workcarousel__projectyear">{data.projects[position].project_year}</span>
            </div>
            <img
                src={projectImage.src}
                alt={data.projects[position].img_alt}
                className="workcarousel__img"
            />
        </div>
    );
}
