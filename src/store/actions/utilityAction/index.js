import { UTILITY } from "store/types";

export const utilityAction = (payload) => (dispatch) => {
  dispatch({
    type: UTILITY,
    payload,
  });
};
