import { useSelector, useDispatch } from "react-redux";
import {
  pickAnswer,
  updateScore,
  updateCurrentIndex,
} from "features/quizSlice";
import { clearTimer, stopTimer } from "features/timerSlice";
import { useText } from "hooks/useText";
import Option from "./Option";
import "./Question.css";

export default function Question({
  question,
  questions,
  picked,
  correct_answer: correct,
  idx,
}) {
  const questionText = useText(idx + 1 + ": " + question);

  const dispatch = useDispatch();
  const {
    currentIndex,
    questions: stateQuestions,
    revealAnswers,
  } = useSelector((state) => state.quiz);
  const { isTimerStopped, timeElapsed } = useSelector((state) => state.timer);

  const handleOptionClick = (isPicked, text) => {
    if (isTimerStopped) return;
    dispatch(updateScore((1 - timeElapsed / 20000) * 100));
    dispatch(pickAnswer({ question, answer: `${isPicked ? "" : text}` }));
    if (currentIndex === stateQuestions.length - 1) {
      console.log("timer stopped");
      dispatch(stopTimer());
      return;
    }
    if (currentIndex < stateQuestions.length - 1)
      dispatch(updateCurrentIndex(1));
    dispatch(clearTimer());
  };
  return (
    <div className="question">
      <h3 ref={questionText}>{null}</h3>
      {stateQuestions[currentIndex].picked || timeElapsed > 0 ? (
        <div className="options">
          {questions.map((text) => {
            const isPicked = picked === text;
            const timerEnd = isTimerStopped ? "finished" : "";
            return (
              <Option
                key={text}
                className={
                  "option " +
                  (revealAnswers && correct === text && !isPicked
                    ? "correct"
                    : revealAnswers && isPicked && !(correct === text)
                    ? "incorrect"
                    : isPicked
                    ? "picked"
                    : "") +
                  " " +
                  timerEnd
                }
                text={text}
                onClick={() => handleOptionClick(isPicked, text)}
              />
            );
          })}
        </div>
      ) : (
        <h2 className="option-loader">Get Ready...</h2>
      )}
    </div>
  );
}
