import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "features/quizModalSlice";
import { clearQuiz } from "features/quizSlice";
import { startTimer } from "features/timerSlice";
import "./QuizModal.css";

export default function QuizModal() {
  const { isOpen } = useSelector((state) => state.quizModal);
  const { currentIndex, questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    isOpen && (
      <div className="modal-container">
        <div className="modal">
          <h3>Leave quiz?</h3>
          <div className="buttons">
            <button
              className="confirm"
              onClick={() => {
                dispatch(closeModal());
                dispatch(clearQuiz());
                navigate("/");
              }}
            >
              Confirm
            </button>
            <button
              className="cancel"
              onClick={() => {
                !questions[currentIndex].picked && dispatch(startTimer());
                dispatch(closeModal());
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
