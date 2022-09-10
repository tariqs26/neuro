import { useRef, useEffect } from "react";
export default function AmountInput({ dispatch }) {
  const amtRef = useRef();
  useEffect(() => {
    amtRef.current.value = "10";
  }, []);

  return (
    <div className="input-container">
      <label htmlFor="amt_q">Number of Questions:</label>
      <input
        className="form-control"
        name="amt_q"
        type="number"
        min="1"
        max="50"
        ref={amtRef}
        onChange={(e) =>
          dispatch({
            action: "SET_VALUE",
            payload: { name: "amount", value: e.target.value },
          })
        }
      />
    </div>
  );
}
