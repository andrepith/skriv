import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Form, Modal } from "components";
import { updateTask, utilityAction } from "store/actions";
import "./styles.css";

const Container = ({ list, updateTask, utilityAction, utility }) => {
  const [currentId, setCurrentID] = useState(undefined);
  const handleRemove = (id) => {
    updateTask(list.filter((item) => item.id !== id));
  };
  const handleEdit = (id) => {
    setCurrentID(id);
    utilityAction({ ...utility, isModal: true });
  };
  const onRequestClose = () => {
    utilityAction({ ...utility, isModal: false });
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
      <Modal isOpen={utility.isModal} onRequestClose={onRequestClose}>
        <Form action="edit" id={currentId} />
      </Modal>
    </div>
  );
};

const mapStateToProps = ({ list, utility }) => ({ list, utility });

export default connect(mapStateToProps, { updateTask, utilityAction })(
  Container
);
