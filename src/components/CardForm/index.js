import React, { useState } from "react";
import { connect } from "react-redux";
import { updateTask } from "store/actions";

const CardForm = ({ updateTask, list }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleChange = (name) => (e) => {
    e.preventDefault();
    const regex = /\d|[a-zA-Z]/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      if (name === "title") {
        setTitle(e.target.value);
      }
      if (name === "desc") {
        setDesc(e.target.value);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = Date.now();
    const id = "id-" + date;
    updateTask([...list, { id, title, desc, date }]);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          maxLength="30"
          onChange={handleChange("title")}
          value={title}
        ></input>
      </div>
      <div>
        <label>Description:</label>
        <textarea
          maxLength="255"
          onChange={handleChange("desc")}
          value={desc}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps, { updateTask })(CardForm);
