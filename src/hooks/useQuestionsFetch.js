import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestions, updateIsLoading } from 'features/quizSlice';
import getQuestionsProxy from 'api/getQuestionsProxy';

export const useQuestionsFetch = (id, location) => {
  const dispatch = useDispatch();
  const { questions } = useSelector((state) => state.quiz);
  useEffect(() => {
    const fetchData = async () => {
      let data;
      if (!id && !questions.length) {
        data = await getQuestionsProxy(location.state.url);
        data = data.map((question) => ({
          ...question,
          picked: '',
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
};
