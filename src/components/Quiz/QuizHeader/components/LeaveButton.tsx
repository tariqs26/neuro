import { stopTimer } from 'features/timerSlice';
import { openModal } from 'features/quizModalSlice';
import { AppDispatch } from 'store';

interface Props {
  dispatch: AppDispatch;
}
export default function LeaveButton({ dispatch } : Props) {
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
