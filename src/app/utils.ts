import type { AppDispatch } from './store';
import { setPage } from 'features/appSlice';
import { nextQuestion, QuizQuestion } from 'features/quizSlice';
import { clearTimer } from 'features/timerSlice';

export const afterAnswer = (
  dispatch: AppDispatch,
  currentIndex: number,
  questions: QuizQuestion[]
) => {
  setTimeout(() => {
    if (currentIndex === questions.length - 1) {
      dispatch(setPage('results'));
      return;
    }
    dispatch(nextQuestion());
    dispatch(clearTimer());
  }, 1400);
};
