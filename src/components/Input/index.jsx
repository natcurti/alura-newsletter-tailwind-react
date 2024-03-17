const Input = ({ inputType, placeholderInput }) => {
  return (
    <input
      type={inputType}
      placeholder={placeholderInput}
      className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-200 dark:text-gray-200 rounded-full outline-none"
    />
  );
};

export default Input;
