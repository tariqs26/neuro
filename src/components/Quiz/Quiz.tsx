import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { nextQuestion } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizFooter from './QuizFooter/QuizFooter';
import Question from '../Question/Question';
import QuizModal from './QuizModal/QuizModal';
import './Quiz.css';

export default function Quiz() {
  const { isLoading, isError, questions, currentIndex } = useAppSelector(
    (state) => state.quiz
  );
  useQuestionsFetch();

  const { isTimerComplete } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError || !isTimerComplete) return;
    dispatch(stopTimer());
    setTimeout(() => {
      if (currentIndex === questions.length - 1) {
        dispatch(setPage('results'));
        return;
      }
      dispatch(nextQuestion());
      dispatch(clearTimer());
    }, 2000);
  }, [questions, currentIndex, isTimerComplete]);

  return isLoading ? (
    <div className='no-questions'>
      <h1 className='loader'>Loading...</h1>
    </div>
  ) : (
    <div className='quiz page'>
      <QuizModal />
      {isError ? (
        <div className='no-questions'>
          <h1 className='loader'>No Questions Found</h1>
          <button onClick={() => dispatch(setPage('home'))}>home</button>
        </div>
      ) : (
        <>
          <Question {...questions[currentIndex]} />
          <QuizFooter />
        </>
      )}
    </div>
  );
}
