import { useAppSelector } from 'app/hooks';
import { useTimer } from 'hooks/useTimer';
import { TimerIcon } from 'components/Icons';

export default function Timer() {
  const { isTimerStopped, isTimerComplete, timeElapsed } = useAppSelector(
    (state) => state.timer
  );
  const questionDuration = 10000,
    increment = 100,
    delay = 3000;
  useTimer(questionDuration - increment, increment, delay);
  const timeLeft = (questionDuration - timeElapsed) / 1000;
  const timeFormatted =
    timeLeft > 1 ? timeLeft.toPrecision(2) : timeLeft.toPrecision(1);
  return (
    <h3
      className={
        'timer ' +
        (isTimerComplete ? 'quiz-end' : isTimerStopped ? 'quiz-submit' : '')
      }
    >
      {!(isTimerStopped && isTimerComplete) ? (
        <>
          <TimerIcon /> {timeFormatted}
        </>
      ) : (
        <> Time's Up! </>
      )}
    </h3>
  );
}
