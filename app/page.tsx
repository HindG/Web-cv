import { Open_Sans } from 'next/font/google'
import './Styles/reset-css.css'
import HomePage from './Pages/HomePage/HomePage'
import BackgroundPage from "./Pages/BackgroundPage/BackgroundPage"
import ShowcasePage from './Pages/ShowcasePage/ShowcasePage'
import ThingsILovePage from './Pages/ThingsILovePage/ThingsILovePage'
import ContactPage from './Pages/ContactPage/ContactPage'

const open_sans = Open_Sans({
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className={open_sans.className}>
      <HomePage />
      <BackgroundPage />
      <ShowcasePage />
      <ThingsILovePage />
      <ContactPage />
    </main>
  );
}
