import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setPage } from 'features/appSlice';
import { setValue } from 'features/formSlice';
import { clearQuiz } from 'features/quizSlice';
import { clearTimer } from 'features/timerSlice';
import Input from './components/Input';
import CategoryInput from './components/CategoryInput';
import './Form.css';

export default function Form() {
  const dispatch = useAppDispatch();
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(clearQuiz());
    dispatch(clearTimer());
    dispatch(setPage('quiz'));
  };

  const handleOptionClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLOptionElement;
    const parent = target.parentNode as HTMLDivElement;
    target.classList.add('active');
    target.classList.remove('inactive');
    dispatch(
      setValue({
        name: parent.dataset.name as keyof FormState,
        value: target.value,
      })
    );
  };

  const { amount, difficulty, type } = useAppSelector((state) => state.form);

  return (
    <form className='page' onSubmit={handleSubmit}>
      <Input
        label='Number of Questions'
        dataName='amount'
        stateValue={amount}
        values={[
          ['5', '5'],
          ['10', '10'],
          ['15', '15'],
          ['20', '20'],
        ]}
        clickHandler={handleOptionClick}
      />
      <CategoryInput />
      <Input
        label='Difficulty'
        dataName='difficulty'
        stateValue={difficulty}
        values={[
          ['Easy', 'easy'],
          ['Medium', 'medium'],
          ['Hard', 'hard'],
        ]}
        clickHandler={handleOptionClick}
      />
      <Input
        label='Type'
        dataName='type'
        stateValue={type}
        values={[
          ['Multiple Choice', 'multiple'],
          ['True / False', 'boolean'],
        ]}
        clickHandler={handleOptionClick}
      />
      <div className='input-container'>
        <input type='submit' value='Start quiz' className='form-control' />
      </div>
    </form>
  );
}
