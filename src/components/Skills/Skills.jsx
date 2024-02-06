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
                        <p>Serviço de análise de negócios e análise de dados da Microsoft</p>
                    </div>
                    <img src={getImageUrl("skills/power_bi.png")} alt="Power BI" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>Power BI</p>
            </div>

            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>É um editor de planilhas produzido pela Microsoft</p>
                    </div>
                    <img src={getImageUrl("skills/excel.png")} alt="Excel" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>Excel</p>
            </div>

            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Linguagem de consultas para armazenar e processar informações de banco de dados relacionais.</p>
                    </div>
                    <img src={getImageUrl("skills/sql.png")} alt="SQL" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>SQL</p>
            </div>

            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>É uma linguagem de programação de alto nível</p>
                    </div>
                    <img src={getImageUrl("skills/python.png")} alt="Python" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>Python</p>
            </div>

            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Processo de aplicação de técnicas estatísticas e lógicas para avaliar alguns tipos de informações</p>
                    </div>
                    <img src={getImageUrl("skills/analise_de_dados.png")} alt="Análise de dados" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>Análise de dados</p>
            </div>

            <div className={styles.content}>
                <div className={styles.mySkills}>
                    <div className={styles.info}>
                        <p>Coleta, organização, análise e monitoramento de informações para suporte a gestão de negócios</p>
                    </div>
                    <img src={getImageUrl("skills/bi.png")} alt="bi" className={styles.skillLogo}/> 
                </div>
                <p className={styles.titleIcon}>Business Intelligence</p>
            </div>

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

        </div>
        <div className={styles.bottom}></div>
    </section>
  )
}
