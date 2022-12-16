import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { nextQuestion } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizHeader from './QuizHeader/QuizHeader';
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
          <div className='quiz-area'>
            <Question {...questions[currentIndex]} />
          </div>
          <QuizHeader />
        </>
      )}
    </div>
  );
}

const NoQuestions = () => {
  return (
    <div className='no-questions'>
      <h1 className='loader'>No Questions Found</h1>
      <Link className='back' to='/' replace={true}>
        Home
      </Link>
    </div>
  );
};
