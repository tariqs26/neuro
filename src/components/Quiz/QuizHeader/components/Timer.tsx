import { useAppSelector } from 'app/hooks';
import { useTimer } from 'hooks/useTimer';

export default function Timer() {
  const { isTimerStopped, isTimerComplete, timeElapsed } = useAppSelector(
    (state) => state.timer
  );
  const questionDuration = 20000;
  const increment = 100;
  const delay = 3000;
  useTimer(questionDuration - increment, increment, delay);
  return (
    <h2
      className={
        'timer ' +
        (isTimerComplete ? 'quiz-end' : isTimerStopped ? 'quiz-submit' : '')
      }
    >
      {!(isTimerStopped && isTimerComplete) ? (
        <>Time: {((questionDuration - timeElapsed) / 1000).toFixed(1)}</>
      ) : (
        <> Time's Up! </>
      )}
    </h2>
  );
}
