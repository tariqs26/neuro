import { useDispatch, useSelector } from "@/app/hooks"
import { afterAnswer } from "@/app/utils"
import { pauseTimer, selectAnswer } from "@/features/quizSlice"
import type { QuizQuestion } from "@/types/quiz"

import "./Question.css"

export const Question = ({
  question,
  options,
  picked,
  correct_answer: correct,
}: QuizQuestion) => {
  const dispatch = useDispatch()
  const {
    currentIndex,
    questions,
    timer: { status, elapsedTime, elapsedDelay },
  } = useSelector((state) => state.quiz)

  const animationDelay =
    questions[currentIndex].type === "boolean" ? 2600 : 2200

  const optionClassName = (text: string) =>
    `option ${
      correct === text && status === "paused"
        ? "correct"
        : correct !== text && picked === text
        ? "incorrect"
        : picked === text
        ? "picked"
        : ""
    }`

  const handleOptionClick = (text: string) => {
    dispatch(pauseTimer())
    const score = (1 - elapsedTime / 10000) * 100
    dispatch(selectAnswer({ answer: text, score }))
    afterAnswer(dispatch, currentIndex, questions)
  }

  return (
    <>
      <h1
        className="question-title"
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <div className="question">
        {elapsedDelay >= animationDelay ? (
          <div className="options">
            {options.map((text: string) => {
              return (
                <button
                  key={text}
                  type="button"
                  disabled={status !== "running"}
                  className={optionClassName(text)}
                  onClick={() => handleOptionClick(text)}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )
            })}
          </div>
        ) : (
          <div className="loader-bars">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="loader-bar"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
