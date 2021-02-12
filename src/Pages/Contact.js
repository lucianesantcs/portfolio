import React from "react";
import * as FiIcons from "react-icons/fi";
import Head from "../Components/Head";

import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Head title="Contato" description="Onde me encontrar" />
      <section className="contact animeLeft">
        <div className="contact-content">
          <div className="contact-content-item">
            <h2>Onde me encontrar</h2>
            <p>
              Entre em contato através das minhas redes sociais ou enviando um e-mail para{" "}
              <a href="mailto:lucianesantcs@gmail.com">
                <u className="underline">
                  <strong>lucianesantcs@gmail.com</strong>
                </u>
              </a>{" "}
              para assuntos sobre contratação em vagas Fron-End Júnior, freelance em projetos
              pequenos, ou até mesmo se precisar de ajuda com algum projeto.
            </p>
          </div>
          <div className="contact-content-item-horizontal-divider"></div>
          <nav className="contact-content-item">
            <ul className="contact-social">
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
