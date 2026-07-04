import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  FILTER_TODO,
  SEARCH_TODO,
  TOGGLE_TODO,
} from "./actions";

export const initialState = {
  todos: [],
  search: "",
  filter: "all",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: Date.now(), text: action.payload, completed: false },
        ],
      };
    case DELETE_TODO:
      return;
    case EDIT_TODO:
      return;
    case TOGGLE_TODO:
      return;
    case SEARCH_TODO:
      return;
    case FILTER_TODO:
      return;
    default:
      return state;
  }
};
