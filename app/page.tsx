import HomePage from './Pages/HomePage/HomePage'
import { Open_Sans } from 'next/font/google'
import './reset-css.css'
import BackgroundPage from "./Pages/BackgroundPage/BackgroundPage"
import ShowcasePage from './Pages/ShowcasePage/ShowcasePage'
import ThingsILovePage from './Pages/ThingsILovePage/ThingsILovePage'

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
    </main>
  );
}
