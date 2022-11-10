import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateTimeElapsed,
  updateTimerDelay,
  updateTimerComplete,
} from 'features/timerSlice';

export const useTimer = (duration, increment, delay) => {
  const dispatch = useDispatch();
  const { isTimerStopped, timeElapsed, timerDelay } = useSelector(
    (state) => state.timer
  );

  useEffect(() => {
    let interval = null;
    if (timeElapsed >= duration || isTimerStopped) clearInterval(interval);
    if (timeElapsed >= duration) dispatch(updateTimerComplete(true));
    if (!isTimerStopped) {
      interval = setInterval(() => {
        timerDelay < delay &&
          dispatch(updateTimerDelay(timerDelay + increment));
        timerDelay === delay &&
          dispatch(updateTimeElapsed(timeElapsed + increment));
      }, increment);
    }
    return () => clearInterval(interval);
  }, [isTimerStopped, timeElapsed, timerDelay, dispatch]);
};
