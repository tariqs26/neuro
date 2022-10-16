import { stopTimer } from "features/quizSlice";
import { openModal } from "features/quizModalSlice";

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
