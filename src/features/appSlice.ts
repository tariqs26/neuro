import { type PayloadAction, createSlice } from "@reduxjs/toolkit"
import type { Page } from "@/types"

const initialState: { page: Page } = { page: "home" }

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<Page>) {
      state.page = action.payload
    },
  },
})

export const { setPage } = appSlice.actions

export const appReducer = appSlice.reducer
