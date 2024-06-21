import { setPage } from "@/features/appSlice"
import { moveToNextQuestion, resetTimer } from "@/features/quizSlice"
import type { AppDispatch } from "./store"
import type { QuizQuestion } from "@/types/quiz"

export const afterAnswer = (
  dispatch: AppDispatch,
  currentIndex: number,
  questions: QuizQuestion[]
) => {
  setTimeout(() => {
    if (currentIndex === questions.length - 1) {
      dispatch(setPage("results"))
      return
    }
    dispatch(moveToNextQuestion())
    dispatch(resetTimer())
  }, 1400)
}
