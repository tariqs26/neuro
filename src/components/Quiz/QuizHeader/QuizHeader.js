import { useSelector, useDispatch } from "react-redux";
import Timer from "./components/Timer/Timer";
import LeaveButton from "./components/LeaveButton/LeaveButton";
import SubmitButton from "./components/SubmitButton/SubmitButton";
import RevealButton from "./components/RevealButton/RevealButton";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ScoreDisplay from "./components/ScoreDisplay/ScoreDisplay";
import "./QuizHeader.css";

export default function QuizHeader() {
  const dispatch = useDispatch();
  const { questions, isTimerFinished,  submit } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className="header">
      <LeaveButton dispatch={dispatch} />
      <div className="quiz-info">
        <Timer {...{ submit, questions }} />
        <ProgressBar />
        <ScoreDisplay cond={isTimerFinished || submit} questions={questions} />
      </div>
      <SubmitButton dispatch={dispatch} cond={!(isTimerFinished || submit)} />
      <RevealButton
        dispatch={dispatch}
        cond={isTimerFinished || (submit && !isTimerFinished)}
      />
    </div>
  );
}
