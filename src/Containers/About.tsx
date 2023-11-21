import React from 'react'
import WorkSpaceImg from '../assets/images/workspace.jpg'
import styles from '../assets/styles/About.module.scss'

const About = () => {
  return (
    <div className={styles.about} id='sobre'>
        <div className={`${styles.aboutDiv} container`}>
            <img src={WorkSpaceImg} alt="" />
            <div className={styles.content}>
                <h3 className='title'>Sobre Mim</h3>
                <h2>Profissional dedicado localizado no Rio de Janeiro, Brasil📍</h2>
                <p>
                    Como Desenvolvedor FullStack Jr com 2 anos de experiência, tenho me expecializado em tecnologias full stack participando de projetos agéis. Minhas maiores atuações foram com .Net C# no desenvolvimento backend e React.Js no desenvolvimento Frontend em projetos ligados principalmente à área de Óleo e Energia.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About