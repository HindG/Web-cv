import { League_Spartan } from 'next/font/google'
import './QuickFact.css'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

export default function QuickFact({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="containerStyle">
            <h4 className={`${league_spartan.className} titleStyle`}>{title}</h4>
            <p className="subtitleStyle">{subtitle}</p>
        </div>
    )
}