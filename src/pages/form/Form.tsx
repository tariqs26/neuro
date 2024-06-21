import type { FormEvent } from "react"
import { getQuestions } from "@/api"
import { useDispatch, useSelector } from "@/app/hooks"
import { setPage } from "@/features/appSlice"
import { setIsSubmitting } from "@/features/formSlice"
import { resetQuiz, setQuestions } from "@/features/quizSlice"

import CategoryInput from "./CategoryInput"
import Input from "./Input"

import "./Form.css"

const Form = () => {
  const dispatch = useDispatch()

  const { isSubmitting, data } = useSelector((state) => state.form)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      dispatch(setIsSubmitting(true))
      const questions = await getQuestions(data)
      dispatch(resetQuiz())
      dispatch(setQuestions(questions))
      dispatch(setPage("quiz"))
    } catch (error) {
      dispatch(setPage("error"))
    } finally {
      dispatch(setIsSubmitting(false))
    }
  }

  return (
    <form className="page form" onSubmit={handleSubmit}>
      <Input
        label="Number of Questions"
        dataName="amount"
        stateValue={data.amount}
        values={[
          ["5", "5"],
          ["10", "10"],
          ["15", "15"],
          ["20", "20"],
        ]}
      />
      <CategoryInput />
      <Input
        label="Difficulty"
        dataName="difficulty"
        stateValue={data.difficulty}
        values={[
          ["Easy", "easy"],
          ["Medium", "medium"],
          ["Hard", "hard"],
        ]}
      />
      <Input
        label="Type"
        dataName="type"
        stateValue={data.type}
        values={[
          ["Multiple Choice", "multiple"],
          ["True / False", "boolean"],
        ]}
      />
      <div className="form-group">
        <button type="submit" className="form-control" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Start Quiz"}
        </button>
      </div>
    </form>
  )
}

export default Form
