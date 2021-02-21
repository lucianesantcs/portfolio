import React from "react";

const Project = (props) => {
  const { projectImage, name, previewURL, githubURL, figmaURL, tags, description } = props;

  return (
    <article className="projects-content-item">
      <div className="projects-image">
        <img src={projectImage} alt={name} />
      </div>
      <div className="projects-info">
        <div className="projects-info-text">
          <span>
            {previewURL === undefined ? (
              name
            ) : (
              <a href={previewURL} target="_blank" rel="noreferrer" data-tooltip="Preview">
                {name}
              </a>
            )}
          </span>
        </div>
        <div className="projects-info-horizontal-divider"></div>
        <div className="projects-info-text">
          <span>
            {githubURL !== undefined ? (
              <a href={githubURL} target="_blank" rel="noreferrer" data-tooltip="Código">
                github
              </a>
            ) : (
              ""
            )}

            {figmaURL && githubURL ? <> / </> : ""}

            {figmaURL === undefined ? (
              ""
            ) : (
              <>
                <a href={figmaURL} target="_blank" rel="noreferrer" data-tooltip="Design">
                  figma
                </a>
              </>
            )}
          </span>
        </div>
      </div>
      <div className="projects-info">
        <div className="projects-info-tags">
          <span>{tags}</span>
        </div>
        <div className="projects-info-description">
          <span>{description}</span>
        </div>
      </div>
    </article>
  );
};

export default Project;
