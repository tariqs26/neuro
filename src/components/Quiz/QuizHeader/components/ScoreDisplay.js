import { useSelector } from "react-redux";

export default function ScoreDisplay({ cond, questions }) {
  const { currentIndex } = useSelector((state) => state.quiz);
  return (
    <h2 className="score">
      {cond ? (
        <>
          Score:{" "}
          {questions.reduce(
            (acc, { correct_answer, picked }) =>
              correct_answer === picked ? acc + 1 : acc,
            0
          )}
        </>
      ) : (
        <>
          Question:{" "}
          {currentIndex + 1}
        </>
      )}
      /{questions.length}
    </h2>
  );
}
