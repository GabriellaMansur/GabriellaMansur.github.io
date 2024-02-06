import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faExternalLink,
  faFolder,
  faFolderBlank,
  faFolderClosed,
  faFolderMinus,
  faFolderOpen,
  faFolderPlus,
  faFolderTree,
  faLaptop
} from '@fortawesome/free-solid-svg-icons'



export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.titleContainer}>Projetos</h2>
      <div className={styles.content}>

          <div className={styles.card}>
            <h3 className={styles.titleCard}>Relatório Detalhado de Vendas</h3>
            <img src={getImageUrl("projects/Relatório Detalhados de Vendas.png")} alt="toDO" className="img" />

            <p className={styles.description}>Dashboard criado utilizando Power BI, no qual as métricas de vendas são exibidas. Para isso, foi 
            realizada uma limpeza dos dados, corrigindo linhas em branco e informações duplicadas. Além disso, foram aplicadas técnicas de análise 
            de dados para fornecer insights valiosos e facilitar a tomada de decisões baseada em dados.</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>BI</li>
                <li className={styles.skill}>Power BI</li>
                <li className={styles.skill}>ETL</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/1oyg7BFkzbsOyOO3pffoqZsOt-2hnaJ8R/view?usp=sharing'>

                      <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/1GzhpaxRxy3Dao3VqaAx6nNGMrN86rb8B/view?usp=sharing'>

                      <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                  </a>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.titleCard}>Relatório de Faturamento</h3>
            <img src={getImageUrl("projects/Relatório de Vendas.png")} alt="toDO" className="img" />

            <p className={styles.description}>Relatório de faturamento simplificado, criado para exibir o faturamento total, o lucro da empresa, e o faturamento por tipo e marca. Este relatório fornece uma visão clara e concisa do desempenho financeiro da empresa, facilitando a análise e a tomada de decisões baseadas em dados. 
            Além disso, permite identificar tendências e padrões relacionados ao faturamento e ao lucro da empresa.</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>Power BI</li>
                <li className={styles.skill}>BI</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/149gLaXmlmInNJHhjhshtoEsTVZK4cB__/view?usp=sharing'>

                      <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/1_hxXsjCTMe3bDAoNxxQ-9Mpfefw2uiQS/view?usp=sharing'>

                      <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                  </a>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.titleCard}>Relatório de Produtos Vendidos</h3>
            <img src={getImageUrl("projects/Produtos Vendidos.png")} alt="toDO" className="img" />

            <p className={styles.description}>Este é um relatório simplificado de produtos vendidos que apresenta o total de vendas, o produto mais vendido, o produto menos vendido, as vendas por mês, o total de vendas por produto e as vendas por região. 
            Ele fornece uma visão clara do desempenho de vendas, permitindo identificar tendências e tomar decisões informadas.</p>
            <ul className={styles.skills}>
                <li className={styles.skill}>Power BI</li>
                <li className={styles.skill}>BI</li>
            </ul>
            <div className={styles.links}>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/1l-kaHBtbuMlEtIdaPwjglEoVfbL53AoZ/view?usp=sharing'>

                      <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
                  </a>
                  <a 
                      target='_blank' 
                      rel='noreferrer' 
                      href='https://drive.google.com/file/d/1kkDo3mSdOp8KL3BJzePcwTuWOqUexmp9/view?usp=sharing'>

                      <FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon>
                  </a>
            </div>
          </div>

          <div className={styles.card}>
            <h3 className={styles.titleCard}>Site ODS2</h3>
            <img src={getImageUrl("projects/ods2.png")} alt="siteODS2"  />
            <p className={styles.description}>No curso ElasNaTech da JA Brasil, desenvolvi o site do Objetivo de Desenvolvimento 2: Fome Zero. 
            O site responsivo apresenta informações, imagens e vídeos sobre o ODS2, com recursos como menu mobile, botões Leia Mais nos cards e 
            uma seta para voltar ao topo. Como programadora frontend, escrevi o conteúdo e projetei a estrutura de design.
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
            <h3 className={styles.titleCard}>To Do</h3>
            <img src={getImageUrl("projects/toDo1.png")} alt="toDO" className="img" />

            <p className={styles.description}>No Projeto To Do Avançado, como programadora frontend, implementei funcionalidades para adicionar, 
            editar, remover e filtrar tarefas. As tarefas podem ser marcadas como concluídas, garantindo uma interface simples e intuitiva para a 
            lista de tarefas.</p>
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

                      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                  </a>
            </div>
          </div>
          <div className={styles.card}>
            <h3 className={styles.titleCard}>Respire!</h3>
            <img src={getImageUrl("projects/relax.png")} alt="relax"  />
            <p className={styles.description}>Respire! é uma aplicação em JavaScript com animações CSS para exercícios de respiração que controlam 
            a ansiedade. Como programadora frontend, implementei as funcionalidades e escolhi um design suave. A aplicação é prática, simples e 
            compatível com smartphones, tablets e desktops.</p>
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
