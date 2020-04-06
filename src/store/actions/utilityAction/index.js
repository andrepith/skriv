import { MODAL } from "store/types";

export const modalAction = (payload) => (dispatch) => {
  dispatch({
    type: MODAL,
    payload,
  });
};
