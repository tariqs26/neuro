import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
      if (state.questions[questionIndex].picked) return;
      state.questions[questionIndex].picked = payload.answer;
    },
  },
  extraReducers: {},
});

export const {
  updateQuestions,
  updateIsLoading,
  updateRevealAnswers,
  updateSubmit,
  updateCurrentIndex,
  updateScore,
  clearQuiz,
  pickAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
