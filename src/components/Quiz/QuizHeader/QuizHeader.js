import { useSelector, useDispatch } from "react-redux";
import Timer from "./components/Timer/Timer";
import LeaveButton from "./components/LeaveButton/LeaveButton";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import ScoreDisplay from "./components/ScoreDisplay";
import "./QuizHeader.css";

export default function QuizHeader() {
  const dispatch = useDispatch();
  const { questions, isTimerFinished, submit } = useSelector(
    (state) => state.quiz
  );

  return (
    <div className="header">
        <div className="inner-info">
          <Timer {...{ submit, questions }} />
          <ScoreDisplay
            cond={isTimerFinished || submit}
            questions={questions}
          />
        </div>
        <ProgressBar />
        <div className="quiz-buttons">
          <LeaveButton dispatch={dispatch} />
        </div>
    </div>
  );
}
