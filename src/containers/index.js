import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Modal } from "components";
import { updateTask } from "store/actions";
import "./styles.css";

const Container = ({ list, updateTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentID] = useState(undefined);
  const handleRemove = (id) => {
    updateTask(list.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setCurrentID(id);
    setIsOpen(true);
  };
  const onRequestClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <Form action="add" />
      <div className="wrapper-card">
        {list.map((item) => (
          <Card
            key={item.id}
            data={item}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        ))}
      </div>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <Form action="edit" id={currentId} />
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps, { updateTask })(Container);
