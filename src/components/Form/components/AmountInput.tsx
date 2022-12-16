import { InputProps } from '../Form';

export default function AmountInput({ clickHandler }: InputProps) {
  return (
    <div className='input-container'>
      <label>Number of Questions:</label>
      <div className='opt-group' data-name='amount'>
        {[5, 10, 15, 20].map((amt, idx) => (
          <option
            key={amt}
            className={idx === 0 ? 'active' : ''}
            value={amt}
            onClick={clickHandler}
          >
            {amt}
          </option>
        ))}
      </div>
    </div>
  );
}
