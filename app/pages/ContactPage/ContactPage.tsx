import Title from "@/app/Components/Title/Title"
import Image from "next/image"
import './ContactPage.css'

export default function ContactPage() {
    return (
        <section className="contact__container">
            <div className="contact__insidecontainer contact__insidecontainerleft">
                <Title title="Looking forward to working with everyone!" color="#424242" size={52} />
            </div>
            <div className="contact__insidecontainer">
                <span className="contact__categoryname">Email Address</span>
                <span className="contact__categorycontent">guessoushind[@]gmail.com</span>
                <span className="contact__categoryname">My socials</span>
                <div>
                    <a href="https://www.linkedin.com/in/hindguessous/" target="_blank">
                        <Image
                            src="/linkedin.png"
                            alt="LinkedIn"
                            className="contact__icon"
                            width={35}
                            height={35}
                            unoptimized
                        />
                    </a>
                    <a href="https://github.com/HindG" target="_blank">
                        <Image
                            src="/github.png"
                            alt="Github"
                            className="contact__icon"
                            width={35}
                            height={35}
                            unoptimized
                        />
                    </a>
                </div>
            </div>
        </section>
    )
}
