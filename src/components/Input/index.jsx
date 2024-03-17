const Input = ({ inputType, placeholderInput }) => {
  return (
    <input
      required
      type={inputType}
      placeholder={placeholderInput}
      className="alura-input"
    />
  );
};

export default Input;
