import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuestionsFetch } from "hooks/useQuestionsFetch";
import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "../Question/Question";
import QuizModal from "./QuizModal/QuizModal";
import {
  updateCurrentIndex,
  updateTimeElapsed,
  updateTimerComplete,
  startTimer,
} from "features/quizSlice";
import "./Quiz.css";

export default function Quiz() {
  const location = useLocation();
  const { id } = useParams();
  useQuestionsFetch(id, location);
  const { isLoading, questions, currentIndex, submit } = useSelector(
    (state) => state.quiz
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentIndex === questions.length - 1) return;
    setTimeout(() => {
      dispatch(startTimer());
    }, 4000);
  }, [dispatch, currentIndex, questions.length]);

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
                onClick={() => {
                  if (!(currentIndex < questions.length - 1)) return;
                  dispatch(updateCurrentIndex(1));
                  dispatch(updateTimeElapsed(0));
                  dispatch(updateTimerComplete(false));
                }}
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
