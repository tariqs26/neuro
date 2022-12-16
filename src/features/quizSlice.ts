import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question } from 'hooks/useQuestionsFetch';

interface QuizQuestion extends Question {
  picked: string;
  options: string[];
}

export type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  isLoading: boolean;
  isError: boolean;
  progress: number;
  submit: boolean;
  score: number;
};

const initialState: QuizState = {
  questions: [],
  currentIndex: 0,
  isLoading: true,
  isError: false,
  progress: 0,
  submit: false,
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
    submit(state) {
      state.submit = true;
    },
    incrementScore(state, { payload }: PayloadAction<number>) {
      state.score += payload;
    },
    clearQuiz() {
      return initialState;
    },
    pickAnswer(state, { payload }: PayloadAction<{ answer: string }>) {
      const question = state.questions[state.currentIndex];
      if (question.picked) return;
      question.picked = payload.answer;
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
  submit,
  clearQuiz,
  pickAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
