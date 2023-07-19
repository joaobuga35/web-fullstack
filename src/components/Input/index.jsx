import DivInput from "./styles";

const InputMain = ({ label, inputType, inputName, placeholder }) => {
  return (
    <DivInput>
      <label htmlFor={label}>{label}</label>
      <input
        type={inputType}
        id={inputName}
        name={inputName}
        placeholder={placeholder}
      />
    </DivInput>
  );
};

export default InputMain;
