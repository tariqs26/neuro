import { useSelector } from "@/app/hooks"
import { MinusCircle, RightCircle, WrongCircle } from "@/components/Icons"
import Anchor from "../../pages/results/components/Anchor"
import Row from "../../pages/results/components/Row"
import ResultsTitle from "../../pages/results/components/Title"

import "./Results.css"

const Results = () => {
  const { questions } = useSelector((state) => state.quiz)

  const score = questions.reduce((acc, q) => acc + q.score, 0)
  const correct = questions.filter((q) => q.picked === q.correct_answer).length
  const percentCorrect = correct / questions.length

  return (
    <>
      <div className="results page">
        <ResultsTitle {...{ percentCorrect }} />
        <div className="question-stats">
          <p title="correct">
            <RightCircle /> {correct}
          </p>
          <p title="wrong">
            <WrongCircle />
            {
              questions.filter((q) => q.picked && q.picked !== q.correct_answer)
                .length
            }
          </p>
          <p title="unattempted">
            <MinusCircle /> {questions.filter((q) => !q.picked).length}
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Your Answer</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((q, idx) => (
              <Row key={q.question} question={q} idx={idx} />
            ))}
            <tr>
              <td colSpan={4}>Total Score</td>
              <td>{score}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Anchor />
    </>
  )
}

export default Results
