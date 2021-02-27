import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  const {
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
  } = props;
  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageWrapper}>
          <img src={imageUrl} alt={imageUrl} className={styles.image} />
        </div>
        <div className={styles.titleWrapper}>
          <div className={styles.titleLink}>
            <a href={previewUrl} target="_blank" rel="noreferrer" data-tooltip={previewNameHover}>
              {name}
            </a>
          </div>
          <div className={styles.titleDivider} />
          <div className={styles.titleLink}>
            <a href={url} target="_blank" rel="noreferrer" data-tooltip={urlNameHover}>
              {urlName}
            </a>
            {urlName && designUrl ? <> / </> : ""}
            <a href={designUrl} target="_blank" rel="noreferrer" data-tooltip={designNameHover}>
              {designName}
            </a>
          </div>
        </div>
        <div className={styles.infoWrapper}>
          <span>{tags}</span>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

export default Card;
