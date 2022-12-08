import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { updateQuestions, updateIsLoading } from 'features/quizSlice';
import getQuestionsProxy from 'api/getQuestionsProxy';

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export const useQuestionsFetch = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.form);
  useEffect(() => {
    const fetchData = async () => {
      let data = await getQuestionsProxy(params);
      data = data.map((question: Question) => ({
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
