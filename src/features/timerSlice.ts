import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    timerComplete(state) {
      state.isTimerComplete = true;
    },
    incrementTimeElapsed(state, { payload }: PayloadAction<number>) {
      state.timeElapsed += payload;
    },
    incrementTimerDelay(state, { payload }: PayloadAction<number>) {
      state.timerDelay += payload;
    },
    clearTimer() {
      return initialState;
    },
  },
});

export const {
  startTimer,
  stopTimer,
  clearTimer,
  timerComplete,
  incrementTimeElapsed,
  incrementTimerDelay,
} = timerSlice.actions;

export default timerSlice.reducer;
