import { useEffect } from "react"

import { useDispatch, useSelector } from "@/app/hooks"
import { afterAnswer } from "@/app/utils"
import { pauseTimer } from "@/features/quizSlice"

import { Question } from "@/components/quiz/question/Question"
import { Footer } from "@/components/quiz/footer/Footer"
import { Modal } from "@/components/quiz/modal/Modal"

import "./Quiz.css"

export const QuizPage = () => {
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
      <Modal />
      <Question {...questions[currentIndex]} />
      <Footer />
    </div>
  )
}
