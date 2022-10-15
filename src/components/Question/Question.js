import { useSelector, useDispatch } from "react-redux";
import { pickAnswer, stopTimer, updateScore } from "features/quizSlice";
import { useText } from "hooks/useText";
import Option from "./Option/Option";
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
  const { isTimerStopped, revealAnswers, timeElapsed } = useSelector(
    (state) => state.quiz
  );

  const handleOptionClick = (isPicked, text) => {
    if (isTimerStopped) return;
    dispatch(stopTimer());
    dispatch(updateScore((1 - timeElapsed / 10000) * 100));
    dispatch(pickAnswer({ question, answer: `${isPicked ? "" : text}` }));
  };

  return (
    <div className="question">
      <h3 ref={questionText}>{null}</h3>
      <div className="options">
        {questions.map((text) => {
          const isPicked = picked === text;
          const timerEnd = isTimerStopped ? "finished" : "";
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
