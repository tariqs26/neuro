import { FormState } from 'features/formSlice';

type FormValue = FormState[keyof FormState];
type Props = {
  label: string;
  dataName: keyof FormState;
  stateValue: FormValue;
  values: Array<[string, FormValue]>;
  clickHandler: (e: React.MouseEvent) => void;
};

const Input = ({
  label,
  dataName,
  stateValue,
  values,
  clickHandler,
}: Props) => {
  return (
    <div className='input-container'>
      <label>{`Select ${label}`}</label>
      <div className='opt-group' data-name={dataName}>
        {values.map(([key, value]) => (
          <option
            key={key}
            className={value === stateValue ? 'active' : 'inactive'}
            value={value}
            onClick={clickHandler}
          >
            {key}
          </option>
        ))}
      </div>
    </div>
  );
};

export default Input;
