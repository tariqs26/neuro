import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import {
  updateTimeElapsed,
  updateTimerDelay,
  updateTimerComplete,
} from 'features/timerSlice';

export const useTimer = (
  duration: number,
  increment: number,
  delay: number
) => {
  const dispatch = useDispatch();
  const { isTimerStopped, timeElapsed, timerDelay } = useSelector(
    (state: RootState) => state.timer
  );

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isTimerStopped) {
      interval = setInterval(() => {
        timerDelay < delay &&
          dispatch(updateTimerDelay(timerDelay + increment));
        timerDelay === delay &&
          dispatch(updateTimeElapsed(timeElapsed + increment));
      }, increment);
      if (timeElapsed >= duration || isTimerStopped) clearInterval(interval);
      if (timeElapsed >= duration) dispatch(updateTimerComplete(true));
    }
    return () => clearInterval(interval);
  }, [isTimerStopped, timeElapsed, timerDelay, dispatch]);
};
