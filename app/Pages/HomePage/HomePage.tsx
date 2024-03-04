import Title from '@/app/Components/Title/Title'
import portrait from './portrait.png'
import './HomePage.css'

export default function HomePage() {
    return (
        <section className="containerStyle">
            <div className="nameContainerStyle">
                <span className="textStyle">Hi everyone, my name is</span>
                <Title />
                <span className="textStyle">I'm a Front-end web developer</span>
            </div>
            <img src={portrait.src} alt="Portrait" className="imgStyle" />
        </section>
    )
}