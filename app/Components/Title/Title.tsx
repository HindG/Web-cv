import { League_Spartan } from 'next/font/google'
import './Titles.css'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

export default function Title({ title, color, size }: { title?: string, color?: string, size?: number }) {
    return (
        title ?
            <h2 className={league_spartan.className} style={{ fontSize: size ? `${size}px` : "40px", color, fontWeight: "700" }}>
                {title}
            </h2>
            :
            <h1 className={`${league_spartan.className} title__name`}>
                Hind Guessous
            </h1>
    )
}