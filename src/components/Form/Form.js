import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setValue } from 'features/formSlice';
import { clearQuiz } from 'features/quizSlice';
import { clearTimer } from 'features/timerSlice';
import CategoryInput from './components/CategoryInput';
import DifficultyInput from './components/DifficultyInput';
import AmountInput from './components/AmountInput';
import TypeInput from './components/TypeInput';
import './Form.css';

export default function Form() {
  const navigate = useNavigate(),
    dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearQuiz());
    dispatch(clearTimer());
    navigate('/quiz');
  };

  const handleOptionClick = (e) => {
    const parent = e.target.parentNode;
    const group = parent.querySelector('.active');
    group.classList.remove('active');
    group.classList.add('inactive');
    e.target.classList.add('active');
    e.target.classList.remove('inactive');
    dispatch(setValue({ name: parent.dataset.name, value: e.target.value }));
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <AmountInput clickHandler={handleOptionClick} />
      <CategoryInput dispatch />
      <DifficultyInput clickHandler={handleOptionClick} />
      <TypeInput clickHandler={handleOptionClick} />
      <div className='input-container'>
        <input type='submit' value='Start quiz' className='form-control' />
      </div>
    </form>
  );
}
