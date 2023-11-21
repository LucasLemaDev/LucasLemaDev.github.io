import React from 'react'
import styles from '../assets/styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapPin, faPhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className={styles.contact} id='contato'>
        <div className='container'>
            <h3 className='title'>Contato</h3>
            <h2>
                Estou disponível para novos projetos. <br/> Entre em contato comigo para marcarmos uma conversa👋
            </h2>

            <div className={styles.dataContainer}>
              <div className={styles.data}>
                <FontAwesomeIcon icon={faEnvelope}/> 
                <div>
                  <h3>Mail</h3>
                  <a href='mailto:llematrab@gmail.com'>llematrab@gmail.com</a>
                </div>
              </div>
              
              <div className={styles.data}>
                <FontAwesomeIcon icon={faPhone}/>
                <div>
                  <h3>Celular</h3>
                  <span>+55 21 98345-1570</span>
                </div>
              </div>

              <div className={styles.data}>
                <FontAwesomeIcon icon={faMapPin}/>
                <div>
                  <h3>Localização</h3>
                  <span>Rio de Janeiro, Brasil</span>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Contact