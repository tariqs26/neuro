const Title = ({ percentCorrect }: { percentCorrect: number }) => {
  const className = `result-title ${
    percentCorrect === 1
      ? "flawless"
      : percentCorrect > 0.5
      ? "excellent"
      : "fail"
  }`

  const title =
    percentCorrect === 1
      ? "Flawless!"
      : percentCorrect > 0.7
      ? "Excellent!"
      : percentCorrect > 0.5
      ? "You Passed"
      : "You Failed"

  return <h1 className={className}>{title}</h1>
}

export default Title
