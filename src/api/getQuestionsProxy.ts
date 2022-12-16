import get from 'axios';
import { FormData } from 'features/formSlice';

const API_URL = 'https://opentdb.com/api.php';
const getQuestionsProxy = async (params: FormData) => {
  const { results } = (await get(API_URL, { params })).data;
  return results;
};

export default getQuestionsProxy;
