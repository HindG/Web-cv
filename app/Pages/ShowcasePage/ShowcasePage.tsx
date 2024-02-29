import Title from "@/app/Components/Title"

const containerStyle = { backgroundColor: "#5271FF", height: "826px", display: "flex", alignItems: "center", justifyContent: "center" }

export default function ShowcasePage() {
    return (
        <section style={containerStyle}>
            <Title title="Here's a showcase of my work!" color="#ffffff" />
        </section>
    )
}