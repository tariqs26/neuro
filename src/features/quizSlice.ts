import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TIMER_OPTIONS } from "@/lib/constants"
import type { QuizQuestion, QuizState } from "@/types/quiz"

const initialTimerState = {
  status: "running",
  elapsedTime: 0,
  elapsedDelay: 0,
} as const

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  timer: initialTimerState,
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions(state, { payload }: PayloadAction<QuizQuestion[]>) {
      state.questions = payload
    },
    moveToNextQuestion(state) {
      state.currentIndex++
    },
    selectAnswer(state, { payload }: PayloadAction<{ answer: string }>) {
      const question = state.questions[state.currentIndex]
      if (question.picked) return
      question.picked = payload.answer
      if (question.picked === question.correct_answer) {
        const score =
          (1 - state.timer.elapsedTime / TIMER_OPTIONS.duration) * 100
        question.score = score
      }
    },
    pauseTimer({ timer }) {
      timer.status = "paused"
    },
    completeTimer({ timer }) {
      timer.status = "completed"
    },
    incrementTime({ timer }) {
      timer.elapsedTime += TIMER_OPTIONS.increment
    },
    incrementDelay({ timer }) {
      timer.elapsedDelay += TIMER_OPTIONS.increment
    },
    resetTimer: (state) => {
      state.timer = initialTimerState
    },
    resetQuiz: () => initialState,
  },
})

export const {
  setQuestions,
  moveToNextQuestion,
  selectAnswer,
  pauseTimer,
  completeTimer,
  incrementTime,
  incrementDelay,
  resetTimer,
  resetQuiz,
} = quizSlice.actions

export const quizReducer = quizSlice.reducer
