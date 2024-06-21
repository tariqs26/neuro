import { useSelector } from "./app/hooks"
import type { Page } from "./types"

import Navbar from "./components/Navbar"
import ErrorPage from "./pages/Error"
import Form from "./pages/form/Form"
import Quiz from "./pages/quiz/Quiz"
import Results from "./pages/results/Results"

import "./App.css"

const pageMap: Record<Page, JSX.Element> = {
  home: <Form />,
  quiz: <Quiz />,
  results: <Results />,
  error: <ErrorPage />,
}

export default function App() {
  const { page } = useSelector((state) => state.app)

  return (
    <>
      <Navbar />
      <main className="page-container">{pageMap[page]}</main>
    </>
  )
}
