import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormState = {
  amount: '5' | '10' | '15' | '20';
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple' | 'boolean';
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
      { payload }: PayloadAction<{ name: keyof FormState; value: string }>
    ) {
      const { name, value } = payload;
      return { ...state, [name]: value };
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { setValue, clearForm } = formSlice.actions;

export default formSlice.reducer;
