import DivInput from "./styles";

// eslint-disable-next-line react/prop-types
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
