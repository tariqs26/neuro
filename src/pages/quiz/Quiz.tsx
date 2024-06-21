import { useEffect } from "react"

import { useDispatch, useSelector } from "@/app/hooks"
import { afterAnswer } from "@/app/utils"
import { pauseTimer } from "@/features/quizSlice"

import QuizFooter from "./footer/Footer"
import QuizModal from "./modal/Modal"
import Question from "./question/Question"

import "./Quiz.css"

export default function Quiz() {
  const {
    questions,
    currentIndex,
    timer: { status },
  } = useSelector((state) => state.quiz)

  const dispatch = useDispatch()

  useEffect(() => {
    if (status !== "completed") return
    dispatch(pauseTimer())
    afterAnswer(dispatch, currentIndex, questions)
  }, [dispatch, questions, currentIndex, status])

  return (
    <div className="quiz page">
      <QuizModal />
      <Question {...questions[currentIndex]} />
      <QuizFooter />
    </div>
  )
}
