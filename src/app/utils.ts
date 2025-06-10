import { setPage } from "@/features/appSlice"
import { moveToNextQuestion, resetTimer } from "@/features/quizSlice"
import type { QuizQuestion } from "@/types/quiz"
import type { AppDispatch } from "./store"

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
