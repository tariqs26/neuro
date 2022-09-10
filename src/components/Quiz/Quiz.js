import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useQuestionsFetch } from "hooks/useQuestionsFetch";
import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "../Question/Question";
import QuizModal from "./QuizModal/QuizModal";
import "./Quiz.css";

export default function Quiz() {
  const location = useLocation();
  const { id } = useParams();
  useQuestionsFetch(id, location);
  const { isLoading, questions } = useSelector((state) => state.quiz);

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
          <div className="questions">
            {questions.map((question, index) => (
              <Question key={index} {...question} />
            ))}
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
