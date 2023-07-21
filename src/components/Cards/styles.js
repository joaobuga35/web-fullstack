import { styled } from "styled-components";

const Card = styled.section`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: #fff;
`;

const DivTitleCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
`;

const RadioLabel = styled.label`
  width: 16px;
  height: 16px;
  border: 2px solid #476ee6;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  ${RadioInput}:checked &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #476ee6;
    border-radius: 50%;
    position: absolute;
    top: 3px;
    left: 3px;
  }
`;

export { Card, DivTitleCard, RadioInput, RadioLabel };
