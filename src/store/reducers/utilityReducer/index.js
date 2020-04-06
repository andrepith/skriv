import { UTILITY } from "store/types";

export const utility = (state = {}, { type, payload }) => {
  switch (type) {
    case UTILITY:
      return payload;
    default:
      return state;
  }
};
