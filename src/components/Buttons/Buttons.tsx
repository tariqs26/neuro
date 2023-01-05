import { useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import './Buttons.css';

export const LeaveButton = () => {
  return (
    <button
      className='leave btn'
      onClick={() => {
        const modal = document.querySelector('.modal') as HTMLDialogElement;
        modal.showModal();
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
