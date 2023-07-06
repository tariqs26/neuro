import { useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';

export const LeaveButton = () => {
  return (
    <button
      className='btn leave'
      onClick={() => {
        const modal = document.querySelector('.modal');
        (modal as HTMLDialogElement).showModal();
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
