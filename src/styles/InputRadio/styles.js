import styled, { css } from "styled-components";

const RadioInput = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;

  &:checked {
    background-color: #476ee6;
  }

  ${({ sizeInput }) => {
    switch (sizeInput) {
      case "talk":
        return css`
          width: 12px;
          height: 12px;
        `;
    }
  }}
`;

const RadioButton = styled.label`
  width: 23px;
  height: 23px;
  border: 2px solid #476ee6;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  vertical-align: middle;

  ${({ sizeInput }) => {
    switch (sizeInput) {
      case "talk":
        return css`
          width: 20px;
          height: 20px;
        `;
    }
  }}
`;

export { RadioButton, RadioInput };
