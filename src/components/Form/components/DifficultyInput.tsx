import { InputProps } from '../Form';

export default function DifficultyInput({ clickHandler }: InputProps) {
  return (
    <div className='input-container'>
      <label>Select Difficulty:</label>
      <div className='opt-group difficulty' data-name='difficulty'>
        <option className='active' value='easy' onClick={clickHandler}>
          Easy
        </option>
        <option value='medium' onClick={clickHandler}>
          Medium
        </option>
        <option value='hard' onClick={clickHandler}>
          Hard
        </option>
      </div>
    </div>
  );
}
