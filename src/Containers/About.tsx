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
                  Como Engenheiro de Software tenho me especializado em tecnologias full stack,  posssuindo um arsenal de habilidades em HTML, CSS, JavaScript, TypeScript, React, SCSS, .Net Framework, C#, Node e Powershell. Participei de equipes multifuncionais, internacionais e de projetos ágeis. Minhas maiores atuações foram no desenvolvimento, implementação e otimização de APIs, desenvolvimento de aplicativos desktop e web, desenvolvimento de monitoramentos e sustentação de sistemas principalmente para grandes empresas do setor de Óleo e Energia.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About