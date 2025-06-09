import { configureStore } from "@reduxjs/toolkit"
import { appReducer } from "@/features/appSlice"
import { quizReducer } from "@/features/quizSlice"
import { formReducer } from "@/features/formSlice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    form: formReducer,
    quiz: quizReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
