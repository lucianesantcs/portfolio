import React, { useState } from "react";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Head from "../../Components/Head";

import { projects, buttons } from "./Data";

import styles from "./Projects.module.css";

const renderProjects = ({
  imageUrl,
  name,
  previewUrl,
  previewNameHover,
  url,
  urlName,
  urlNameHover,
  designUrl,
  designName,
  designNameHover,
  tags,
  description,
}) => (
  <>
    <Card
      key={name}
      imageUrl={imageUrl}
      name={name}
      previewUrl={previewUrl}
      previewNameHover={previewNameHover}
      url={url}
      urlName={urlName}
      urlNameHover={urlNameHover}
      designUrl={designUrl}
      designName={designName}
      designNameHover={designNameHover}
      tags={tags.toString().replace(/,/g, " #").replace(/\b/, "#")}
      description={description}
    />
  </>
);

const Project = () => {
  const [filter, setFilter] = useState("");

  function handleClick({ target }) {
    let selected = target.value;
    setFilter(selected);
  }

  const filterProjects = (val) => {
    if (filter === "" || filter === "all") {
      return val;
    } else if (val.tags.includes(filter)) {
      return val;
    } else {
      return null;
    }
  };

  const renderButtons = ({ text, value, active }) => (
    <Button key={text} text={text} value={value} onClick={handleClick} />
  );

  return (
    <>
      <Head title="Projetos" description="Lista de Projetos" />
      <section className={`${styles.projects} animeLeft`}>
        <article className={styles.buttons}>{buttons.map(renderButtons)}</article>
        <article className={styles.projectsList}>
          {projects.filter(filterProjects).map(renderProjects)}
        </article>
      </section>
    </>
  );
};

export default Project;
