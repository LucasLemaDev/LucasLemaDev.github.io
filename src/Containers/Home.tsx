import React from 'react'
import styles from '../assets/styles/Intro.module.scss'
import foto from '../assets/images/eu2.jpg'
import GitIcon from '../assets/svgs/github.svg?react'
import LinkedInIcon from '../assets/svgs/linkedin.svg?react'
import HtmlIcon from '../assets/svgs/html.svg?react'
import CssIcon from '../assets/svgs/css.svg?react'
import JsIcon from '../assets/svgs/javascript.svg?react'
import TsIcon from '../assets/svgs/typescript.svg?react'
import CsharpIcon from '../assets/svgs/csharp.svg?react'
import PowerShellIcon from '../assets/svgs/powershell.svg?react'
import NodeIcon from '../assets/svgs/node-js.svg?react'
import SassIcon from '../assets/svgs/sass.svg?react'
import ReactIcon from '../assets/svgs/react.svg?react'
const Home = () => {
  return (
    <div className={styles.about} id='hero'>
        <div className={`${styles.div} container`}>
            <div className={styles.aboutMe}>
              <div>
                <h1 className='title'>Engenheiro de Software</h1>
                <p>
                Olá, eu sou Lucas Lema. Sou um Engenheiro de Software com especialidade em Full-Stack apaixonado por tecnologia localizado no Rio de Janeiro, Brazil 🏖. 
                </p>
                <p className={styles.profiles}>
                  <a href="https://github.com/LucasLemaDev"  title='Github Profile'  target='_blank'><GitIcon  fill='#ffffff'/></a>
                  <a href="https://www.linkedin.com/in/lucas-lema-9411651a0/" title='Linkedin Profile' target='_blank'><LinkedInIcon  fill='#ffffff'/></a>
                </p>
              </div>
            </div>
            <div className={styles.photo}>
              <div className={styles.box}/>
              <img src={foto}></img>
            </div>
        </div>
        <div className={`${styles.techStack} container`}>
          <h3>Tecnologias |</h3>
          <ul>
              <li title='Html'><HtmlIcon /></li>
              <li title='Css'><CssIcon/></li>
              <li title='Javascript'><JsIcon/></li>
              <li title='Typescript'><TsIcon/></li>
              <li title='.Net C#'><CsharpIcon/></li>
              <li title='PowerShell'><PowerShellIcon/></li>
              <li title='Node'><NodeIcon/></li>
              <li title='React'><ReactIcon/></li>
              <li title='Sass'><SassIcon/></li>
          </ul>
        </div>
    </div>
  )
}

export default Home