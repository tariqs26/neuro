import { useRef, useEffect } from "react"

type ProgressBarProps = {
  questions: Array<unknown>
  currentIndex: number
}

const ProgressBar = ({ questions, currentIndex: idx }: ProgressBarProps) => {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!barRef.current) return

    barRef.current.style.width = `${((idx + 1) / questions.length) * 100}%`
  }, [idx, questions])

  return (
    <div className="progress-bar">
      <div ref={barRef} className="bar" />
    </div>
  )
}

export default ProgressBar
