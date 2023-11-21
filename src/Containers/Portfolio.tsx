import React from 'react'
import styles from '../assets/styles/Portfolio.module.scss'
import HtmlIcon from '../assets/svgs/html.svg?react'
import CssIcon from '../assets/svgs/css.svg?react'
import JsIcon from '../assets/svgs/javascript.svg?react'
import ReactIcon from '../assets/svgs/react.svg?react'
import TestImage from '../assets/images/dogs-screenshot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Portfolio = () => {
  return (
    <div id='portfolios' className={styles.portfolio}>
        <div className="container">
            <h3 className="title"> Portfolios</h3>
            <h2> Cada projeto é um pedaço unico de Desenvolvimento 🧩</h2>
            <ul className={styles.portfolioList}>
                <li className={styles.portfolioItem}>
                    <div className={styles.portfoliContent}>    
                        <h2>Dogs</h2>
    
                        <p>
                            Dogs é uma rede social que permite os usuários interagirem e demonstrarem seu amor por seus cachorrinhos. Esse site permite uma interface de postagens e comentários assim como o controle das postagens realizadas e seus acessos no perfil do usuário.  
                        </p>

                        <ul className={styles.techStack}>
                            <li title='Html'><HtmlIcon /></li>
                            <li title='Css'><CssIcon/></li>
                            <li title='Javascript'><JsIcon/></li>
                            <li title='React'><ReactIcon/></li>
                        </ul>
                        <ul className={styles.portfolioDemo}>
                            <li>
                                <a href="https://github.com/dogsorg/dogsorg.github.io" target='_blank'>
                                    <span>Code</span>
                                    <FontAwesomeIcon icon={faGithub} size='xl'></FontAwesomeIcon>
                                </a>
                            </li>
                            <li>
                                <a href='https://dogsorg.github.io' target='_blank'>
                                    <span>Live Demo</span>
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x'></FontAwesomeIcon>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.siteContainer}>
                        <a href='https://dogsorg.github.io' target='_blank'>
                             <img className={styles.port1} src={TestImage} alt="" />
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Portfolio