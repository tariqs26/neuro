import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  incrementTimeElapsed,
  incrementTimerDelay,
  timerComplete,
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
    if (timeElapsed >= duration) dispatch(timerComplete());
    let interval: ReturnType<typeof setInterval>;
    if (!isTimerStopped) {
      interval = setInterval(() => {
        timerDelay < delay && dispatch(incrementTimerDelay(increment));
        timerDelay === delay && dispatch(incrementTimeElapsed(increment));
      }, increment);
    }
    return () => clearInterval(interval);
  }, [isTimerStopped, timeElapsed, timerDelay]);
};
