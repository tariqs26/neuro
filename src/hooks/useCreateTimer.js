import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useTimer } from "hooks/useTimer";
import { updateTimerComplete } from "features/timerSlice";

export default function useCreateTimer() {
  const { timeElapsed } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const DELAY = 5100;
  const LENGTH_PER_QUESTION = 20000;
  const INCREMENT = 100;
  const limit = useTimer(LENGTH_PER_QUESTION - INCREMENT, INCREMENT, DELAY);

  useEffect(() => {
    if (timeElapsed >= limit) {
      dispatch(updateTimerComplete(true));
    }
  }, [timeElapsed, limit, dispatch]);

  return { limit, timeElapsed };
}
