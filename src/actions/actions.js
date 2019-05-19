import * as types from '../types/types.js';

export const addTodo = payload => ({
  type: types.ADD_TODO,
  payload
});

export const selectTodo = payload => ({
  type: types.SELECT_TODO,
  payload
});

export const deleteTodo = payload => ({
  type: types.DELETE_TODO,
  payload
});

export const addComment = payload => ({
  type: types.ADD_COMMENT,
  payload
});

export const changeLanguage = payload => ({
  type: types.CHANGE_LANGUAGE,
  payload
});
