import React from "react";
import * as FiIcons from "react-icons/fi";
import Head from "../Components/Head";

import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head title="Contato" description="Onde me encontrar" />
      <section className={`${styles.contact} animeLeft`}>
        <div className={styles.contactContent}>
          <div className={styles.contactContentItem}>
            <h2>Onde me encontrar</h2>
            <p>
              Entre em contato através das minhas redes sociais ou enviando um e-mail para{" "}
              <a href="mailto:lucianesantcs@gmail.com">
                <u className={styles.underline}>
                  <strong>lucianesantcs@gmail.com</strong>
                </u>
              </a>{" "}
              para assuntos sobre contratação em vagas Front-End Júnior, freelance em projetos
              pequenos, colaborações, ou até mesmo se precisar de ajuda com algum projeto.
            </p>
          </div>
          <div className={styles.contactContentItemHorizontalDivider}></div>
          <nav className={styles.contactContentItem}>
            <ul className={styles.contactSocial}>
              <li>
                <FiIcons.FiGithub />
                <a href="https://github.com/lucianesantcs" target="_blank" rel="noreferrer">
                  <span>Github</span>
                </a>
              </li>
              <li>
                <FiIcons.FiLinkedin />
                <a
                  href="https://www.linkedin.com/in/lucianesantcs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Linkedin</span>
                </a>
              </li>
              <li>
                <FiIcons.FiDribbble />
                <a href="https://dribbble.com/lucianesantos" target="_blank" rel="noreferrer">
                  <span>Dribbble</span>
                </a>
              </li>
              <li>
                <FiIcons.FiMail />
                <a href="mailto:lucianesantcs@gmail.com">
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Contact;
