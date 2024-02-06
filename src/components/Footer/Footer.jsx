import styles from "./Footer.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'




export const Footer = () => {
  return (
    <section className={styles.container}>
 
    
     



      <div className={styles.myInformation}>
        
        <div className={styles.credits}>
          <h3>Créditos</h3>
          <ul>
            <li>
              <a target='_blank' rel='noreferrer' href="https://fontawesome.com/">Font Awesome</a>
            </li>
            <li>
              <a target='_blank' rel='noreferrer' href="https://codepen.io/">Codepen</a>
            </li>
            <li>
              <a target='_blank' rel='noreferrer' href="https://www.freecodecamp.org/">freeCodeCamp</a>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
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
        </div>
      </div>
      <div className={styles.name}>
        <h3>Gabriella Mansur Mesquita</h3>
        <p>gabriellamesquita314@gmail.com</p>
      </div>
    </section>
  )
}
