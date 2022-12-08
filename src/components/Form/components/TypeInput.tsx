import { InputProps } from '../Form';

export default function TypeInput({ clickHandler }: InputProps) {
  return (
    <div className='input-container'>
      <label>Select Type:</label>
      <div className='opt-group' data-name='type'>
        <option className='active' value='multiple' onClick={clickHandler}>
          Multiple Choice
        </option>
        <option value='boolean' onClick={clickHandler}>
          True / False
        </option>
      </div>
    </div>
  );
}
