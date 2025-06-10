import { useSelector } from "./app/hooks"
import type { Page } from "./types"

import { Navbar } from "./components/Navbar"
import { ErrorPage } from "./pages/Error"
import { FormPage } from "./pages/form/Form"
import { QuizPage } from "./pages/quiz/Quiz"
import { ResultsPage } from "./pages/results/Results"

import "./App.css"

const pageMap: Record<Page, React.ReactElement> = {
  home: <FormPage />,
  quiz: <QuizPage />,
  results: <ResultsPage />,
  error: <ErrorPage />,
}

export const App = () => {
  const { page } = useSelector((state) => state.app)

  return (
    <>
      <Navbar />
      <main className="page-container">{pageMap[page]}</main>
    </>
  )
}
