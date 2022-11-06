import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearQuiz } from 'features/quizSlice';
import { clearTimer } from 'features/timerSlice';
import { setValue } from 'features/formSlice';
import Select from './Select';
import Categories from './Categories';
import './Form.css';

export default function Form() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
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
      <div className='input-container'>
        <label>Number of Questions:</label>
        <div className='opt-group' data-name='amount'>
          <option className='active' value='5' onClick={handleOptionClick}>
            5
          </option>
          {[10, 15, 20].map((amt) => (
            <option value={amt} onClick={handleOptionClick}>
              {amt}
            </option>
          ))}
        </div>
      </div>
      <Select name='category' dispatch={dispatch}>
        <Categories />
      </Select>
      <div className='input-container'>
        <label>Select Difficulty:</label>
        <div className='opt-group difficulty' data-name='difficulty'>
          <option className='active' value='easy' onClick={handleOptionClick}>
            Easy
          </option>
          <option value='medium' onClick={handleOptionClick}>
            Medium
          </option>
          <option value='hard' onClick={handleOptionClick}>
            Hard
          </option>
        </div>
      </div>
      <div className='input-container'>
        <label>Select Type:</label>
        <div className='opt-group' data-name='type'>
          <option
            className='active'
            value='multiple'
            onClick={handleOptionClick}
          >
            Multiple Choice
          </option>
          <option value='boolean' onClick={handleOptionClick}>
            True / False
          </option>
        </div>
      </div>
      <div className='input-container'>
        <input type='submit' value='Start quiz' className='form-control' />
      </div>
    </form>
  );
}
