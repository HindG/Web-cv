import { League_Spartan } from 'next/font/google'
import './QuickFact.css'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

export default function QuickFact({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className="quickfact__container">
            <h4 className={`${league_spartan.className} quickfact__title`}>{title}</h4>
            <p className="quickfact__subtitle">{subtitle}</p>
        </div>
    )
}