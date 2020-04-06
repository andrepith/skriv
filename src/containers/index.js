import React from "react";
import { connect } from "react-redux";
import { Card, CardForm } from "components";
import { updateTask } from "store/actions";
import "./styles.css";

const Container = ({ list, updateTask }) => {
  const handleClick = (id) => {
    updateTask(list.filter((item) => item.id !== id));
  };
  return (
    <div>
      <CardForm />
      <div className="wrapper-card">
        {list.map((item) => (
          <Card key={item.id} data={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps, { updateTask })(Container);
