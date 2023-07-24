import { styled } from "styled-components";
const DivTitleModalExclude = styled.div`
  padding-left: 18px;
  padding-right: 18px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonModalExclude = styled.button`
  border: none;
  height: 29px;
  width: 68px;
  text-align: center;
  border-radius: 50px;
  background: #ffe1e1;
  color: #ea0000;
`;

const TextModalExclude = styled.p`
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
`;
export { DivTitleModalExclude, ButtonModalExclude, TextModalExclude };
