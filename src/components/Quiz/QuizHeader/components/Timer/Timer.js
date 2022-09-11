import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useTimer } from "hooks/useTimer";
import { updateTimerFinished } from "features/quizSlice";
import "./Timer.css";

export default function Timer({ submit, questions }) {
  const { isTimerComplete, timeElapsed, isTimerFinished } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const LENGTH_PER_QUESTION = 6000;
  const INCREMENT = 100;
  const limit = useTimer(
    questions.length * LENGTH_PER_QUESTION - INCREMENT,
    INCREMENT
  );

  useEffect(() => {
    if (timeElapsed >= limit) {
      dispatch(updateTimerFinished(true));
    }
  }, [timeElapsed, limit, dispatch]);

  return (
    <h2
      className={
        "timer " +
        (isTimerComplete && isTimerFinished
          ? "quizEnd"
          : isTimerComplete && submit
          ? "quizSubmit"
          : "")
      }
    >
      {!(isTimerComplete && isTimerFinished) ? (
        <>
          Time: {(timeElapsed / 1000).toFixed(1)}/
          {(limit / 1000).toFixed(1)}
        </>
      ) : (
        <> Time's Up! </>
      )}
    </h2>
  );
}
