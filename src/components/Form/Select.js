const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export default function Select({ name, dispatch, children }) {
  return (
    <div className="input-container">
      <label htmlFor={name}>{"Select " + capitalize(name) + ":"}</label>
      <select
        name={name}
        className="form-control"
        onChange={(e) => {
          dispatch({
            action: "SET_VALUE",
            payload: { name, value: e.target.value },
          });
        }}
      >
        {/* <option value="any">{"Any " + capitalize(name)}</option> */}
        {children}
      </select>
    </div>
  );
}
