import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  isLoading: true,
  progress: 0,
  isTimerComplete: false,
  isTimerFinished: false,
  timeElapsed: 0,
  revealAnswers: false,
  submit : false
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    updateProgress(state, { payload }) {
      state.progress += payload;
    },
    updateQuestions(state, { payload }) {
      state.questions = payload;
    },
    updateIsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    updateTimerStatus(state, { payload }) {
      state.isTimerComplete = payload;
    },
    updateTimerFinished(state, { payload }) {
      state.isTimerFinished = payload;
    },
    updateTimeElapsed(state, { payload }) {
      state.timeElapsed = payload;
    },
    updateRevealAnswers(state, { payload }) {
      state.revealAnswers = payload;
    },

    updateSubmit(state, { payload }) {
      state.submit = payload;
    },
    clearQuiz() {
      return initialState;
    },
    pickAnswer(state, { payload }) {
      const questionIndex = state.questions.findIndex(
        ({ question: q }) => q === payload.question
      );
      state.questions[questionIndex].picked = payload.answer;
    },
  },
  extraReducers: {},
});

export const {
  updateProgress,
  updateQuestions,
  updateIsLoading,
  updateTimerStatus,
  updateTimerFinished,
  updateTimeElapsed,
  updateRevealAnswers,
  updateSubmit,
  clearQuiz,
  pickAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
