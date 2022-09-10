import { useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuestions, updateIsLoading } from "features/quizSlice";
import getQuestionsProxy from "api/getQuestionsProxy";
import QuizHeader from "./QuizHeader/QuizHeader";
import Question from "../Question/Question";
import QuizModal from "./QuizModal/QuizModal";
import "./Quiz.css";

export default function Quiz() {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, questions } = useSelector((state) => state.quiz);

  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (!id && !questions.length) {
        data = await getQuestionsProxy(location.state.url);
        data = data.map((question) => ({
          ...question,
          picked: "",
          questions: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
      } else if (id) data = [];
      questions.length || dispatch(updateQuestions(data));
      dispatch(updateIsLoading(false));
    };
    fetchData();
  }, [dispatch, id, location, questions]);

  return (
    <div className="quiz">
      <QuizModal />
      {isLoading ? (
        <h1 className="loader">Loading...</h1>
      ) : !(questions && questions.length) ? (
        <h1 className="loader">No Questions Found</h1>
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
