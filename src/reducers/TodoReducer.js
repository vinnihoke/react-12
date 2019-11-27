import uuid from "uuid/v1";

export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          title: action.todo.title,
          completed: false,
          editing: false,
          id: uuid()
        }
      ];
    case "CLEAR_TODO":
      return state.filter(todo => todo.completed === false);

    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.id) {
          // Change the completed from false to true
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};
