import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearQuiz } from "features/quizSlice";
import reducer from "./reducer";
import "./Form.css";
import AmountInput from "./AmountInput";
import Select from "./Select";
import Categories from "./Categories";

export default function Form() {
  const [url, dispatch] = useReducer(reducer, {
    amount: "10",
    category: "9",
    difficulty: "easy",
    type: "multiple",
  });
  let navigate = useNavigate();
  const quizDispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    quizDispatch(clearQuiz());
    navigate("/quiz", {
      state: { url: url, timer: { limit: 9000, increment: 500 } },
    });
  };

  return (
    <div className="form-container">
      <form action="" onSubmit={handleSubmit}>
        <AmountInput dispatch={dispatch} />
        <Select name="category" dispatch={dispatch}>
          <Categories />
        </Select>
        <Select name="difficulty" dispatch={dispatch}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
        <Select name="type" dispatch={dispatch}>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </Select>
        <div className="input-container">
          <input type="submit" value="Start quiz" className="form-control" />
        </div>
      </form>
    </div>
  );
}
