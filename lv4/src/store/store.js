import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialTodoState = [{ todo }];
let id = 1;

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: id++,
        title: action.payload.title,
        content: action.payload.content,
        isDone: false,
      });
    },
    toggle: (state, action) => {
      state.map((todo) =>
        todo.id === action.payload ? (todo.isDone = !todo.isDone) : todo
      );
    },
    delete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export const todoActions = todoSlice.actions;
export default store;
