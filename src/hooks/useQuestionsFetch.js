import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get } from 'axios';
import { updateQuestions, updateIsLoading } from 'features/quizSlice';

const API_URL = 'https://opentdb.com/api.php';

export default async function getQuestionsProxy(params) {
  const { results } = (await get(API_URL, { params })).data;
  return results;
}

export const useQuestionsFetch = () => {
  const dispatch = useDispatch();
  const params = useSelector((state) => state.form);
  useEffect(() => {
    const fetchData = async () => {
      let data;
      data = await getQuestionsProxy(params);
      data = data.map((question) => ({
        ...question,
        picked: '',
        questions: [
          question.correct_answer,
          ...question.incorrect_answers,
        ].sort(() => Math.random() - 0.5),
      }));
      dispatch(updateQuestions(data));
      dispatch(updateIsLoading(false));
    };
    fetchData();
  }, [dispatch, params]);
};
