import { useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import './QuizModal.css';

export default function QuizModal() {
  const dispatch = useAppDispatch();

  return (
    <dialog className='modal'>
      <h1>Leave quiz?</h1>
      <p>
        Leaving the quiz will reset your progress. Are you sure you want to?
      </p>
      <div className='buttons'>
        <button className='confirm' onClick={() => dispatch(setPage('home'))}>
          Confirm
        </button>
        <button
          className='cancel'
          onClick={() => {
            const modal = document.querySelector('.modal') as HTMLDialogElement;
            modal.setAttribute('closing', '');
            modal.addEventListener(
              'animationend',
              () => {
                modal.removeAttribute('closing');
                modal.close();
              },
              { once: true }
            );
          }}
        >
          Cancel
        </button>
      </div>
    </dialog>
  );
}
