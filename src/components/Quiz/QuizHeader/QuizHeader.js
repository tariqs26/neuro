import { useSelector, useDispatch } from "react-redux";
import Timer from "./components/Timer/Timer";
import LeaveButton from "./components/LeaveButton/LeaveButton";
import ScoreDisplay from "./components/ScoreDisplay";
import "./QuizHeader.css";

export default function QuizHeader() {
  const dispatch = useDispatch();
  const { questions, submit } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className="header">
      <div className="inner-info">
        <Timer {...{ submit, questions }} />
        <ScoreDisplay questions={questions} />
      </div>
      <div className="quiz-buttons">
        <LeaveButton dispatch={dispatch} />
      </div>
    </div>
  );
}
