import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FormData = {
  amount: '5' | '10' | '15' | '20';
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple' | 'boolean';
};

export type FormState = FormData & {
  isSubmitted: boolean;
};

const initialState: FormState = {
  amount: '5',
  category: '9',
  difficulty: 'easy',
  type: 'multiple',
  isSubmitted: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setValue(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: keyof FormData; value: string }>
    ) {
      return { ...state, [name]: value };
    },
    submit(state) {
      state.isSubmitted = true;
    },
    clearForm() {
      return initialState;
    },
  },
});

export const { setValue, clearForm, submit } = formSlice.actions;

export default formSlice.reducer;
