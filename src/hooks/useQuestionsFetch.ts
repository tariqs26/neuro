import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setQuestions, setIsLoading, error } from 'features/quizSlice';
import getQuestionsProxy from 'api/getQuestionsProxy';

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: 'easy' | 'medium' | 'hard';
  incorrect_answers: string[];
  question: string;
  type: 'multiple' | 'boolean';
}

export const useQuestionsFetch = () => {
  const dispatch = useAppDispatch();
  const params = useAppSelector((state) => state.form);
  useEffect(() => {
    const fetchData = async () => {
      let data = [];
      try {
        let res = await getQuestionsProxy(params);
        data = res.map((question: Question) => ({
          ...question,
          picked: '',
          options: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
          score: 0,
        }));
      } catch (err) {}
      if (!data.length) dispatch(error());
      else dispatch(setQuestions(data));
      dispatch(setIsLoading(false));
    };
    fetchData();
  }, []);
};
