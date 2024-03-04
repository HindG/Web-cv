import Title from "@/app/Components/Title/Title"
import WorkCarousel from "@/app/Components/WorkCarousel/WorkCarousel"
import './ShowcasePage.css'

export default function ShowcasePage() {
    return (
        <section className="containerStyle">
            <Title title="Here's a showcase of my work!" color="#ffffff" />
            <div className="carouselStyle">
                <WorkCarousel />
            </div>
        </section>
    )
}