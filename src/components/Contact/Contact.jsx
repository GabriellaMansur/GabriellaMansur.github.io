import styles from "./Contact.module.css";



export const Contact = () => {
  return (
    <section className={styles.containerContact}> 
      <h2 className={styles.title}>Entre em contato</h2>
      <div className={styles.containerForm}>
      
           
            <div className={styles.contentForm}>
                <form action="https://formsubmit.co/gabriellamansur314@gmail.com" method="POST" className={styles.form}> 
                    
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Nome"
                        name="name"
                        required 
                    />
                       
                    <input 
                        className={styles.input}
                        type="email"
                        placeholder="E-mail"    
                        name="email"
                        required
                    />
                
                    <input 
                        className={styles.input}
                        type="text"
                        placeholder="Assunto"    
                        name="subject"
                        required
                    />
                      
                    <textarea
                        className={styles.textarea}
                        placeholder="Mensagem"
                        name="message"
                        required
                    ></textarea>
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="submit" className={styles.button} value="ENVIAR" />
                       
                </form>
              

            </div>
            <div className={styles.containerEnvelope}>
                <div className={styles.envelope}>
                    <div className={styles.envelopeTab}></div>
                    <div className={styles.envelopeLetter}>
                        <p>Olá!</p>
                    </div>
                    <div className={styles.envelopeBase}></div>
                </div>
                <div className={styles.shadow}></div>
            </div>
    </div>
    
    </section>
  )
}
