import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormState = {
  amount: string;
  category: string;
  difficulty: string;
  type: string;
};

const initialState: FormState = {
  amount: '5',
  category: '9',
  difficulty: 'easy',
  type: 'multiple',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue(
      state,
      { payload }: PayloadAction<{ name: string; value: string }>
    ) {
      const { name, value } = payload;
      state[name as keyof FormState] = value;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { setValue, clearForm } = formSlice.actions;

export default formSlice.reducer;
