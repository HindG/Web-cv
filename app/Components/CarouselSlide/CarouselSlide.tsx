import Image from "next/image"
import './CarouselSlide.css'

export default function CarouselSlide({ name, description, year, src, alt }: { name: string, description: string, year: number, src: string, alt: string }) {
    return (
        <div className="carouselslide__container">
            <div className="carouselslide__datacontainer">
                <h4>{name}</h4>
                <p>{description}</p>
                <span>{year}</span>
            </div>
            <img
                src={src}
                alt={alt}
                className="carouselslide__img"
            />
        </div>
    )
}