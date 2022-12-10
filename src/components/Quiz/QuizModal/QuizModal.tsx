import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { closeModal } from 'features/quizModalSlice';
import { startTimer } from 'features/timerSlice';
import './QuizModal.css';

export default function QuizModal() {
  const { isOpen } = useAppSelector((state) => state.quizModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  return isOpen ? (
    <div className='modal-container'>
      <div className='modal'>
        <h3>Leave quiz?</h3>
        <div className='buttons'>
          <button
            className='confirm'
            onClick={() => {
              dispatch(closeModal()), navigate(-1);
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
  ) : null;
}
