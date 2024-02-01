import { Trash } from "@phosphor-icons/react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  DescFrom,
  TitleDescForm,
} from "../styledComponents/FormularioPageStyled/formularioPageStyled";
import {
  Container,
  ContainerHeaderTable,
  ContainerRowCar,
  HeaderColumn,
  ItemRow,
} from "../styledComponents/ListaFormularioPageStyled/ListaFormularioPageStyled";
import { removeCar } from "../store/slices/car";

type listCarsProps = {
  id: number;
  nombre: string;
  rut: number;
  patente: string;
  marca: string;
  modelo: string;
  color: string;
  precio: number;
};

export const ListaFormularioPage = () => {
  const dispatch = useAppDispatch();
  const listCars = useAppSelector((state) => state.car);
  console.log(listCars);
  const areContent = listCars.length > 0 ? true : false;
  const newlistCars = areContent && [...listCars].reverse();

  return (
    <Container>
      <div style={{ marginBottom: "65px" }}>
        <TitleDescForm style={{ marginBottom: "20px" }}>
          Lista formulario
        </TitleDescForm>
        <DescFrom>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the bed industry's standard dummy text
          ever since.
        </DescFrom>
      </div>

      {!areContent ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          Ingrese sus autos a la venta para ver los últimos 10 autos
          registrados!
        </p>
      ) : (
        <table style={{ width: "100%" }}>
          <ContainerHeaderTable>
            <HeaderColumn>Nombre</HeaderColumn>
            <HeaderColumn>Rut Vendedor</HeaderColumn>
            <HeaderColumn>Patente Vehiculo</HeaderColumn>
            <HeaderColumn>Marca Vehiculo</HeaderColumn>
            <HeaderColumn>Modelo Vehiculo</HeaderColumn>
            <HeaderColumn>Color Vehiculo</HeaderColumn>
            <HeaderColumn>Precio Vehiculo</HeaderColumn>
            <HeaderColumn>Eliminar</HeaderColumn>
          </ContainerHeaderTable>
          {newlistCars.slice(0, 10).map((car: listCarsProps, index: number) => (
            <ContainerRowCar key={index}>
              <ItemRow>{car.nombre}</ItemRow>
              <ItemRow>{car.rut}</ItemRow>
              <ItemRow>{car.patente}</ItemRow>
              <ItemRow>{car.marca}</ItemRow>
              <ItemRow>{car.modelo}</ItemRow>
              <ItemRow>{car.color}</ItemRow>
              <ItemRow>{car.precio}</ItemRow>
              <Trash
                size={30}
                color="#002EFF"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  top: 20,
                  // right: 40,
                }}
                onClick={() => dispatch(removeCar(car))}
              />
            </ContainerRowCar>
          ))}
        </table>
      )}
    </Container>
  );
};
