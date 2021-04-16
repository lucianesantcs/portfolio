import React from "react";
import * as FiIcons from "react-icons/fi";

import styles from "./About.module.css";
import icon from "../assets/icon.jpeg";
import Head from "../Components/Head";

function About() {
  return (
    <>
      <Head title="Sobre" description="Desenvolvedora front-end e UI Designer" />
      <main className={`${styles.about} animeLeft`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutContentItem}>
            <img src={icon} alt="" className={styles.aboutImage} />
          </div>
          <div className={styles.aboutContentItem}>
            <h1>Luciane Santos</h1>
            <h3>
              Front-End developer & {"\n"}
              UI Designer
            </h3>
            <p>
              6+ anos sendo autodidata no mundo da programação começando com os pilares do Front-End
              com as linguagens HTML e CSS, um pouco mais tarde o Javascript. Possuo conhecimento em{" "}
              <u className={styles.underline}>HTML5 e CSS3</u>. No momento estou estudando{" "}
              <u className={styles.underline}>ReactJS</u> e procurando me aprofundar mais na
              linguagem <u className={styles.underline}>Javascript</u>, sendo meu foco nela e no
              front-end, mas tenho interesse em <u className={styles.underline}>UI Design</u> e uso{" "}
              <u className={styles.underline}>Figma</u> para criação de interfaces. Também tenho
              familiaridade com <u className={styles.underline}>Adobe Photoshop</u> para edição de
              imagens.
            </p>
          </div>
          <nav className={styles.aboutContentItem}>
            <ul className={styles.aboutSocial}>
              <li data-tooltip="Github">
                <a href="https://github.com/lucianesantcs" target="_blank" rel="noreferrer">
                  <FiIcons.FiGithub />
                </a>
              </li>
              <li data-tooltip="Linkedin">
                <a
                  href="https://www.linkedin.com/in/lucianesantcs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiIcons.FiLinkedin />
                </a>
              </li>
              <li data-tooltip="Dribbble">
                <a href="https://dribbble.com/lucianesantos" target="_blank" rel="noreferrer">
                  <FiIcons.FiDribbble />
                </a>
              </li>
              <li data-tooltip="Email">
                <a href="mailto:lucianesantcs@gmail.com">
                  <FiIcons.FiMail />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}

export default About;
