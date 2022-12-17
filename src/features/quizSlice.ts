import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from 'hooks/useQuestionsFetch';

export interface QuizQuestion extends Question {
  picked: string;
  score: number;
  options: string[];
}

export type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  isLoading: boolean;
  isError: boolean;
  progress: number;
  score: number;
};

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  isLoading: true,
  isError: false,
  progress: 0,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, { payload }: PayloadAction<QuizQuestion[]>) {
      state.questions = payload;
    },
    setIsLoading(state, { payload }: PayloadAction<boolean>) {
      state.isLoading = payload;
    },
    error(state) {
      state.isError = true;
    },
    nextQuestion(state) {
      state.currentIndex++;
    },
    incrementScore(state, { payload }: PayloadAction<number>) {
      const question = state.questions[state.currentIndex];
      if (question.picked === question.correct_answer) state.score += payload;
    },
    clearQuiz() {
      return initialState;
    },
    pickAnswer(
      state,
      { payload }: PayloadAction<{ answer: string; score: number }>
    ) {
      const question = state.questions[state.currentIndex];
      if (question.picked) return;
      question.picked = payload.answer;
      if (question.picked === question.correct_answer)
        question.score = payload.score;
    },
  },
  extraReducers: {},
});

export const {
  setQuestions,
  setIsLoading,
  error,
  nextQuestion,
  incrementScore,
  clearQuiz,
  pickAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
