import styled from "styled-components";

/* PRIMER APARTADO FORMULARIO PAGE */

const Container = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.15);
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    height: 114px;
  }
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const TxtFormulario = styled.p`
  color: #002eff;
  font-weight: 400;
  line-height: normal;
  margin-right: 10px;
  font-family: Barlow Thin;
  font-size: 56px;

  @media (max-width: 768px) {
    font-size: 46px;
  }

  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 24px;
  }
`;

const TxtPrueba = styled.p`
  color: #002eff;
  font-weight: 600;
  line-height: normal;
  margin-right: 10px;
  font-family: Barlow Bold;
  font-size: 56px;

  @media (max-width: 768px) {
    font-size: 46px;
  }

  @media (max-width: 425px) {
    font-size: 30px;
    line-height: 24px;
  }
`;

const ImgPortada = styled.img`
  width: 400px;
  height: 400px;
  position: relative;
  top: 32px;

  @media (max-width: 425px) {
    top: 12px;
    width: 150px;
    height: 150px;
  }
`;

/* SEGUNDO APARTADO FORMULARIO PAGE */
const ContainerForm = styled.div`
  width: 825px;
  padding-bottom: 200px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;

  @media (max-width: 768px) {
    width: 550px;
  }

  @media (max-width: 425px) {
    width: 320px;
  }
`;

const TitleDescForm = styled.p`
  color: #191919;
  font-size: 30px;
  font-weight: 600;
  line-height: normal;
  font-family: Barlow Medium;
  margin-bottom: 10px;
`;

const DescFrom = styled.p`
  color: #191919;
  font-size: 18px;
`;

const TitleFrom = styled.p`
  font-size: 20px;
  font-weight: 600;
  font-family: Barlow bold;
  line-height: normal;
  margin-bottom: 26px;
`;

const FirstRowForm = styled.div`
  box-shadow: 0px 3px 0px -2px rgba(0, 0, 0, 0.15);
  padding-bottom: 30px;
  margin-bottom: 16px;
  display: flex;
  gap: 30px;
  flex-direction: row;

  @media (max-width: 425px) {
    flex-wrap: wrap;
  }
`;

const CustomInput = styled.div<{ $widthInput?: string; $disabled?: boolean }>`
  height: 56px;
  border: none;
  border: ${(props) =>
    props.$disabled ? "2px solid #A8A8A8" : "2px solid #002eff"};
  border-radius: 8px;
  width: ${(props) => props.$widthInput};

  @media (max-width: 768px) {
    width: ${(props) =>
      props.$widthInput === "30%"
        ? "100%"
        : props.$widthInput === "65%"
        ? "55%"
        : "40%"};
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const CustomInputForm = styled.input`
  height: 50px;
  width: 90%;
  border: none;
  outline: none;
  padding-left: 16px;
  margin-left: 5px;
  color: #191919;
  font-size: 16px;
  font-weight: 400;
  font-family: Barlow Medium;
  line-height: 24px;
`;

const CustomSelectForm = styled.select<{ $disabled?: boolean }>`
  height: 50px;
  width: 90%;
  border: none;
  outline: none;
  padding-left: 16px;
  margin-left: 5px;
  color: #191919;
  font-size: 16px;
  font-weight: 400;
  font-family: Barlow Medium;
  line-height: 24px;
  background-color: #fff;
  cursor: ${(props) => (props.$disabled ? "pointer" : "default")};
`;

const CustomOptionSelect = styled.option`
  background-color: #fff;
  cursor: pointer;
`

const CustomSpanForm = styled.span<{ $disabled?: boolean }>`
  background-color: #fff;
  position: relative;
  left: 20px;
  bottom: 110%;
  padding: 0px 14px;
  color: ${(props) => (props.$disabled ? "#A8A8A8" : "#002eff")};
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;

const CustomSymbolForm = styled.span`
  color: #dc2020;
  margin-left: 8px;
`;

const SecondRowForm = styled.div`
  box-shadow: 0px 3px 0px -2px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
  display: flex;
  gap: 30px;
  padding-bottom: 30px;
  flex-wrap: wrap;
`;

const BtnSubmit = styled.button`
  width: 140px;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #002eff;
  border: none;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #fff;
  position: absolute;
  right: 0px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 46, 255, 0.9);
  }

  &:active {
    background-color: rgba(0, 46, 255, 0.6);
  }

  @media (max-width: 768px) {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 425px) {
    width: 80%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export {
  Container,
  ContainerTitle,
  TxtFormulario,
  TxtPrueba,
  ImgPortada,
  ContainerForm,
  TitleDescForm,
  DescFrom,
  TitleFrom,
  FirstRowForm,
  CustomInput,
  CustomInputForm,
  CustomSelectForm,
  CustomOptionSelect,
  CustomSpanForm,
  CustomSymbolForm,
  SecondRowForm,
  BtnSubmit,
};
