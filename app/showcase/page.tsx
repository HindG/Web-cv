import Title from "@/app/Components/Title/Title"
import WorkCarousel from "@/app/Components/WorkCarousel/WorkCarousel"
import './ShowcasePage.css'

export default function ShowcasePage() {
    return (
        <section className="showcase__container">
            <Title title="Here's a showcase of my work!" color="#ffffff" />
            <WorkCarousel />
        </section>
    )
}