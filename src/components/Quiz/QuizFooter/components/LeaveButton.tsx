import { AppDispatch } from 'app/store';
import { stopTimer } from 'features/timerSlice';
import { openModal } from 'features/quizModalSlice';

interface Props {
  dispatch: AppDispatch;
}
export default function LeaveButton({ dispatch }: Props) {
  return (
    <button
      className='leave'
      onClick={() => {
        dispatch(stopTimer());
        dispatch(openModal());
      }}
    >
      Leave
    </button>
  );
}
