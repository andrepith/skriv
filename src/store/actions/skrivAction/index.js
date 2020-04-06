import { UPDATE_SKRIV_TASK } from "store/types";

export const updateTask = (payload) => (dispatch) => {
  dispatch({
    type: UPDATE_SKRIV_TASK,
    payload,
  });
};
