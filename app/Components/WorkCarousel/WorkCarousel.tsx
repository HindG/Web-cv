"use client"
import ArrowRight from './fleche-droite.png'
import ArrowLeft from './fleche-gauche.png'
import data from '../../Data/work.json'
import './WorkCarousel.css'
import { useState } from 'react'
import Image from 'next/image'

export default function WorkCarousel() {
    const carouselLength = data.projects.length
    const [position, setPosition] = useState(0)

    return (
        <div className="workcarousel__container">
            {position > 0 && <img
                src={ArrowLeft.src}
                alt="left arrow"
                style={{ width: "40px", position: "absolute", top: "calc(50% - 20px)", left: "-60px", cursor: "pointer" }}
                onClick={() => {
                    setPosition(position - 1)

                }}
            />}
            <div className="workcarousel__datacontainer">
                <h4 className="workcarousel__projectname">{data.projects[position].name}</h4>
                <p className="workcarousel__projectdesc">{data.projects[position].desc}</p>
                <p className="workcarousel__projecttechno">{data.projects[position].techno}</p>
                <span className="workcarousel__projectyear">{data.projects[position].project_year}</span>
            </div>
            <Image
                src={data.projects[position].img_src}
                alt={data.projects[position].img_alt}
                className="workcarousel__img"
                width={800}
                height={500}
                unoptimized
            />
            {position < (carouselLength - 1) && <img
                src={ArrowRight.src}
                alt="right arrow"
                style={{ width: "40px", position: "absolute", top: "calc(50% - 20px)", right: "-60px", cursor: "pointer" }}
                onClick={() => setPosition(position + 1)}
            />}
            <span className="workcarousel__projectposition">{`${position + 1}/${carouselLength}`}</span>
        </div>
    );
}
