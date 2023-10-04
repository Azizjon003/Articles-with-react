function Input({ type, placeholder, inputName, value, setState }) {
  return (
    <>
      <div className="form-floating">
        <input
          type={type}
          className="form-control"
          id="floatingInput"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setState(e.target.value)}
        />
        <label htmlFor="floatingInput">{inputName}</label>
      </div>
    </>
  );
}

export default Input;
