import { useRef, useEffect } from 'react';

type Props = {
  questions: Array<any>;
  currentIndex: number;
};
export default function ProgressBar({ questions, currentIndex: idx }: Props) {
  const barRef = useRef(null);
  useEffect(() => {
    if (!barRef.current) return;
    (barRef.current as HTMLElement).style.width = `${
      ((idx + 1) / questions.length) * 100
    }%`;
  }, [idx, questions]);

  return (
    <div className='progress-bar'>
      <div className='bar' ref={barRef}></div>
    </div>
  );
}
