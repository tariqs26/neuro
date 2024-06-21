export type Data = {
  amount: "5" | "10" | "15" | "20"
  category: string
  difficulty: "easy" | "medium" | "hard"
  type: "multiple" | "boolean"
}

export type FormState = {
  isSubmitting: boolean
  data: Data
}

export type FormValue = Data[keyof Data]
