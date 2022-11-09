export default function AmountInput({ clickHandler }) {
  return (
    <div className='input-container'>
      <label>Number of Questions:</label>
      <div className='opt-group' data-name='amount'>
        <option className='active' value='5' onClick={clickHandler}>
          5
        </option>
        {[10, 15, 20].map((amt) => (
          <option value={amt} onClick={clickHandler}>
            {amt}
          </option>
        ))}
      </div>
    </div>
  );
}
