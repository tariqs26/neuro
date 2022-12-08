import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { updateCurrentIndex } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizHeader from './QuizHeader/QuizHeader';
import Question from '../Question/Question';
import QuizModal from './QuizModal/QuizModal';
import './Quiz.css';

export default function Quiz() {
  useQuestionsFetch();
  const { isLoading, questions, currentIndex } = useAppSelector(
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
    dispatch(updateCurrentIndex(1));
    dispatch(clearTimer());
  }, [dispatch, questions, currentIndex, isTimerComplete, isLoading]);

  return (
    <div className='quiz'>
      <QuizModal />
      {isLoading ? (
        <h1 className='loader'>Loading...</h1>
      ) : !(questions && questions.length) ? (
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
      <h2 className='loader'>No Questions Found</h2>
      <button className='back' onClick={() => navigate('/')}>
        back
      </button>
    </div>
  );
};
