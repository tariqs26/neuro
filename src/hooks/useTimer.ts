import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
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
  const dispatch = useAppDispatch();
  const { isTimerStopped, timeElapsed, timerDelay } = useAppSelector(
    (state) => state.timer
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
      if (timeElapsed >= duration) dispatch(updateTimerComplete(true));
    }
    return () => clearInterval(interval);
  }, [isTimerStopped, timeElapsed, timerDelay]);
};
