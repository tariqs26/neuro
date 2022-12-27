type Props = {
  percentCorrect: number;
};
const ResultsTitle = ({ percentCorrect }: Props) => (
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
      : 'You Failed'}
  </h1>
);

export default ResultsTitle;
