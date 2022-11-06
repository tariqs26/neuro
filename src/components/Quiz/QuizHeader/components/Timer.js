import { useSelector } from 'react-redux';
import useCreateTimer from 'hooks/useCreateTimer';

export default function Timer() {
  const { isTimerStopped, isTimerComplete } = useSelector(
    (state) => state.timer
  );
  const { limit, timeElapsed } = useCreateTimer();
  return (
    <h2
      className={
        'timer ' +
        (isTimerComplete ? 'quiz-end' : isTimerStopped ? 'quiz-submit' : '')
      }
    >
      {!(isTimerStopped && isTimerComplete) ? (
        <>Time: {((limit - timeElapsed) / 1000).toFixed(1)}</>
      ) : (
        <> Time's Up! </>
      )}
    </h2>
  );
}
