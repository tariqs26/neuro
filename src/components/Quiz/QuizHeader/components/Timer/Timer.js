import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useTimer } from "hooks/useTimer";
import { updateTimerComplete } from "features/quizSlice";
import "./Timer.css";

export default function Timer({ submit }) {
  const { isTimerStopped, timeElapsed, isTimerComplete } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  const LENGTH_PER_QUESTION = 10000;
  const INCREMENT = 100;
  const limit = useTimer(LENGTH_PER_QUESTION - INCREMENT, INCREMENT);

  useEffect(() => {
    if (timeElapsed >= limit) {
      dispatch(updateTimerComplete(true));
    }
  }, [timeElapsed, limit, dispatch]);

  return (
    <h2
      className={
        "timer " +
        (isTimerStopped && isTimerComplete
          ? "quiz-end"
          : isTimerStopped && submit
          ? "quiz-submit"
          : "")
      }
    >
      {!(isTimerStopped && isTimerComplete) ? (
        <>Time: {((limit - timeElapsed) / 1000).toFixed(1)}s</>
      ) : (
        <> Time's Up! </>
      )}
    </h2>
  );
}
