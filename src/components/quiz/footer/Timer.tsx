import { useSelector } from "@/app/hooks"
import { TIMER_OPTIONS } from "@/lib/constants"
import { TimerIcon } from "@/components/Icons"
import { useTimer } from "./useTimer"

export const Timer = () => {
  const { status, elapsedTime } = useSelector((state) => state.quiz.timer)
  useTimer()

  const remainingSeconds = (TIMER_OPTIONS.duration - elapsedTime) / 1000

  const formattedTime =
    remainingSeconds > 1
      ? remainingSeconds.toPrecision(2)
      : remainingSeconds.toPrecision(1)

  const className = `timer ${
    status === "paused"
      ? "quiz-submit"
      : status === "completed"
      ? "quiz-end"
      : ""
  }`

  return (
    <h3 className={className}>
      {status === "completed" ? (
        "Times Up!"
      ) : (
        <>
          <TimerIcon /> {formattedTime}
        </>
      )}
    </h3>
  )
}
