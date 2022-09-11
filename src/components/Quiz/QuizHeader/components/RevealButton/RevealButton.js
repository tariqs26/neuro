import { useSelector } from "react-redux";
import { updateRevealAnswers } from "features/quizSlice";

export default function RevealButton({ dispatch, cond }) {
  const { revealAnswers } = useSelector((state) => state.quiz);
  return (
    cond && (
      <button
        className={"reveal " + (!revealAnswers ? "" : "engaged")}
        onClick={() => dispatch(updateRevealAnswers(!revealAnswers))}
      >
        {revealAnswers ? "hide answers" : "show answers"}
      </button>
    )
  );
}
