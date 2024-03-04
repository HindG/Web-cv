import { League_Spartan } from 'next/font/google'
import './Titles.css'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

export default function Title({ title, color }: { title?: string, color?: string }) {
    return (
        title ?
            <h2 className={league_spartan.className} style={{ fontSize: "40px", color, fontWeight: "700" }}>
                {title}
            </h2>
            :
            <h1 className={`${league_spartan.className} nameStyle`}>
                Hind Guessous
            </h1>
    )
}