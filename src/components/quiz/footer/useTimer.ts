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

    const interval = setInterval(() => {
      if (elapsedDelay < TIMER_OPTIONS.delay) dispatch(incrementDelay())
      else if (elapsedTime >= TIMER_OPTIONS.duration) {
        dispatch(completeTimer())
        clearInterval(interval)
      } else dispatch(incrementTime())
    }, TIMER_OPTIONS.increment)

    return () => clearInterval(interval)
  }, [dispatch, timer])
}
