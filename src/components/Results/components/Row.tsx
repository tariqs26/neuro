import { QuizQuestion } from 'features/quizSlice';
import { useText } from 'hooks/useText';

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
  const ref = useText<HTMLTableCellElement>(text || '\u00A0');
  return <td ref={ref} />;
};

export default Row;
