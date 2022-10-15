import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuestionsFetch } from "hooks/useQuestionsFetch";
import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "../Question/Question";
import QuizModal from "./QuizModal/QuizModal";
import { updateCurrentIndex } from "features/quizSlice";
import "./Quiz.css";

export default function Quiz() {
  const location = useLocation();
  const { id } = useParams();
  useQuestionsFetch(id, location);
  const { isLoading, questions, currentIndex, submit, isTimerFinished } =
    useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  return (
    <div className="quiz">
      <QuizModal />
      {isLoading ? (
        <h1 className="loader">Loading...</h1>
      ) : !(questions && questions.length) ? (
        <NoQuestions />
      ) : (
        <>
          <QuizHeader />
          <div className="quiz-area">
            <Question {...questions[currentIndex]} idx={currentIndex} />
            <div className="btns">
              {submit && (
                <button
                  onClick={() =>
                    currentIndex > 0 && dispatch(updateCurrentIndex(-1))
                  }
                >
                  Previous
                </button>
              )}
              <button
                onClick={() =>
                  currentIndex < questions.length - 1 &&
                  dispatch(updateCurrentIndex(1))
                }
              >
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const NoQuestions = () => {
  const navigate = useNavigate();
  return (
    <div className="no-questions">
      <h1 className="loader">No Questions Found</h1>
      <button className="back" onClick={() => navigate("/")}>
        back
      </button>
    </div>
  );
};
