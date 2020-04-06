import { UPDATE_SKRIV_TASK } from "store/types";

export const list = (state = [], { type, payload }) => {
  switch (type) {
    case UPDATE_SKRIV_TASK:
      return payload;
    default:
      return state;
  }
};
