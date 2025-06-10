import type { FormEvent } from "react"
import { useDispatch, useSelector } from "@/app/hooks"
import { setPage } from "@/features/appSlice"
import { setIsSubmitting } from "@/features/formSlice"
import { resetQuiz, setQuestions } from "@/features/quizSlice"
import { getQuestions } from "@/lib/api"
import { INPUT_OPTIONS } from "@/lib/constants"

import { CategoryInput } from "@/components/form/CategoryInput"
import { Input } from "@/components/form/Input"

import "./Form.css"

export const FormPage = () => {
  const { isSubmitting, data } = useSelector((state) => state.form)
  const dispatch = useDispatch()

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
        values={INPUT_OPTIONS.amount}
      />
      <CategoryInput />
      <Input
        label="Difficulty"
        dataName="difficulty"
        stateValue={data.difficulty}
        values={INPUT_OPTIONS.difficulty}
      />
      <Input
        label="Type"
        dataName="type"
        stateValue={data.type}
        values={INPUT_OPTIONS.type}
      />
      <div className="form-group">
        <button type="submit" className="form-control" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Start Quiz"}
        </button>
      </div>
    </form>
  )
}
