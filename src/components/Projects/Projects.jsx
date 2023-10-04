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
    <section className={styles.container} id="projects">
      <h2 className={styles.titleContainer}>Projetos</h2>
      <div className={styles.content}>
         <div className={styles.card}>
            <h3 className={styles.titleCard}>To Do</h3>
            <img src={getImageUrl("projects/toDo1.png")} alt="toDO" className="img" />

            <p className={styles.description}>Projeto To Do Avançado, no qual estão disponíveis funcionalidades para adicionar, editar e remover 
            tarefas inseridas pelo usuário. Além disso, uma vez adicionadas, as tarefas podem ser marcadas como concluídas. Há também a funcinalidade de filtar as tarefas inseridas. Meu papel neste 
            projeto foi como programadora frontend, focando em resolver possíveis problemas de usabilidade. Assim, pude garantir um resultado final 
            com uma interface simples, intuitiva e funcional para a lista de tarefas.</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur/projetos-javascript'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://gabriellamansur.github.io/projetos-javascript/06-toDo/'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>Projeto 1</h3>
            <img src={getImageUrl("projects/ods2.png")} alt="siteODS2"  />
            <p className={styles.description}>Site do Objetivo de Desenvolvimento 2: Fome Zero, desenvolvido durante o curso ElasNaTech da JA Brasil. O site contém informações, 
            imagens e vídeos relacionados ao ODS2. A página é completamente responsiva, com um menu mobile, cards que possuem botões Leia Mais e uma seta que leva de volta ao topo
            da página, entre outros recursos. Minha atuação neste projeto foi como programadora frontend, além de ser responsável por escrever o conteúdo dos textos a partir de pesquisas 
            e projetar toda a estrutura de design.
            </p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur/ElasnaTech'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://gabriellamansur.github.io/ElasnaTech/fomeZero/'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>Respire!</h3>
            <img src={getImageUrl("projects/relax.png")} alt="relax"  />
            <p className={styles.description}>Respire! é uma pequena aplicação feita em JavaScript com animações CSS. Ela ajuda a realizar um exercício de respiração para controlar a ansiedade 
            e promover a calma. Meu papel neste projeto também foi como programadora frontend, sendo responsável por implementar as funcionalidades e escolher um design com uma paleta de cores suave 
            e agradável. Respire! é prático e simples, e pode ser utilizado em smartphones, tablets e desktops.</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>HTML</li>
                <li className={styles.skill}>CSS</li>
                <li className={styles.skill}>JavaScript</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://github.com/GabriellaMansur/relaxe-app'>

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://gabriellamansur.github.io/relaxe-app/'>

                      <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                  </a>
            </div>
          </div>


        
      </div>
    </section>
  )
}
