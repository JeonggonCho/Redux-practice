import {configureStore, createSlice} from "@reduxjs/toolkit";

// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");
//
// const reducer = createReducer([], (builder) => {
//   builder
//     .addCase(addToDo, (state, action) => {
//       state.push({id: Date.now(), text: action.payload});
//     })
//     .addCase(deleteToDo, (state, action) => {
//       return state.filter((toDo) => toDo.id !== action.payload);
//     });
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({id: Date.now(), text: action.payload});
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    }
  }
});

export const {add, remove} = toDos.actions;

export const store = configureStore({reducer: toDos.reducer});