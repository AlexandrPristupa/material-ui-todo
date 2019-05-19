import * as types from './../types/types';
import map from 'lodash/map';
import filter from 'lodash/filter';

const initialState = { todos: [], selectedTodo: 0 };

const rootReducer = (state = initialState, action) => {  
  switch (action.type) {
    case types.REHYDRATE:

      // const payload = action.payload;

      // console.log(action.payload);

      return  { ...state };
    
    case types.ADD_TODO:

      return {
        ...state, todos: [
          ...state.todos, action.payload
        ]
      };

    case types.SELECT_TODO:
      
      return {
        ...state,
          selectedTodo: action.payload.id
      };

    case types.DELETE_TODO:

      return {
        ...state,
        todos: [
          ...filter(state.todos, (todo) => {
            if (todo.id !== action.payload) {
              return todo;
            }
          })
        ],
        selectedTodo: 0
      };

    case types.ADD_COMMENT:
      const todos = map(state.todos, (todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            ...action.payload
          }
        }
        return todo;
      });

      return {
        ...state,
        todos: [
          ...todos
        ],
        selectedTodo: 0 
      };
      
    case types.CHANGE_LANGUAGE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default rootReducer;
