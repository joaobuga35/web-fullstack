import { styled } from "styled-components";

const MainContent = styled.main`
  padding-left: 30px;
  padding-right: 30px;

  h2 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    margin-bottom: 22px;
  }

  form {
    margin-bottom: 42px;
    .divInputRadio {
      display: flex;
      gap: 15px;

      input {
        cursor: pointer;
      }

      label {
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 10px;
          border: 2px solid var(--color-primary);
          background-color: transparent;
        }

        input:checked + &::before {
          background-color: var(--color-primary);
        }

        &::after {
          content: "✔";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16px;
          color: #fff;
          opacity: 0;
          transition: opacity 0.2s ease-in;
        }

        input:checked + &::after {
          opacity: 1;
        }
        span {
          margin-top: 8px;
          color: var(--color-primary);
          display: block;
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 20px;
        }
        span:hover {
          text-decoration: underline var(--color-primary);
        }
      }
    }
  }
`;

export default MainContent;
