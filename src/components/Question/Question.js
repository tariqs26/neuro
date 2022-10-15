import { useSelector, useDispatch } from "react-redux";
import { updateProgress, pickAnswer } from "features/quizSlice";
import { useText } from "hooks/useText";
import Option from "./Option/Option";
import "./Question.css";

export default function Question({
  question,
  questions,
  picked,
  correct_answer: correct,
  idx
}) {
  const questionText = useText(idx + 1 + ": " + question);

  const dispatch = useDispatch();
  const { isTimerComplete, revealAnswers } = useSelector((state) => state.quiz);

  const handleOptionClick = (isPicked, text) => {
    if (isTimerComplete) return;
    if (isPicked) dispatch(updateProgress(-1));
    else if (!picked) dispatch(updateProgress(1));
    dispatch(pickAnswer({ question, answer: `${isPicked ? "" : text}` }));
  };

  return (
    <div className="question">
      <h3 ref={questionText}>{null}</h3>
      <div className="options">
        {questions.map((text) => {
          const isPicked = picked === text;
          const timerEnd = isTimerComplete ? "finished" : "";
          return (
            <Option
              key={text}
              className={
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
    </div>
  );
}
