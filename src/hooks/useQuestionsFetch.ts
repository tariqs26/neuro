import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import get from 'axios';
import { updateQuestions, updateIsLoading } from 'features/quizSlice';
import { FormState } from 'features/formSlice';

const API_URL = 'https://opentdb.com/api.php';
async function getQuestionsProxy(params : FormState) {
  const { results } = (await get(API_URL, { params })).data;
  return results;
}

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export const useQuestionsFetch = () => {
  const dispatch = useDispatch();
  const params = useSelector((state : RootState) => state.form);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getQuestionsProxy(params);
      data = data.map((question : Question) => ({
        ...question,
        picked: '',
        options: [question.correct_answer, ...question.incorrect_answers].sort(
          () => Math.random() - 0.5
        ),
      }));
      dispatch(updateQuestions(data));
      dispatch(updateIsLoading(false));
    };
    fetchData();
  }, []);
};
