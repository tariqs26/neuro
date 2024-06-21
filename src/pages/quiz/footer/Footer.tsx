import { useSelector } from "@/app/hooks"
import ProgressBar from "./ProgressBar"
import Timer from "./Timer"
import "./Footer.css"

const Footer = () => {
  const { questions, currentIndex } = useSelector((state) => state.quiz)

  return (
    <div className="header">
      <Timer />
      <ProgressBar {...{ questions, currentIndex }} />
      <p className="footer-question-display">
        Q: {currentIndex + 1}/{questions.length}
      </p>
    </div>
  )
}

export default Footer
