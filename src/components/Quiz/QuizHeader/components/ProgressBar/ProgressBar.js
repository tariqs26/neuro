import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ProgressBar.css"
export default function ProgressBar() {
  const { questions, progress } = useSelector((state) => state.quiz);
  const barRef = useRef(null);
  useEffect(() => {
    barRef.current.style.width = `${(progress / questions.length) * 100}%`;
  }, [progress, questions]);

  return (
    <div className="progress-bar">
      <div className="bar" ref={barRef}></div>
    </div>
  );
}
