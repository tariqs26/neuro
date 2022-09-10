import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const quizModalSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = quizModalSlice.actions;

export default quizModalSlice.reducer;
