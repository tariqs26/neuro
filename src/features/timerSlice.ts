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
    updateTimerComplete(state, { payload }: PayloadAction<boolean>) {
      state.isTimerComplete = payload;
    },
    updateTimeElapsed(state, { payload }: PayloadAction<number>) {
      state.timeElapsed = payload;
    },
    updateTimerDelay(state, { payload }: PayloadAction<number>) {
      state.timerDelay = payload;
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
  updateTimerComplete,
  updateTimeElapsed,
  updateTimerDelay,
} = timerSlice.actions;

export default timerSlice.reducer;
