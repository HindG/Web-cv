import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({
    weight: ["700", "800"],
    subsets: ['latin'],
})

export default function Title({ title }: { title: string }) {
    return (
        <h2 className={league_spartan.className}>
            {title}
        </h2>
    )
}