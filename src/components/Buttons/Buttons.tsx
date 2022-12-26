import { useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { openModal } from 'features/quizModalSlice';
import './Buttons.css';

export const LeaveButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      className='leave btn'
      onClick={() => {
        dispatch(openModal());
      }}
    >
      Leave Quiz
    </button>
  );
};

export const HomeButton = () => {
  const dispatch = useAppDispatch();
  return (
    <button className='btn' onClick={() => dispatch(setPage('home'))}>
      Home
    </button>
  );
};
