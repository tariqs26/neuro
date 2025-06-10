import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { Data, FormState, FormValue } from "@/types/form"

const initialState: FormState = {
  isSubmitting: false,
  data: { amount: "5", category: "9", difficulty: "easy", type: "multiple" },
}

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setValue(
      state,
      {
        payload: { name, value },
      }: PayloadAction<{ name: keyof Data; value: FormValue }>
    ) {
      state.data = { ...state.data, [name]: value }
    },
    setIsSubmitting(state, { payload }: PayloadAction<boolean>) {
      state.isSubmitting = payload
    },
    resetForm: () => initialState,
  },
})

export const { setValue, setIsSubmitting, resetForm } = formSlice.actions

export const formReducer = formSlice.reducer
