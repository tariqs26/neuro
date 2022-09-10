export default function ScoreDisplay({ cond, questions }) {
  return (
    cond && (
      <h2 className="score">
        Score:{" "}
        {questions.reduce(
          (acc, { correct_answer, picked }) =>
            correct_answer === picked ? acc + 1 : acc,
          0
        )}
        {"/"}
        {questions.length}
      </h2>
    )
  );
}
