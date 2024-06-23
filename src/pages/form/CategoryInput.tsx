import { useDispatch, useSelector } from "@/app/hooks"
import { setValue } from "@/features/formSlice"
import { categories } from "./categories"

const CategoryInput = () => {
  const dispatch = useDispatch()
  const category = useSelector((state) => state.form.data.category)

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
        {categories.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategoryInput
