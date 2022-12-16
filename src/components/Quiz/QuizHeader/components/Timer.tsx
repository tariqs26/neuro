import { useAppSelector } from 'app/hooks';
import { useTimer } from 'hooks/useTimer';

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

const TimerIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
  >
    <circle cx='12' cy='12' r='10'></circle>
    <polyline points='12 6 12 12 16 14'></polyline>
  </svg>
);
