import styled from "styled-components";

const Container = styled.div`
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

const ContainerHeaderTable = styled.tr`
  height: 80px;
  border-bottom: 1px solid #cccccc;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;

const HeaderColumn = styled.th`
  font-weight: 500;
  font-family: Barlow Bold;
  font-size: 16px;
  line-height: 19.2px;
  width: 100px;
`;

const ContainerRowCar = styled.tr`
  height: 80px;
  border-bottom: 1px solid #cccccc;
  text-align: center;
`;

const ItemRow = styled.td`
  font-family: Barlow Medium;
`;

export {
  Container,
  ContainerHeaderTable,
  ContainerRowCar,
  HeaderColumn,
  ItemRow,
};
