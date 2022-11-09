import { useSelector } from 'react-redux';
import { useTimer } from 'hooks/useTimer';

export default function Timer() {
  const { isTimerStopped, isTimerComplete, timeElapsed } = useSelector(
    (state) => state.timer
  );
  const DELAY = 3000;
  const LENGTH_PER_QUESTION = 20000;
  const INCREMENT = 100;
  useTimer(LENGTH_PER_QUESTION - INCREMENT, INCREMENT, DELAY);
  return (
    <h2
      className={
        'timer ' +
        (isTimerComplete ? 'quiz-end' : isTimerStopped ? 'quiz-submit' : '')
      }
    >
      {!(isTimerStopped && isTimerComplete) ? (
        <>Time: {((LENGTH_PER_QUESTION - timeElapsed) / 1000).toFixed(1)}</>
      ) : (
        <> Time's Up! </>
      )}
    </h2>
  );
}
