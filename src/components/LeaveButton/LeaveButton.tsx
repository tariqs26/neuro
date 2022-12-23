import { useAppDispatch } from 'app/hooks';
import { openModal } from 'features/quizModalSlice';
import './LeaveButton.css';

export default function LeaveButton() {
  const dispatch = useAppDispatch();
  return (
    <button
      className='leave'
      onClick={() => {dispatch(openModal())}}
    >
      Leave Quiz
    </button>
  );
}
