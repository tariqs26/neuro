import { useDispatch, useSelector } from "@/app/hooks"
import { afterAnswer } from "@/app/utils"
import { pauseTimer, selectAnswer } from "@/features/quizSlice"
import { TIMER_OPTIONS } from "@/lib/constants"
import type { QuizQuestion } from "@/types/quiz"

import "./Question.css"

export const Question = ({
  question,
  options,
  picked,
  correct_answer: correct,
}: QuizQuestion) => {
  const { currentIndex, questions, timer } = useSelector((state) => state.quiz)
  const dispatch = useDispatch()

  const loadingDuration =
    TIMER_OPTIONS.delay -
    (questions[currentIndex].type === "boolean" ? 400 : 800)

  const optionClassName = (text: string) =>
    `option ${
      correct === text && timer.status === "paused"
        ? "correct"
        : correct !== text && picked === text
        ? "incorrect"
        : picked === text
        ? "picked"
        : ""
    }`

  const handleOptionClick = (answer: string) => {
    dispatch(pauseTimer())
    dispatch(selectAnswer({ answer }))
    afterAnswer(dispatch, currentIndex, questions)
  }

  return (
    <>
      <h1
        className="question-title"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="question">
        {timer.elapsedDelay < loadingDuration ? (
          <div className="loader-bars">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="loader-bar"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        ) : (
          <div className="options">
            {options.map((text) => (
              <button
                key={text}
                type="button"
                disabled={timer.status !== "running"}
                className={optionClassName(text)}
                onClick={() => handleOptionClick(text)}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
