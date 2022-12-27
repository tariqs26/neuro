import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AppState = {
  page: 'home' | 'quiz' | 'error' | 'results';
};

const initialState: AppState = {
  page: 'home',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<AppState['page']>) {
      state.page = action.payload;
    },
  },
});

export const { setPage } = appSlice.actions;

export default appSlice.reducer;
