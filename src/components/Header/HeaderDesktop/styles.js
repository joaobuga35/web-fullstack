import { styled } from "styled-components";

const HeaderDeskStyle = styled.header`
  min-width: 1000px;
  max-width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  margin-bottom: 30px;

  h1 {
    color: #476ee6;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 24.286px; /* 80.954% */
    letter-spacing: 0.101px;
  }
`;

const DivProfileHeader = styled.div`
  padding: 6px;
  width: 234.432px;
  height: 54.228px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 60px;
  border: 1px solid #d8d8d8;
  background: #fff;
  cursor: pointer;
`;

export { HeaderDeskStyle, DivProfileHeader };
