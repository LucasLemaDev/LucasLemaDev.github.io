import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../assets/styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={`container ${styles.footer}`}>
      <span>Copyright © 2023. Alguns direitos Reservados.</span>

      <div className={styles.links}>
        <a href="https://github.com/LucasLemaDev"  title='Github Profile'  target='_blank'>
          <FontAwesomeIcon icon={faGithub} color='white' size='1x'/>
        </a>
        <a href="https://www.linkedin.com/in/lucas-lema-9411651a0/" title='Linkedin Profile' target='_blank' >
          <FontAwesomeIcon icon={faLinkedin} color='white' size='1x' />
        </a>
      </div>
    </div>
  )
}

export default Footer