import React from "react";
import { connect } from "react-redux";
import { Card, CardForm } from "components";
import "./styles.css";

const Container = ({ list }) => {
  return (
    <div>
      <CardForm />
      <div className="wrapper-card">
        {list.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ list }) => ({ list });

export default connect(mapStateToProps, null)(Container);
