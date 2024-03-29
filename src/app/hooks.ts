import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

const useAppDispatch = () => useDispatch<AppDispatch>(),
  useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
