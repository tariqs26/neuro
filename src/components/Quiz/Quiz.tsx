import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { nextQuestion } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizHeader from './QuizHeader/QuizHeader';
import Question from '../Question/Question';
import QuizModal from './QuizModal/QuizModal';
import './Quiz.css';

export default function Quiz() {
  useQuestionsFetch();
  const { isLoading, isError, questions, currentIndex } = useAppSelector(
    (state) => state.quiz
  );
  const { isTimerComplete } = useAppSelector((state) => state.timer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!(questions && questions.length) || !isTimerComplete) return;
    if (currentIndex === questions.length - 1) {
      dispatch(stopTimer());
      return;
    }
    dispatch(nextQuestion());
    dispatch(clearTimer());
  }, [dispatch, questions, currentIndex, isTimerComplete]);

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
  const navigate = useNavigate();
  return (
    <div className='no-questions'>
      <h1 className='loader'>No Questions Found</h1>
      <button className='back' onClick={() => navigate(-1)}>
        home
      </button>
    </div>
  );
};
