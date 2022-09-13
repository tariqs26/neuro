import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "features/quizModalSlice";
import { clearQuiz, updateTimerStatus } from "features/quizSlice";
import { useNavigate } from "react-router-dom";
import "./QuizModal.css";

export default function QuizModal() {
  const { isOpen } = useSelector((state) => state.quizModal);
  const { submit } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   document.body.style.overflow = isOpen ? "hidden" : "unset";
  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isOpen]);

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
                !submit && dispatch(updateTimerStatus(false));
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
