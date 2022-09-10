import { get } from "axios";

const API_URL = "https://opentdb.com/api.php";

export default async function getQuestionsProxy(params) {
  const { results } = (await get(API_URL, { params })).data;
  return results;
}
