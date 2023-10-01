import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faLaptop
} from '@fortawesome/free-solid-svg-icons'



export const Projects = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleContainer}>Projetos</h2>
      <div className={styles.content}>
         <div className={styles.card}>
            <h3 className={styles.titleCard}>Projeto 1</h3>
            <img src={getImageUrl("projects/projeto1.jpeg")} alt="projeto1"  />
            <p className={styles.description}> inus autem sit inventore perspiciatis at nam modi necessitatibus quibusdam ut, rerum cupiditate est magnam?ubhdihsvcfiavfieavyfuif</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>Projeto 1</h3>
            <img src={getImageUrl("projects/projeto1.jpeg")} alt="projeto1"  />
            <p className={styles.description}> inus autem sit inventore perspiciatis at nam modi necessitatibus quibusdam ut, rerum cupiditate est magnam?ubhdihsvcfiavfieavyfuif</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>Projeto 1</h3>
            <img src={getImageUrl("projects/projeto1.jpeg")} alt="projeto1"  />
            <p className={styles.description}> inus autem sit inventore perspiciatis at nam modi necessitatibus quibusdam ut, rerum cupiditate est magnam?ubhdihsvcfiavfieavyfuif</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>


        
      </div>
    </section>
  )
}
