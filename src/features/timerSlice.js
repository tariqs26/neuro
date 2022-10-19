import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTimerStopped: false,
  isTimerComplete: false,
  timeElapsed: 0,
  timerDelay: 0,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    startTimer(state) {
      state.isTimerStopped = false;
    },
    stopTimer(state) {
      state.isTimerStopped = true;
    },
    updateTimerComplete(state, { payload }) {
      state.isTimerComplete = payload;
    },
    updateTimeElapsed(state, { payload }) {
      state.timeElapsed = payload;
    },
    clearTimer() {
      return initialState;
    },

    updateTimerDelay(state, { payload }) {
      state.timerDelay = payload;
    },
  },
});

export const {
  startTimer,
  stopTimer,
  clearTimer,
  updateTimerComplete,
  updateTimeElapsed,
  updateTimerDelay,
} = timerSlice.actions;

export default timerSlice.reducer;
