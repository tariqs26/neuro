import { useSelector } from "@/app/hooks"
import ProgressBar from "./ProgressBar"
import Timer from "./Timer"
import "./Footer.css"

const Footer = () => {
  const { questions, currentIndex } = useSelector((state) => state.quiz)

  return (
    <footer className="footer">
      <Timer />
      <ProgressBar {...{ questions, currentIndex }} />
      <p className="question-display">
        Q: {currentIndex + 1}/{questions.length}
      </p>
    </footer>
  )
}

export default Footer
