import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { QuizQuestion } from 'features/quizSlice';
import { useText } from 'hooks/useText';
import './Results.css';

export default function Results() {
  const dispatch = useAppDispatch();
  const { score, questions } = useAppSelector((state) => state.quiz);
  return (
    <div className='results page'>
      <h1>Results</h1>
      <div className='question-stats'>
        <p>
          Correct:{' '}
          {questions.filter((q) => q.picked === q.correct_answer).length}
        </p>
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
      <div className='result-buttons'>
        <button onClick={() => dispatch(setPage('home'))}>Home</button>
        <button disabled={true} onClick={() => dispatch(setPage('quiz'))}>Retry</button>
      </div>
    </div>
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
