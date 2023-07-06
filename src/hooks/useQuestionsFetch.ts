import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "app/hooks";
import { setPage } from "features/appSlice";
import { setQuestions, setIsLoading } from "features/quizSlice";
import getQuestionsProxy from "api/getQuestionsProxy";

export const useQuestionsFetch = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.form);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await getQuestionsProxy(params);
        const data = res.map((question: Question) => ({
          ...question,
          picked: "",
          options: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
          score: 0,
        }));
        dispatch(setQuestions(data));
      } catch (err) {
        dispatch(setPage("error"));
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchData();
  }, []);
};
