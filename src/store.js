import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './features/quizSlice';
import timerReducer from './features/timerSlice';
import quizModalReducer from './features/quizModalSlice';
import formReducer from './features/formSlice';
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    timer: timerReducer,
    quizModal: quizModalReducer,
    form: formReducer,
  },
});
