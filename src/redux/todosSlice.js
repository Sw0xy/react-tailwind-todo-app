import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    editTodo: (state, action) => {
      const { id, title, color } = action.payload;
      const item = state.items.find((item) => item.id === id);
      item.color = color;
      item.title = title;
    },
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    toggleTodo: (state, action) => {
        const { id,completed } = action.payload;
        const item = state.items.find((item) => item.id === id);
        item.completed = completed;
        console.log(item.completed);

    },
    setLoading: (state, action) => {
        state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  addTodo,
  deleteTodo,
  editTodo,
  setError,
  setLoading,
  toggleTodo,
} = todosSlice.actions;

export default todosSlice.reducer;
