import { useAppSelector, useAppDispatch } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { closeModal } from 'features/quizModalSlice';
import { startTimer } from 'features/timerSlice';
import './QuizModal.css';

export default function QuizModal() {
  const { isOpen } = useAppSelector((state) => state.quizModal);
  const { questions, currentIndex } = useAppSelector((state) => state.quiz);
  const dispatch = useAppDispatch();
  return isOpen ? (
    <div className='modal-container'>
      <div className='modal'>
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
              dispatch(closeModal()), dispatch(startTimer());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : <></>
}
