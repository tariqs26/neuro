import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTimerStatus, updateTimeElapsed } from "features/quizSlice";

export const useTimer = (limit, increment) => {
  const dispatch = useDispatch();
  const { isTimerComplete, timeElapsed } = useSelector((state) => state.quiz);

  useEffect(() => {
    let interval = null;

    if (timeElapsed > limit || isTimerComplete) {
      clearInterval(interval);
      dispatch(updateTimerStatus(true));
    }
    if (!isTimerComplete) {
      interval = setInterval(() => {
        dispatch(updateTimeElapsed(timeElapsed + increment));
      }, increment);
    }
    return () => clearInterval(interval);
  }, [limit, increment, dispatch, isTimerComplete, timeElapsed]);
  return limit + increment;
};
