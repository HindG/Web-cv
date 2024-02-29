import Title from '../../Components/Title'
import portrait from './portrait.png'

const containerStyle = { backgroundColor: "#23295A", height: "826px", position: "relative" } as React.CSSProperties;
const nameContainerStyle = { width: "280px", textAlign: "center", position: "absolute", top: "calc(50% - 110px)", left: "calc(25% - 140px)" } as React.CSSProperties;
const textStyle = { fontWeight: "600", color: "#ffffff", fontSize: "20px" }
const imgStyle = { position: "absolute", top: "calc(50% - 200px)", right: "calc(25% - 200px)", width: "400px" } as React.CSSProperties;

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