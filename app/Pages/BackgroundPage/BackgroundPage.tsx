import QuickFact from '@/app/Components/QuicksFact.tsx/QuickFact'
import Title from '@/app/Components/Title/Title'
import './BackgroundPage.css'

export default function BackgroundPage() {
    return (
        <section className="background__container">
            <div className="background__leftside">
                <div className="background__titlecontainer">
                    <Title title="A Quick Background" color="#ffffff" />
                </div>
            </div>
            <div className="background__factscontainer">
                <QuickFact title="I'm based in" subtitle="Marseille, south of France" />
                <QuickFact title="My Experience" subtitle="I’ve been freelancing since July 2024, I worked as a Front-end developer for 2 years before that" />
                <QuickFact title="What I’m best at" subtitle="I specialized in front JavaScript technologies such as React.js and React Native" />
            </div>
        </section>
    )
}