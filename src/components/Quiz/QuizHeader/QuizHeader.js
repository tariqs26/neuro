import { useSelector } from 'react-redux';
import Timer from './components/Timer';
import './QuizHeader.css';
import ProgressBar from './components/ProgressBar';

export default function QuizHeader() {
  const { questions, currentIndex } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className='header'>
      <div className='inner-info'>
        <Timer />
        <ProgressBar {...{ questions, currentIndex }} />
        <h2 className='score'>
          Q: {currentIndex + 1}/{questions.length}
        </h2>
      </div>
    </div>
  );
}
