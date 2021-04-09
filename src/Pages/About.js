import React from "react";
import * as FiIcons from "react-icons/fi";

import "./About.css";
import icon from "../assets/icon.jpeg";
import Head from "../Components/Head";

function About() {
  return (
    <>
      <Head title="Sobre" description="Desenvolvedora front-end e UI Designer" />
      <main className="about animeLeft">
        <div className="about-content">
          <div className="about-content-item">
            <img src={icon} alt="" className="about-image" />
          </div>
          <div className="about-content-item">
            <h1>Luciane Santos</h1>
            <h3>
              Front-End developer & {"\n"}
              UI Designer
            </h3>
            <p>
              6+ anos sendo autodidata no mundo da programação começando com os pilares do Front-End
              com as linguagens HTML e CSS, um pouco mais tarde o Javascript. Possuo conhecimento em{" "}
              <u className="underline">HTML5 e CSS3</u>. No momento estou estudando{" "}
              <u className="underline">ReactJS</u> e procurando me aprofundar mais na linguagem{" "}
              <u className="underline">Javascript</u>, sendo meu foco nela e no front-end, mas tenho
              interesse em <u className="underline">UI Design</u> e uso{" "}
              <u className="underline">Figma</u> para criação de interfaces. Também tenho
              familiaridade com <u className="underline">Adobe Photoshop</u> para edição de imagens.
            </p>
          </div>
          <nav className="about-content-item">
            <ul className="about-social">
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
