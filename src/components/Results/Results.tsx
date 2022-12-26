import { useAppSelector } from 'app/hooks';
import { QuizQuestion } from 'features/quizSlice';
import { useText } from 'hooks/useText';
import './Results.css';

export default function Results() {
  const { score, questions } = useAppSelector((state) => state.quiz);
  const correct = questions.filter((q) => q.picked === q.correct_answer).length;
  const percentCorrect = correct / questions.length;
  return (
    <>
      <div className='results page'>
        <h1
          className={
            percentCorrect === 1
              ? 'flawless'
              : percentCorrect > 0.5
              ? 'excellent'
              : 'fail'
          }
        >
          {percentCorrect === 1
            ? 'Flawless!'
            : percentCorrect > 0.7
            ? 'Excellent!'
            : percentCorrect > 0.5
            ? 'You Passed'
            : 'You Failed :('}
        </h1>
        <div className='question-stats'>
          <p>Correct: {correct}</p>
          <p>
            Incorrect:{' '}
            {
              questions.filter((q) => q.picked && q.picked !== q.correct_answer)
                .length
            }
          </p>
          <p>Unanswered: {questions.filter((q) => !q.picked).length}</p>
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
      <a className='results-anchor' href='#top'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='25'
          height='25'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        >
          <circle cx='12' cy='12' r='11'></circle>
          <polyline points='16 12 12 8 8 12'></polyline>
          <line x1='12' y1='16' x2='12' y2='8'></line>
        </svg>
      </a>
    </>
  );
}

type RowProps = {
  question: QuizQuestion;
  idx: number;
};
const Row = ({
  question: { question, correct_answer, picked, score },
  idx,
}: RowProps) => {
  return (
    <tr key={question}>
      <td>{idx + 1}</td>
      {[question, correct_answer, picked].map((text, idx) => (
        <RowEntry key={text + `${idx === 1 ? '-a' : '-u'}`} text={text} />
      ))}
      <td>{score ? score.toFixed(0) : 0}</td>
    </tr>
  );
};

const RowEntry = ({ text }: { text: string }) => {
  const ref = useText<HTMLTableCellElement>(text);
  return <td ref={ref}>{text}</td>;
};
