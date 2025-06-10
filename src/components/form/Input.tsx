import { useDispatch } from "@/app/hooks"
import { setValue } from "@/features/formSlice"
import type { Data, FormValue } from "@/types/form"

type InputProps = {
  label: string
  dataName: keyof Data
  stateValue: FormValue
  values: Array<[string, FormValue]>
}

export const Input = (props: InputProps) => {
  const dispatch = useDispatch()

  const handleOptionClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLButtonElement
    const parent = target.parentNode as HTMLDivElement
    target.classList.add("active")
    target.classList.remove("inactive")
    dispatch(
      setValue({
        name: parent.dataset.name as keyof Data,
        value: target.value,
      })
    )
  }

  return (
    <div className="form-group">
      <label className="form-label">{props.label}</label>
      <div className="option-group" data-name={props.dataName}>
        {props.values.map(([key, value]) => (
          <button
            type="button"
            key={key}
            className={`form-control ${
              value === props.stateValue ? "active" : "inactive"
            }`}
            value={value}
            onClick={handleOptionClick}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}
