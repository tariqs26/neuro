import * as Redux from "react-redux"
import type { AppDispatch, RootState } from "./store"

const useDispatch = () => Redux.useDispatch<AppDispatch>()
const useSelector: Redux.TypedUseSelectorHook<RootState> = Redux.useSelector

export { useDispatch, useSelector }
