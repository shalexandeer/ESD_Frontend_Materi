import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
// the main idea is, slice will produce an action that we will use
// for dispatch and a reducer that we will use in configureStore
export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  // this is the reducers that will manipulate the state to produce a new state
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        title: action.payload,
      }
      // you can do this way
      state.push(todo)
      // or this way
      // return [...state, todo]
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

// this is for dispatch
export const { addTodo, removeTodo } = todoSlice.actions;

// this is for configurestore
export default todoSlice.reducer;

