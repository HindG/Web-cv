import QuickFact from '@/app/Components/QuicksFact.tsx/QuickFact'
import Title from '@/app/Components/Title/Title'

const containerStyle = { backgroundColor: "#422D73", height: "826px", display: "flex", alignItems: "center", justifyContent: "center" }
const leftSideStyle = { width: "50%" }
const titleContainerStyle = { width: "280px", margin: "auto" }
const factsContainer = { margin: "auto", width: "50%" }

export default function BackgroundPage() {
    return (
        <section style={containerStyle}>
            <div style={leftSideStyle}>
                <div style={titleContainerStyle}>
                    <Title title="A Quick Background" color="#ffffff" />
                </div>
            </div>
            <div style={factsContainer}>
                <QuickFact title="I'm based in" subtitle="Marseille, south of France" />
                <QuickFact title="My Experience" subtitle="I’ve been freelancing since July 2024, I worked as a Front-end developer for 2 years before that" />
                <QuickFact title="What I’m best at" subtitle="I specialized in front JavaScript technologies such as React.js and React Native" />
            </div>
        </section>
    )
}