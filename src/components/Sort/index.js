import React from "react";
import { connect } from "react-redux";
import { utilityAction } from "store/actions";

const Sort = ({ utilityAction, utility }) => {
  const handleChange = (e) => {
    utilityAction({ ...utility, sort: e.target.value });
  };

  return (
    <select defaultValue={utility.sort} onChange={handleChange}>
      <option value="title">Title</option>
      <option value="latest">Latest</option>
      <option value="oldest">Oldest</option>
    </select>
  );
};

const mapStateToProps = ({ utility }) => ({ utility });

export default connect(mapStateToProps, { utilityAction })(Sort);
