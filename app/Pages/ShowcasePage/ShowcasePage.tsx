import Title from "@/app/Components/Title/Title"
import WorkCarousel from "@/app/Components/WorkCarousel/WorkCarousel"

const containerStyle = { backgroundColor: "#5271FF", height: "826px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" } as React.CSSProperties
const carouselStyle = { width: "75%" }

export default function ShowcasePage() {
    return (
        <section style={containerStyle}>
            <Title title="Here's a showcase of my work!" color="#ffffff" />
            <div style={carouselStyle}>
                <WorkCarousel />
            </div>
        </section>
    )
}