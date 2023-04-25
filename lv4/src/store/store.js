import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialTodoState = [];
let id = 1;

const todoSlice = createSlice({
  name: 'todo',
  initialState: initialTodoState,
  reducers: {
    add: (state, action) => {
      state.push({
        id: id++,
        nickname: action.payload.nickname,
        title: action.payload.title,
        content: action.payload.content,
      });
    },
    delete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    update: (state, action) => {
      const { id, content } = action.payload;
      const filterState = state.find((todo) => todo.id === id);
      if (filterState) {
        filterState.content = content;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export const todoActions = todoSlice.actions;
export default store;
