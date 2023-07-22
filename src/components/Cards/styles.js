import { styled } from "styled-components";

const Card = styled.section`
  padding: 20px;
  border-radius: 10px;
  height: 188px;
  border: 1px solid var(--color-border);
  background: #fff;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    height: 188px;
    width: 350px;
  }
`;

const DivTitleCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border-2);
`;

const DivText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  span {
    color: var(--color-primary);
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 0.75px;
  }

  @media (min-width: 375px) {
    h3 {
      font-size: 14px;
    }

    span {
      font-size: 12px;
    }
  }
`;

const ListPersons = styled.ul``;

const ProfilesLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  span {
    color: var(--gray-500);
  }

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    img {
      height: 30px;
      width: 30px;
    }
  }
`;

export { Card, DivTitleCard, DivText, ListPersons, ProfilesLi };
