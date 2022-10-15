import { useSelector } from "react-redux";

export default function ScoreDisplay({questions }) {
  const { currentIndex } = useSelector((state) => state.quiz);
  return (
    <h2 className="score">
      Question: {currentIndex + 1}/{questions.length}
    </h2>
  );
}
