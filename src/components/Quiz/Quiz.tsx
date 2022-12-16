import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { nextQuestion } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { openModal } from 'features/quizModalSlice';
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
    if (currentIndex === questions.length - 1) {
      dispatch(stopTimer());
      dispatch(setPage('results'));
      return;
    }
    dispatch(nextQuestion());
    dispatch(clearTimer());
  }, [questions, currentIndex, isTimerComplete]);

  return (
    <div className='quiz'>
      <QuizModal />
      {isLoading ? (
        <h1 className='loader'>Loading...</h1>
      ) : isError ? (
        <NoQuestions />
      ) : (
        <>
          <button
            onClick={() => {
              dispatch(stopTimer());
              dispatch(openModal());
            }}
          >
            Leave
          </button>
          <div className='quiz-area'>
            <Question {...questions[currentIndex]} />
          </div>
          <QuizFooter />
        </>
      )}
    </div>
  );
}

const NoQuestions = () => {
  const dispatch = useAppDispatch();
  return (
    <div className='no-questions'>
      <h1 className='loader'>No Questions Found</h1>
      <button onClick={() => dispatch(setPage('home'))}>home</button>
    </div>
  );
};
