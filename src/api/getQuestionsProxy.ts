import get from 'axios';
import { FormState } from 'features/formSlice';

const API_URL = 'https://opentdb.com/api.php';
export default async function getQuestionsProxy(params: FormState) {
  const { results } = (await get(API_URL, { params })).data;
  return results;
}
