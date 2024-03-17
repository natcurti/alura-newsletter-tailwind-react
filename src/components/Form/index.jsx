import Input from "../Input";

const Form = ({ onSubmit }) => {
  const safeSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const name = e.target[0].value;
    const email = e.target[1].value;
    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <Input inputType="text" placeholderInput="Insira seu nome" />
      <Input inputType="email" placeholderInput="Insira seu email" />

      <button type="submit" className="alura-button">
        Seguir
      </button>
    </form>
  );
};

export default Form;
