import { useSelector, useDispatch } from "react-redux";
import Timer from "./components/Timer/Timer";
import LeaveButton from "./components/LeaveButton/LeaveButton";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";
import { updateRevealAnswers } from "features/quizSlice";
import "./QuizHeader.css";

export default function QuizHeader() {
  const dispatch = useDispatch();
  const { questions, isTimerFinished, revealAnswers, submit } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className="header">
      <LeaveButton dispatch={dispatch} />
      <div className="container">
        <Timer {...{ submit, questions }} />
        <ProgressBar />
        <ScoreDisplay cond={isTimerFinished || submit} questions={questions} />
      </div>
      <SubmitButton dispatch={dispatch} cond={!(isTimerFinished || submit)} />
      {(isTimerFinished || (submit && !isTimerFinished)) && (
        <button
          className={"reveal " + (!revealAnswers ? "" : "engaged")}
          onClick={() => dispatch(updateRevealAnswers(!revealAnswers))}
        >
          reveal
        </button>
      )}
    </div>
  );
}
