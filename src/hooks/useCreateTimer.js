import { useTimer } from 'hooks/useTimer';

export default function useCreateTimer() {
  const DELAY = 3000;
  const LENGTH_PER_QUESTION = 20000;
  const INCREMENT = 100;
  const limit = useTimer(LENGTH_PER_QUESTION - INCREMENT, INCREMENT, DELAY);
  return limit;
}
