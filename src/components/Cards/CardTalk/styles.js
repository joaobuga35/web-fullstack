import { styled } from "styled-components";

const DivCardTalk = styled.div`
  border-radius: 10px;
  border: 1px solid var(--color-border);
  background: #fff;
  margin-bottom: 15px;
  height: 360px;

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
    height: 360px;
    width: 350px;
  }
`;

const ListCardTalk = styled.ul`
  padding-top: 15px;
  padding-left: 10px;
  padding-right: 12px;
`;

const LiCardTalk = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  p {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const ButtonAddPoint = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--color-primary);
  border: none;
  background-color: var(--color-white);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%;
  letter-spacing: 0.08px;

  span {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 165%; /* 26.4px */
    letter-spacing: 0.08px;
  }

  &:hover {
    filter: none;
  }
`;

export { DivCardTalk, ListCardTalk, LiCardTalk, ButtonAddPoint };
