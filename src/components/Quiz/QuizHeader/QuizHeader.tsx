import { useAppSelector } from 'app/hooks';
import Timer from './components/Timer';
import ProgressBar from './components/ProgressBar';
import './QuizHeader.css';

export default function QuizHeader() {
  const { questions, currentIndex } = useAppSelector((state) => state.quiz);
  return (
    <div className='header'>
      <Timer />
      <ProgressBar {...{ questions, currentIndex }} />
      <h3>Q: {currentIndex + 1}/{questions.length}</h3>
    </div>
  );
}
