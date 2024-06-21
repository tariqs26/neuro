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
  const dispatch = useDispatch()
  const { status, elapsedDelay, elapsedTime } = useSelector(
    (state) => state.quiz.timer
  )

  useEffect(() => {
    if (status !== "running") return

    const { duration, increment, delay } = options

    const interval = setInterval(() => {
      if (elapsedDelay < delay) dispatch(incrementDelay(increment))
      else {
        if (elapsedTime >= duration) {
          dispatch(completeTimer())
          clearInterval(interval)
        } else dispatch(incrementTime(increment))
      }
    }, increment)

    return () => clearInterval(interval)
  }, [options, dispatch, status, elapsedDelay, elapsedTime])
}
