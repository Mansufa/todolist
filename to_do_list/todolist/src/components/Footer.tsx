
import { GithubLogo, InstagramLogo, LinkedinLogo, FacebookLogo, TwitchLogo, TwitterLogo } from "phosphor-react"
import style from "./Footer.module.css"

export function Footer() {

    const anoAtual = new Date().getFullYear()

    return (
        <div className={style.container}>

            <div className={style.logos}>
                <a  href="https://www.instagram.com/pinhofellipe/" target="_blank" type="button">
                    <InstagramLogo size={30} />
                </a>
                <a href="https://www.linkedin.com/in/fellipe-pinho/"  target="_blank"type="button">
                    <LinkedinLogo size={30} />
                </a>
                <a href="https://github.com/mansufa"  target="_blank"type="button">
                    <GithubLogo size={30} />
                </a>
                <a href="https://www.facebook.com/fellipe.rpinho"  target="_blank"type="button">
                    <FacebookLogo size={30} />
                </a>
                <a href="https://www.twitch.tv/mansufa94"  target="_blank"type="button">
                    <TwitchLogo size={32} />
                </a>
                <a href="https://twitter.com/FellipePinho1"  target="_blank"type="button">
                    <TwitterLogo size={32} />
                </a>
            </div>

            <div className={style.text}>
                <strong>
                    {/* Créditos a Ikaro Bruno da Mata Monatanri */}
                    Adaptado por Fellipe Pinho
                </strong>
                <p>{anoAtual}</p>
            </div>

        </div>
    )
}