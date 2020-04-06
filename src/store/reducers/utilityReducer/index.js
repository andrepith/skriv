import { UTILITY } from "store/types";

const defaultValue = { isModal: false, sort: "title" };

export const utility = (state = defaultValue, { type, payload }) => {
  switch (type) {
    case UTILITY:
      return payload;
    default:
      return state;
  }
};
