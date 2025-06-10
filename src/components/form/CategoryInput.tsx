import { useDispatch, useSelector } from "@/app/hooks"
import { setValue } from "@/features/formSlice"
import { CATEGORIES } from "@/lib/constants"

export const CategoryInput = () => {
  const category = useSelector(({ form }) => form.data.category)
  const dispatch = useDispatch()

  return (
    <div className="form-group">
      <label htmlFor="category" className="form-label">
        Category
      </label>
      <select
        name="category"
        className="form-control"
        value={category}
        onChange={(e) => {
          dispatch(setValue({ name: "category", value: e.target.value }))
        }}
        title="Select a category"
      >
        {CATEGORIES.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}
