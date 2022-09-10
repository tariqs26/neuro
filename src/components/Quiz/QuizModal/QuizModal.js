import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeModal } from "features/quizModalSlice";
import { clearQuiz , updateTimerStatus } from "features/quizSlice";
import { useNavigate } from "react-router-dom";
import "./QuizModal.css";
export default function QuizModal() {
  const { isOpen } = useSelector((state) => state.quizModal);
  const { submit } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div className="modal-container">
        <div className="modal">
          <h3>
            Are you sure you want to leave? All current progress will be lost!
          </h3>
          <div className="buttons">
            <button
              className="confirm"
              onClick={() => {
                dispatch(closeModal());
                dispatch(clearQuiz());
                navigate("/");
              }}
            >
              confirm
            </button>
            <button
              className="cancel"
              onClick={() => {
                !submit && dispatch(updateTimerStatus(false));
                dispatch(closeModal());
              }}
            >
              cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
