import Title from '@/app/Components/Title/Title'
import portrait from './portrait.png'
import './HomePage.css'

export default function HomePage() {
    return (
        <section className="homepage__container">
            <div className="homepage__namecontainer">
                <span className="homepage__text">Hi everyone, my name is</span>
                <Title />
                <span className="homepage__text">I'm a Front-end web developer</span>
            </div>
            <img src={portrait.src} alt="Portrait" className="homepage__img" />
        </section>
    )
}