import React, { useState } from "react";

import "./Projects.css";

import Head from "../Components/Head";

import Project from "../Components/Project";
import getCoffee from "../assets/projects/get-coffee.png";
import selfcare from "../assets/projects/selfcare.png";
import quizz from "../assets/projects/quizz.png";
import orcamento from "../assets/projects/orcamento.png";
import doe from "../assets/projects/doe.png";
import todo from "../assets/projects/todo.png";
import amazinggraph from "../assets/projects/amazinggraph.png";
import proffy from "../assets/projects/proffy.png";
import beTheHero from "../assets/projects/be-the-hero.png";

function Projects() {
  const [filter, setFilter] = useState("");

  const projects = [
    {
      projectImage: getCoffee,
      name: "get coffee",
      previewURL: "https://lucianesantcs.github.io/get-coffee-source/",
      githubURL: "https://github.com/lucianesantcs/get-coffee-source/",
      figmaURL: "https://www.figma.com/file/lVkh41YvYiMposXwaJXOYO/get-coffee-layout?node-id=0%3A1",
      tags: ["html", "css", "grid", "font-end", "mine", "ui-design", "responsive"],
      description: "Código da landing page Get Coffee do desafio no DevChallenge",
    },
    {
      projectImage: selfcare,
      name: "selfcare landing page",
      previewURL: "https://lucianesantcs.github.io/selfcare/",
      githubURL: "https://github.com/lucianesantcs/selfcare/",
      tags: ["html", "css", "flexbox", "font-end", "mine", "responsive"],
      description: "Landing page de uma loja online para produtos de beleza",
    },
    {
      projectImage: amazinggraph,
      name: "amazing-graph",
      previewURL: "https://lucianesantcs.github.io/amazing-graph/",
      githubURL: "https://github.com/lucianesantcs/amazing-graph/",
      tags: ["html", "css", "sass", "flexbox", "font-end", "mine", "responsive"],
      description: "Landing page para site de criação de gráficos",
    },
    {
      projectImage: doe,
      name: "doe",
      githubURL: "https://github.com/lucianesantcs/doe/",
      tags: [
        "javascript",
        "nodejs",
        "font-end",
        "back-end",
        "postgresql",
        "nunjucks",
        "contributed",
      ],
      description: "Sistema de cadastro para doadores de sangue, desenvolvido na Maratona Dev",
    },
    {
      projectImage: proffy,
      name: "proffy",
      githubURL: "https://github.com/lucianesantcs/proffy/",
      tags: [
        "javascript",
        "nodejs",
        "reactjs",
        "font-end",
        "back-end",
        "sqlite",
        "react-native",
        "typescript",
        "express",
        "contributed",
        "responsive",
      ],
      description: "Aplicação que conecta alunos e professores",
    },
    {
      projectImage: beTheHero,
      name: "be-the-hero",
      githubURL: "https://github.com/lucianesantcs/be-the-hero/",
      tags: [
        "javascript",
        "nodejs",
        "reactjs",
        "font-end",
        "back-end",
        "sqlite",
        "react-native",
        "express",
        "contributed",
        "responsive",
      ],
      description:
        "Aplicação que conecta ONG's a pessoas que estão dispostas a ajudá-los monetariamente nos casos",
    },
    {
      projectImage: todo,
      name: "to-do app",
      previewURL: "https://christyanbrayan.github.io/to-do/",
      githubURL: "https://github.com/lucianesantcs/to-do/",
      tags: ["flexbox", "javascript", "font-end", "local-storage", "contributed"],
      description: "Lista de To-Do desenvolvido no curso básico da Rocketseat",
    },
    {
      projectImage: quizz,
      name: "quiz de programação",
      previewURL: "https://lucianesantcs.github.io/quizz/",
      githubURL: "https://github.com/lucianesantcs/quizz/",
      tags: ["javascript", "mine", "font-end", "responsive", "contributed"],
      description: "Simples quiz desenvolvido com html, css, e javascript",
    },
    {
      projectImage: orcamento,
      name: "orçamento pessoal",
      previewURL: "https://lucianesantcs.github.io/orcamento-pessoal/",
      githubURL: "https://github.com/lucianesantcs/orcamento-pessoal/",
      tags: ["javascript", "bootstrap", "font-end", "local-storage", "contributed"],
      description: "Aplicativo que cadastra e permite a consulta de despesas",
    },
  ];

  const buttons = [
    {
      value: "all",
      text: "todos os projetos",
      active: true,
    },

    {
      value: "mine",
      text: "meu código",
      active: false,
    },
    {
      value: "contributed",
      text: "contribuição",
      active: false,
    },
    {
      value: "ui-design",
      text: "layouts",
      active: false,
    },
    {
      value: "html",
      text: "html & css",
      active: false,
    },
    {
      value: "javascript",
      text: "javascript",
      active: false,
    },
    {
      value: "reactjs",
      text: "reactjs",
      active: false,
    },
    {
      value: "font-end",
      text: "font-end",
      active: false,
    },
    {
      value: "back-end",
      text: "back-end",
      active: false,
    },
  ];

  function handleFilter({ target }) {
    let selected = target.value;
    setFilter(selected);
  }

  function handleClass(target) {
    if (target === filter) {
      return "active";
    } else {
      return null;
    }
  }

  return (
    <>
      <Head title="Projetos" description="Lista de Projetos" />
      <section className="projects animeLeft">
        <div className="projects-content">
          <div className="projects-button">
            {buttons.map((button) => (
              <button
                key={button.value}
                value={button.value}
                className={handleClass(button.value)}
                onClick={handleFilter}
              >
                {button.text}
              </button>
            ))}
          </div>

          {projects
            .filter((val) => {
              if (filter === "" || filter === "all") {
                return val;
              } else if (val.tags.includes(filter)) {
                return val;
              } else {
                return null;
              }
            })
            .map((project) => (
              <Project
                key={project.name}
                projectImage={project.projectImage}
                name={project.name}
                previewURL={project.previewURL}
                githubURL={project.githubURL}
                tags={project.tags.toString().replace(/,/g, " #").replace(/\b/, "#")}
                figmaURL={project.figmaURL}
                description={project.description}
              />
            ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
