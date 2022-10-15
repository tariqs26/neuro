import { stopTimer } from "features/quizSlice";
import { openModal } from "features/quizModalSlice";
import "./LeaveButton.css";

export default function LeaveButton({ dispatch }) {
  return (
    <button
      className="leave"
      onClick={() => {
        dispatch(stopTimer());
        dispatch(openModal());
      }}
    >
      Leave
    </button>
  );
}