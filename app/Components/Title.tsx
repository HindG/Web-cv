import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

const nameStyle = { fontSize: "54px", color: "#ffffff", marginBottom: "40px", marginTop: "15px", fontWeight: "800" }

export default function Title({ title, size, color }: { title?: string, size?: number, color?: string }) {
    return (
        title ?
            <h2 className={league_spartan.className} style={{ fontSize: `${size}px`, color }}>
                {title}
            </h2>
            :
            <h1 className={league_spartan.className} style={nameStyle}>
                Hind Guessous
            </h1>
    )
}