import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Modal } from "components";
import { updateTask, modalAction } from "store/actions";
import "./styles.css";

const Container = ({ list, updateTask, modalAction, isModal }) => {
  const [currentId, setCurrentID] = useState(undefined);
  const handleRemove = (id) => {
    updateTask(list.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setCurrentID(id);
    modalAction(true);
  };
  const onRequestClose = () => {
    modalAction(false);
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
      <Modal isOpen={isModal} onRequestClose={onRequestClose}>
        <Form action="edit" id={currentId} />
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ list, isModal }) => ({ list, isModal });

export default connect(mapStateToProps, { updateTask, modalAction })(Container);
