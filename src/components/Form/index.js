import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { uniqBy } from "lodash";
import { updateTask, utilityAction } from "store/actions";

const CardForm = ({ updateTask, list, action, id, utilityAction, utility }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [currentIndex, setCurrentIndex] = useState(undefined);

  useEffect(() => {
    if (action === "edit") {
      const { title, desc } = list.find((item) => item.id === id);
      setTitle(title);
      setDesc(desc);
      setCurrentIndex(list.findIndex((item) => item.id === id));
    }
  }, [action, id, list]);

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
    if (action === "edit") {
      let temp = list;
      temp[currentIndex].title = title;
      temp[currentIndex].desc = desc;
      updateTask(uniqBy([...list, ...temp], "id"));
      utilityAction({ ...utility, isModal: false });
    } else {
      const date = Date.now();
      const id = "id-" + date;
      updateTask([...list, { id, title, desc, date }]);
    }
    setTitle("");
    setDesc("");
  };

  return (
    <form style={{ textAlign: "left" }} onSubmit={handleSubmit}>
      <div>
        <label className="d-block">Title:</label>
        <input
          // style={{ width: "100%" }}
          type="text"
          maxLength="30"
          onChange={handleChange("title")}
          value={title}
        ></input>
      </div>
      <div>
        <label className="d-block">Description:</label>
        <textarea
          style={{ minWidth: "300px", minHeight: "200px" }}
          maxLength="255"
          onChange={handleChange("desc")}
          value={desc}
        />
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

const mapStateToProps = ({ list, utility }) => ({ list, utility });

export default connect(mapStateToProps, { updateTask, utilityAction })(
  CardForm
);
