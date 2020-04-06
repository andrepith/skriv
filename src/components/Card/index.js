import React from "react";
import { MdDeleteForever } from "react-icons/md";

import "./styles.css";

export default ({ handleClick, data: { id, title, date, desc } }) => {
  return (
    <div className="card">
      <div className="card__header">
        <div>
          <h2 className="card__title">{title}</h2>
          <time className="card__date">{date}</time>
        </div>
        <div className="card__more">
          <MdDeleteForever
            className="card__icon"
            onClick={() => handleClick(id)}
          />
        </div>
      </div>
      <p className="card__body">{desc}</p>
    </div>
  );
};
