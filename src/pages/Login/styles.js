import { styled } from "styled-components";

const MainLogin = styled.main`
  padding-left: 30px;
  padding-right: 30px;
  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  span {
    display: flex;
    justify-content: flex-end;
    color: #476ee6;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
  }

  span:hover {
    text-decoration: underline var(--color-primary);
  }
`;

export default MainLogin;
