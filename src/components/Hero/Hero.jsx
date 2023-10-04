import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
 faDownload,
 faEnvelope
} from '@fortawesome/free-solid-svg-icons'



{/*import React from 'react'*/}

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Gabriella Mansur</h1>
            <h2 className={styles.description}> Frontend / HMTL / CSS / JavaScript / ReactJS / Bootstrap / SQL / MySQL / SQL Server / Estudante de Análise e desenvolvimento de sistemas</h2>
            <div className={styles.aqui}>
              <div className={styles.containerBtn}>
                  <a 
                    className={styles.contactBtn} 
                    href={getImageUrl("cv/cvGabriella.pdf")} download>Download CV{' '}
                    <FontAwesomeIcon icon={faDownload} ></FontAwesomeIcon> 
                  </a>
              </div> 
                
              <div className={styles.contentBtn}>
                
                  <a 
                    
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://www.linkedin.com/in/gabriella-m-mansur-mesquita/'>

                      <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  
                  <a 
                     
                      href='#contact'>

                      <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </a>
            </div>

          </div>
          </div>
        <img src={getImageUrl("images/MyLogo.png")} alt="my-logo" className={styles.heroImg}  />
       
        <div className={styles.topBlur}></div>
        <div className={styles.containerFixed}></div>
    </section>
   

  )
}
