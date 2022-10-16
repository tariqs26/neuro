import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

export default function ProgressBar() {
  const { questions, currentIndex } = useSelector((state) => state.quiz);
  const barRef = useRef(null);
  useEffect(() => {
    barRef.current.style.width = `${
      ((currentIndex + 1) / questions.length) * 100
    }%`;
  }, [currentIndex, questions]);

  return (
    <div className="progress-bar">
      <div className="bar" ref={barRef}></div>
    </div>
  );
}
