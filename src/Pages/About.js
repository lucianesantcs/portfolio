import React from "react";
import * as FiIcons from "react-icons/fi";

import styles from "./About.module.css";
import icon from "../assets/icon.jpeg";
import Head from "../Components/Head";

function About() {
  return (
    <>
      <Head
        title="Sobre"
        description="Desenvolvedora front-end e UI Designer"
      />
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
              Autodidata no mundo da programação há{" "}
              <u className={styles.underline}>seis anos</u>, começando com os
              pilares do Front-End com as linguagens HTML, CSS, e JavaScript.
              Possuo conhecimento nos frameworks{" "}
              <u className={styles.underline}>Angular e React</u>, com foco
              apenas no <u className={styles.underline}>Front-End</u> e na
              linguagem <u className={styles.underline}>Javascript</u>, mas
              tenho interesse em <u className={styles.underline}>UI Design</u> e
              uso <u className={styles.underline}>Figma</u> para criação de
              interfaces.
            </p>
          </div>
          <nav className={styles.aboutContentItem}>
            <ul className={styles.aboutSocial}>
              <li data-tooltip="Github">
                <a
                  href="https://github.com/lucianesantcs"
                  target="_blank"
                  rel="noreferrer"
                >
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
                <a
                  href="https://dribbble.com/lucianesantos"
                  target="_blank"
                  rel="noreferrer"
                >
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
