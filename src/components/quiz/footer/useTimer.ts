import { useEffect } from "react"
import { useDispatch, useSelector } from "@/app/hooks"
import {
  completeTimer,
  incrementDelay,
  incrementTime,
} from "@/features/quizSlice"
import { TIMER_OPTIONS } from "@/lib/constants"

export const useTimer = () => {
  const timer = useSelector((state) => state.quiz.timer)
  const dispatch = useDispatch()

  useEffect(() => {
    const { status, elapsedTime, elapsedDelay } = timer

    if (status !== "running") return

    const { duration, increment, delay } = TIMER_OPTIONS

    const interval = setInterval(() => {
      if (elapsedDelay < delay) dispatch(incrementDelay(increment))
      else if (elapsedTime >= duration) {
        dispatch(completeTimer())
        clearInterval(interval)
      } else dispatch(incrementTime(increment))
    }, increment)

    return () => clearInterval(interval)
  }, [dispatch, timer])
}
