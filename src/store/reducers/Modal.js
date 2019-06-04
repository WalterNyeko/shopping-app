import { SHOW_MODAL, HIDE_MODAL } from "../types";
const initialState = {
  modalType: null,
  modalProps: {},
  isShowing: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        modalProps: action.modalProps,
        modalType: action.modalType,
        isShowing: true,
        type: action.type
      };
    case HIDE_MODAL:
      return { ...state, isShowing: false };
    default:
      return state;
  }
};
