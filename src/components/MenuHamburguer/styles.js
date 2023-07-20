import { styled } from "styled-components";

const MenuSecret = styled.nav`
  padding-top: 46px;
  padding-left: 13px;
  padding-right: 13px;
  margin: 0;
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 225px;
  height: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 1;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    span {
      color: var(--gray-400);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 36px;

    span {
      color: var(--gray-400);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    li {
      display: flex;
      align-items: center;
      gap: 14px;
      cursor: pointer;

      img {
        filter: invert(70%) sepia(0%) saturate(0%) hue-rotate(231deg)
          brightness(94%) contrast(94%);
      }
    }

    li:hover > span {
      color: var(--color-primary);
    }

    li:hover > img {
      filter: invert(62%) sepia(100%) saturate(7459%) hue-rotate(233deg)
        brightness(90%) contrast(103%);
    }
  }

  section {
    display: flex;
    align-items: center;
    gap: 19px;
    cursor: pointer;
    margin-top: 225px;

    /* img {
      filter: invert(70%) sepia(0%) saturate(0%) hue-rotate(231deg)
        brightness(94%) contrast(94%);
    } */

    span {
      color: var(--gray-400);
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
  section:hover > span {
    color: var(--color-primary);
  }

  section:hover > img {
    filter: invert(62%) sepia(100%) saturate(7459%) hue-rotate(233deg)
      brightness(90%) contrast(103%);
  }
`;

export default MenuSecret;
