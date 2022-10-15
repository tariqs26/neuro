import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { stopTimer, updateTimeElapsed } from "features/quizSlice";

export const useTimer = (limit, increment) => {
  const dispatch = useDispatch();
  const { isTimerStopped, timeElapsed } = useSelector((state) => state.quiz);

  useEffect(() => {
    let interval = null;

    if (timeElapsed > limit || isTimerStopped) {
      clearInterval(interval);
      dispatch(stopTimer());
    }
    if (!isTimerStopped) {
      interval = setInterval(() => {
        dispatch(updateTimeElapsed(timeElapsed + increment));
      }, increment);
    }

    return () => clearInterval(interval);
  }, [limit, increment, dispatch, isTimerStopped, timeElapsed]);
  return limit + increment;
};
