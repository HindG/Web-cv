"use client"
import CMA from './cma.png'
import Sensia from './sensia.png'
import LauraBeaute from './laura_beaute.png'
import FestivalRecall from './festival_recall.png'
import App from './app.png'
import CarouselSlide from '../CarouselSlide/CarouselSlide'
import data from '../../Data/work.json'
import { useState } from 'react'

export default function WorkCarousel() {
    const carouselLength = data.projects.length
    const [position, setPosition] = useState(1)
    const [projectImage, setProjectImage] = useState(CMA)

    return (
        <>
            <CarouselSlide
                name={data.projects[position].name}
                description={data.projects[position].desc}
                year={data.projects[position].project_year}
                src={projectImage.src}
                alt={data.projects[position].img_alt}
            />
        </>
    );
}
