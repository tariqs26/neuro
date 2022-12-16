import { InputProps } from '../Form';

export default function DifficultyInput({ clickHandler }: InputProps) {
  return (
    <div className='input-container'>
      <label>Select Difficulty:</label>
      <div className='opt-group difficulty' data-name='difficulty'>
        {['Easy', 'Medium', 'Hard'].map((diff, idx) => (
          <option
            key={diff}
            className={idx === 0 ? 'active' : ''}
            value={diff.toLowerCase()}
            onClick={clickHandler}
          >
            {diff}
          </option>
        ))}
      </div>
    </div>
  );
}
