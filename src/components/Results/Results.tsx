import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import './Results.css';

export default function Results() {
  const dispatch = useAppDispatch();
  const { score, questions } = useAppSelector((state) => state.quiz);
  return (
    <div className='results'>
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
            <th>#</th>
            <th>Question</th>
            <th>Correct Answer</th>
            <th>Your Answer</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, idx) => (
            <tr key={q.question}>
              <td>{idx + 1}</td>
              <td>{q.question}</td>
              <td>{q.correct_answer}</td>
              <td>{q.picked}</td>
              <td>{q.score ? q.score.toFixed(0) : 0}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={4}>Total Score</td>
            <td>{score}</td>
          </tr>
        </tbody>
      </table>
      <div className='result-buttons'>
        <button onClick={() => dispatch(setPage('home'))}>Home</button>
        <button onClick={() => dispatch(setPage('quiz'))}>Retry</button>
      </div>
    </div>
  );
}
