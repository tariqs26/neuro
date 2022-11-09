import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  amount: '5',
  category: '9',
  difficulty: 'easy',
  type: 'multiple',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue(state, { payload }) {
      const { name, value } = payload;
      state[name] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { setValue, clearForm } = formSlice.actions;

export default formSlice.reducer;
