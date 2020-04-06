import { MODAL } from "store/types";

export const isModal = (state = false, { type, payload }) => {
  switch (type) {
    case MODAL:
      return payload;
    default:
      return state;
  }
};
