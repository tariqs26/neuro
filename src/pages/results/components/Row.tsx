import type { QuizQuestion } from "@/types/quiz"

type RowProps = {
  question: QuizQuestion
  idx: number
}

const Row = ({
  question: { question, correct_answer, picked, score },
  idx,
}: RowProps) => (
  <tr key={question}>
    <td>{idx + 1}</td>
    {[question, picked, correct_answer].map((text, idx) => (
      <td
        key={`${text}${idx === 1 ? "-a" : "-u"}`}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    ))}
    <td>{score ? score.toFixed(0) : 0}</td>
  </tr>
)

export default Row
