import { styled } from "styled-components";

const DivInput = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    color: var(--color-black);
  }

  input {
    width: 100%;
    height: 50px;
    border: solid 1px var(--color-border);
    padding-left: 12px;
    padding-top: 14px;
    padding-bottom: 14px;
  }
`;

export default DivInput;
