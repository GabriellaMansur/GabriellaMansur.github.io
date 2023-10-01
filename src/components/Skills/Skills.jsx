import styles from "./Skills.module.css"
import { getImageUrl } from "../../utils";


export const Skills = () => {
  return (
    <section  className={styles.container} id="skills">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.skillContainer}>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Linguagem de marcação para a construção de páginas web</p>
                    </div>
                    <img src={getImageUrl("skills/html.png")} alt="HMTL" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>HTML5</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Linguagem de estilo</p>
                    </div>
                    <img src={getImageUrl("skills/css.png")} alt="HMTL" className={styles.skillLogo} />
                </div>
                <p className={styles.titleIcon}>CSS3</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                <div className={styles.info}>
                        <p>Linguagem de programação</p>
                    </div>
                    <img src={getImageUrl("skills/javascript.png")} alt="HMTL" className={styles.skillLogo}/>
                </div>
                <p className={styles.titleIcon}>JavaScript</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                <div className={styles.info}>
                        <p>Biblioteca front-end JavaScript</p>
                    </div>
                    <img src={getImageUrl("skills/react.png")} alt="HMTL" className={styles.skillLogo}/>
                </div>
                <p className={styles.titleIcon}>React</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Sistema de controle de versões distribuído</p>
                    </div>
                    <img src={getImageUrl("skills/git.png")} alt="HMTL" className={styles.skillLogo}/>
                </div>
                <p className={styles.titleIcon}>Git</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                <div className={styles.info}>
                        <p>Framework front-end que fornece estruturas de CSS</p>
                    </div>
                    <img src={getImageUrl("skills/bootstrap.png")} alt="HMTL" className={styles.skillLogo}/>
                </div>
                <p className={styles.titleIcon}>Boostrap</p>
            </div>
            <div className={styles.content}>
                <div className={styles.mySkills}>
                <div className={styles.info}>
                        <p>Linguagem de extensão do CSS</p>
                    </div>
                    <img src={getImageUrl("skills/sass.png")} alt="HMTL" className={styles.skillLogo}/>
                </div>
                <p className={styles.titleIcon}>Sass</p>
            </div>



            <div className={styles.content}>
                <div className={styles.mySkills}>
                <div className={styles.info}>
                        <p>Estrutura ágil de gestão de projetos </p>
                    </div>
                    <img src={getImageUrl("skills/scrum.png")} alt="HMTL" className={styles.skillLogo} />
                    
                </div>
                <p className={styles.titleIcon}>Scrum</p>
            </div>




        </div>
        <div className={styles.bottom}></div>
    </section>
  )
}
