import { Open_Sans } from 'next/font/google'
import './Styles/reset-css.css'
import './HomePage.css'
import Title from './Components/Title/Title'
import portrait from './portrait.png'

const open_sans = Open_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={open_sans.className}>
      <section className="homepage__container">
        <div className="homepage__namecontainer">
          <span className="homepage__text">Hi everyone, my name is</span>
          <Title />
          <span className="homepage__text">I'm a Front-end web developer</span>
        </div>
        <img src={portrait.src} alt="Portrait" className="homepage__img" />
      </section>
    </main>
  );
}
