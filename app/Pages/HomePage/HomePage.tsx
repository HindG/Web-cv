import Title from '@/app/Components/Title/Title'
import portrait from './portrait.png'

const containerStyle = { backgroundColor: "#23295A", height: "826px", display: "flex", alignItems: "center", justifyContent: "center" }
const nameContainerStyle = { width: "280px", textAlign: "center", margin: "auto" } as React.CSSProperties
const textStyle = { fontWeight: "600", color: "#ffffff", fontSize: "22px" }
const imgStyle = { width: "400px", height: "400px", margin: "auto" }

export default function HomePage() {
    return (
        <section style={containerStyle}>
            <div style={nameContainerStyle}>
                <span style={textStyle}>Hi everyone, my name is</span>
                <Title />
                <span style={textStyle}>I'm a Front-end web developer</span>
            </div>
            <img src={portrait.src} alt="Portrait" style={imgStyle} />
        </section>
    )
}