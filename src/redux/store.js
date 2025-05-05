import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../redux/recipes/slice";

const dummyReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    recipes: recipesReducer,
  },
});

export default store;
