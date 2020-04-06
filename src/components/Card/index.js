import React from "react";

import "./styles.css";

export default ({ data: { title, date, desc } }) => {
  return (
    <div className="card">
      <div className="card__header">
        <h2 className="card__title">{title}</h2>
        <time className="card__date">{date}</time>
      </div>
      <p className="card__body">{desc}</p>
    </div>
  );
};
