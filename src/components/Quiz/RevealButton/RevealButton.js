import { useSelector } from "react-redux";
import { updateRevealAnswers } from "features/quizSlice";
import "./RevealButton.css";

export default function RevealButton({ dispatch }) {
  const { revealAnswers } = useSelector((state) => state.quiz);
  return (
    <button
      className={"reveal " + (!revealAnswers ? "" : "engaged")}
      onClick={() => dispatch(updateRevealAnswers(!revealAnswers))}
    >
      {revealAnswers ? "Hide answers" : "Show answers"}
    </button>
  );
}
