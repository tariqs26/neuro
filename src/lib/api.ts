import type { Question } from "@/types"
import type { Data } from "@/types/form"

type ApiResponse =
  | { response_code: 1 | 2 | 5; results: never[] }
  | { response_code: 0; results: Question[] }

const fetchQuestions = async (params: Data): Promise<ApiResponse> => {
  const url = new URL("https://opentdb.com/api.php")
  url.search = new URLSearchParams(params).toString()

  const res = await fetch(url)
  if (!res.ok) throw new Error("An error occurred while fetching the data.")

  return res.json()
}

const errorMessages = {
  1: "Could not return results. The API doesn't have enough questions for your query.",
  2: "Invalid parameter. Please check the values you've entered.",
  5: "Too many requests. Please wait a while before trying again.",
}

export const getQuestions = async (params: Data) => {
  const { response_code, results } = await fetchQuestions(params)

  if (response_code !== 0) throw new Error(errorMessages[response_code])

  return results.map(({ incorrect_answers, ...question }) => ({
    ...question,
    picked: "",
    options: [question.correct_answer, ...incorrect_answers].sort(
      () => Math.random() - 0.5
    ),
    score: 0,
  }))
}
