import Title from "@/app/Components/Title/Title"
import './ThingsILovePage.css'
import Bowl from './love-bowl.png'
import Beach from './love-plage.png'

export default function ThingsILovePage() {
    return (
        <section className="thingsilove__container">
            <Title title="Things I Love" color="#ffffff" size={60} />
            <div className="thingsilove__imgcontainer">
                <img
                    src={Beach.src}
                    alt="Marseille's beach"
                    className="thingsilove__img thingsilove__imgbeach" />
                <img
                    src={Bowl.src}
                    alt="Rollerskating in Marseille's Bowl of Prado"
                    className="thingsilove__img thingsilove__imgroller" />
            </div>
            <p className="thingsilove__text">I teach rollerdance and created a roller skate collective in Marseille</p>
        </section>
    )
}
