import { useRef, useEffect } from 'react';

export default function ProgressBar({ questions, currentIndex : idx }) {
  const barRef = useRef(null);
  useEffect(() => {
    barRef.current.style.width = `${
      ((idx + 1) / questions.length) * 100
    }%`;
  }, [idx, questions]);

  return (
    <div className='progress-bar'>
      <div className='bar' ref={barRef}></div>
    </div>
  );
}
