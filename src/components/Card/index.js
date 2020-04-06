import React from "react";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";
import moment from "moment";

import "./styles.css";

export default ({
  handleRemove,
  handleEdit,
  data: { id, title, date, desc },
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <div>
          <h2 className="card__title">{title}</h2>
          <time className="card__date">{moment(date).format("llll")}</time>
        </div>
        <div className="card__more">
          <MdDeleteForever
            className="card__icon"
            onClick={() => handleRemove(id)}
          />
          <MdModeEdit className="card__icon" onClick={() => handleEdit(id)} />
        </div>
      </div>
      <p className="card__body">{desc}</p>
    </div>
  );
};
