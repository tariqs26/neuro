import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuestionsFetch } from 'hooks/useQuestionsFetch';
import QuizHeader from './QuizHeader/QuizHeader';
import Question from '../Question/Question';
import QuizModal from './QuizModal/QuizModal';
import { updateCurrentIndex } from 'features/quizSlice';
import { clearTimer, stopTimer } from 'features/timerSlice';
import './Quiz.css';

export default function Quiz() {
  useQuestionsFetch();
  const { isLoading, questions, currentIndex } = useSelector(
    (state) => state.quiz
  );
  const { isTimerComplete } = useSelector((state) => state.timer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!questions || questions.length === 0) return;
    if (!isTimerComplete) return;
    if (currentIndex === questions.length - 1) {
      dispatch(stopTimer());
      return;
    }
    if (currentIndex < questions.length - 1) dispatch(updateCurrentIndex(1));
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
