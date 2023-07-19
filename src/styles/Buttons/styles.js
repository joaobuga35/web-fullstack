import { styled } from "styled-components";

const ButtonBlue = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  width: ${(props) => props.width};
  border-radius: 60px;
  background-color: var(--color-primary);
`;

export default ButtonBlue;
