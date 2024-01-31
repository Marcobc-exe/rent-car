import styled from "styled-components";

const ContainerNavbar = styled.div`
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  max-height: 40px;
  width: auto;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 25px 80px;
  justify-content: right;
  @media (max-width: 425px) {
    padding: 16px 14px;
  }
`;

const BtnForm = styled.div<{ $active?: boolean }>`
  padding: 8px 16px;
  border: none;
  background-color: ${(props) => (props.$active ? "#F3F5FF" : "#fff")};
  border-radius: 24px;
  color: #002eff;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  cursor: pointer;
  height: 40px;
  text-decoration: none;

  @media (max-width: 425px) {
    background-color: #fff;
    color: #0c0c0c;
    font-family: ${(props) => (props.$active ? "Inter Medium" : "Inter Light")};
    border-radius: 0;
    font-size: 16px;
    font-weight: ${(props) => (props.$active ? 600 : 400)};
    line-height: 24px;
    letter-spacing: 0.04px;
    padding: 0;
    text-decoration-line: ${(props) => (props.$active ? "underline" : "blink")};
  }
`;

export { ContainerNavbar, BtnForm };
