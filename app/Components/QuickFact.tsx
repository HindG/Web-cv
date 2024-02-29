import { League_Spartan } from 'next/font/google'

const league_spartan = League_Spartan({
    subsets: ['latin'],
})

const containerStyle = { backgroundColor: "#ffffff", borderRadius: "15px", padding: "30px", margin: "auto auto 20px auto", width: "80%" }
const titleStyle = { fontSize: "19px", color: "#23295A", fontWeight: "600", textTransform: "uppercase", marginBottom: "10px" } as React.CSSProperties
const subtitleStyle = { fontSize: "18px" }

export default function QuickFact({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div style={containerStyle}>
            <h4 className={league_spartan.className} style={titleStyle}>{title}</h4>
            <p style={subtitleStyle}>{subtitle}</p>
        </div>
    )
}