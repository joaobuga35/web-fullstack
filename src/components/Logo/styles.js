import styled, { css } from "styled-components";

const FigureLogo = styled.figure`
  margin-top: ${(props) => props.top};
  margin-bottom: ${(props) => props.bottom};
  padding-left: ${(props) => props.leftP};
  padding-right: ${(props) => props.rightP};

  ${({ logoPosition }) => {
    switch (logoPosition) {
      case "register":
        return css`
          background-color: var(--color-primary);
          border: 2px solid var(--color-primary);
          color: #fff;

          :hover {
            filter: brightness(0.9);
          }
        `;
      case "login":
        return css`
          display: flex;
          justify-content: center;
          align-items: center;

          :hover {
            filter: brightness(0.9);
          }
        `;
    }
  }}
  img {
    width: 190px;
    height: 47.739px;
  }
`;

export default FigureLogo;
