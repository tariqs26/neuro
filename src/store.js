import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quizSlice';
import timerReducer from './features/timerSlice';
import quizModalReducer from './features/quizModalSlice';
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    timer: timerReducer,
    quizModal: quizModalReducer,
  },
});
