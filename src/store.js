import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quizSlice";
import quizModalReducer from "./features/quizModalSlice";
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    quizModal: quizModalReducer,
  },
});
