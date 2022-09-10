import { updateSubmit, updateTimerStatus } from "features/quizSlice";
import "./SubmitButton.css";

export default function SubmitButton({ dispatch, cond }) {
  return (
    cond && (
      <button
        className="submit"
        onClick={() => {
          dispatch(updateSubmit(true));
          dispatch(updateTimerStatus(true));
        }}
      >
        submit
      </button>
    )
  );
}
