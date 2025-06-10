import { useEffect } from "react"
import { useDispatch, useSelector } from "@/app/hooks"
import {
  completeTimer,
  incrementDelay,
  incrementTime,
} from "@/features/quizSlice"

export const useTimer = (options: {
  duration: number
  increment: number
  delay: number
}) => {
  const timer = useSelector((state) => state.quiz.timer)
  const dispatch = useDispatch()

  useEffect(() => {
    const { status, elapsedTime, elapsedDelay } = timer

    if (status !== "running") return

    const { duration, increment, delay } = options

    const interval = setInterval(() => {
      if (elapsedDelay < delay) dispatch(incrementDelay(increment))
      else if (elapsedTime >= duration) {
        dispatch(completeTimer())
        clearInterval(interval)
      } else dispatch(incrementTime(increment))
    }, increment)

    return () => clearInterval(interval)
  }, [options, dispatch, timer])
}
