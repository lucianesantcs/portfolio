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
              Tenho 26 anos, sou amante de tecnologia e design. 6+ anos sendo autodidata na
              programação começando com os pilares do front-end nas linguagens html e css, mais
              tarde o javascript. Portanto possuo conhecimento em{" "}
              <u className="underline">HTML5, CSS3 e JavaScript</u>. No momento estou estudando{" "}
              <u className="underline">ReactJS</u> e meu foco é apenas no front-end e na linguagem{" "}
              <u className="underline">JavaScript</u>, mas tenho interesse em{" "}
              <u className="underline">UI Design</u> e uso <u className="underline">Figma</u> para
              criação de interfaces. Também tenho familiaridade com{" "}
              <u className="underline">Adobe Photoshop</u> para edição de imagens.
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
