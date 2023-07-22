import { styled } from "styled-components";

const DivCardNotion = styled.div`
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: #fff;
  margin-bottom: 15px;
  height: 400px;

  h2 {
    height: 52px;
    color: var(--color-black);
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
    padding: 14px 16px;
    border-bottom: 1px solid var(--color-border-2);
  }
  @media (min-width: 768px) {
    height: 400px;
    width: 350px;
  }
`;

const ContainerTextArea = styled.div`
  padding-left: 17px;
  padding-right: 17px;
`;

const TextAreaInput = styled.textarea`
  margin-top: 16px;
  width: 100%;
  height: 65px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #efefef;
  border-radius: 8px;
  background-color: #faf9f9;
  resize: none;
  margin-bottom: 28px;
`;

const DivInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 17px;
  padding-right: 17px;
`;
const DivProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  p {
    color: #000;
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const SpanInformation = styled.span`
  color: var(--color-black);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 230px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 60px;
  background: #f4f4f4;
`;

const ParagraphNotion = styled.li`
  color: var(--color-black);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--color-border);
`;

export {
  DivCardNotion,
  ContainerTextArea,
  TextAreaInput,
  DivInformation,
  DivProfile,
  SpanInformation,
  ParagraphNotion,
};
