import { useEffect } from 'react';
import { useAppSelector } from 'app/hooks';
import ResultsTitle from './components/ResultsTitle';
import {
  RightCircle,
  WrongCircle,
  MinusCircle,
  UpArrow,
} from 'components/Icons';
import Row from './components/Row';
import './Results.css';

export default function Results() {
  const { score, questions } = useAppSelector((state) => state.quiz);
  const correct = questions.filter((q) => q.picked === q.correct_answer).length;
  const percentCorrect = correct / questions.length;
  useEffect(() => {
    const handleScroll = () => {
      const anchor = document.querySelector('.results-anchor') as HTMLElement;
      if (window.scrollY > 100) anchor.classList.remove('hidden');
      else anchor.classList.add('hidden');
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className='results page'>
        <ResultsTitle {...{ percentCorrect }} />
        <div className='question-stats'>
          <p title='correct'>
            <RightCircle /> {correct}
          </p>
          <p title='wrong'>
            <WrongCircle />
            {
              questions.filter((q) => q.picked && q.picked !== q.correct_answer)
                .length
            }
          </p>
          <p title='unattempted'>
            <MinusCircle /> {questions.filter((q) => !q.picked).length}
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, idx) => (
              <Row key={q.question} question={q} idx={idx} />
            ))}
            <tr>
              <td colSpan={4}>Total Score</td>
              <td>{score}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <a className='results-anchor hidden' href='#top'>
        <UpArrow />
      </a>
    </>
  );
}
