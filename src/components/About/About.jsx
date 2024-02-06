import styles from "./About.module.css"; 


export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>Sobre mim</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
              <li className={styles.aboutItem}>
             
                <div className={styles.aboutItemText}>
                  <p>Cursando Análise e desenvolvimento de sistemas, sou autodidata e busco sempre aprender
                    com autonomia e com um olhar crítico diante do conhecimento. Tenho grande interesse pela área de desenvolvimento, 
                    em especial Dados e Business Intelligence.
                  </p>
                  <ul className={styles.skills}>
                      <li className={styles.skill}>Aprendizado contínuo</li>
                      <li className={styles.skill}>BI e Data Science</li>
                      <li className={styles.skill}>Tecnologia</li>
                  </ul>
                </div>
              </li>
              <li className={styles.aboutItem}>
                <div className={styles.aboutItemText}>
                  <p>Adquiri meus conhecimentos majoritariamente por cursos online e livros disponibilizados gratuitamente na internet. Além disso, sempre 
                    utilizo da prática constante para aprimorar e consolidar meus conhecimentos. Também possuo nível intermediário B2 em inglês.
                  </p>
                  <ul className={styles.skills}>
                      <li className={styles.skill}>JA Brasil</li>
                      <li className={styles.skill}>Curso em vídeo</li>
                      <li className={styles.skill}>Livros</li>
                      <li className={styles.skill}>Inglês</li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>
    </section>
  )
}
