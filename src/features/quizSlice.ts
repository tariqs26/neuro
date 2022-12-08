import { createSlice } from '@reduxjs/toolkit';
import { Question } from 'interfaces/app_interfaces';

interface QuizQuestion extends Question {
  picked: string;
  options: string[];
}

export type QuizState = {
  questions: QuizQuestion[];
  currentIndex: number;
  isLoading: boolean;
  progress: number;
  revealAnswers: boolean;
  submit: boolean;
  score: number;
};

const initialState  : QuizState = {
  questions: [],
  currentIndex: 0,
  isLoading: true,
  progress: 0,
  revealAnswers: false,
  submit: false,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    updateQuestions(state, { payload }) {
      state.questions = payload;
    },
    updateIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    updateCurrentIndex(state, { payload }) {
      state.currentIndex += payload;
    },
    updateSubmit(state, { payload }) {
      state.submit = payload;
    },
    updateScore(state, { payload }) {
      state.score += payload;
    },
    clearQuiz() {
      return initialState;
    },
    pickAnswer(state, { payload }) {
      const questionIndex = state.questions.findIndex(
        ({ question: q }) => q === payload.question
      );
      const question = state.questions[questionIndex];
      if (question.picked) return;
      question.picked = payload.answer;
    },
  },
  extraReducers: {},
});

export const {
  updateQuestions,
  updateIsLoading,
  updateSubmit,
  updateCurrentIndex,
  updateScore,
  clearQuiz,
  pickAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
