import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  stopTimer,
  updateTimeElapsed,
  updateTimerDelay,
} from 'features/timerSlice';

export const useTimer = (limit, increment, delay) => {
  const dispatch = useDispatch();
  const { isTimerStopped, timeElapsed, timerDelay } = useSelector(
    (state) => state.timer
  );

  useEffect(() => {
    let interval = null;
    if (timeElapsed > limit || isTimerStopped) {
      clearInterval(interval);
      dispatch(updateTimerDelay(0));
      dispatch(stopTimer());
    }
    if (!isTimerStopped) {
      interval = setInterval(() => {
        timerDelay < delay &&
          dispatch(updateTimerDelay(timerDelay + increment));
        timerDelay === delay &&
          dispatch(updateTimeElapsed(timeElapsed + increment));
      }, increment);
    }

    return () => clearInterval(interval);
  }, [
    isTimerStopped,
    timeElapsed,
    timerDelay,
    limit,
    increment,
    delay,
    dispatch,
  ]);
  return limit + increment;
};
