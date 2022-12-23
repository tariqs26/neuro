import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { closeModal } from 'features/quizModalSlice';
import './QuizModal.css';

export default function QuizModal() {
  const { isOpen } = useAppSelector((state) => state.quizModal);
  const dispatch = useAppDispatch();
  return (
    <div className={`modal-container ${isOpen ? '' : 'hidden'}`}>
      <div className='modal page'>
        <h1>Leave quiz?</h1>
        <p>
          Leaving the quiz will reset your progress. Are you sure you want to?
        </p>
        <div className='buttons'>
          <button
            className='confirm'
            onClick={() => {
              dispatch(closeModal()), dispatch(setPage('home'));
            }}
          >
            Confirm
          </button>
          <button
            className='cancel'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
