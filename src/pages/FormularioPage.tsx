import { useState } from "react";
import { marcas } from "../constants/marcasVehiculos";
import {
  Container,
  ContainerForm,
  ContainerTitle,
  CustomInput,
  CustomInputForm,
  CustomSpanForm,
  CustomSymbolForm,
  DescFrom,
  FirstRowForm,
  SecondRowForm,
  ImgPortada,
  TitleDescForm,
  TitleFrom,
  TxtFormulario,
  TxtPrueba,
  BtnSubmit,
  CustomSelectForm,
} from "../styledComponents/FormularioPageStyled/formularioPageStyled";
import { EventSelectType, useStateProp } from "../types/react";
import { modelos } from "../constants/modeloVehiculos";

export const FormularioPage = () => {
  const [marca, setMarca]: useStateProp<string | null> = useState(null)

  const handleMarcaVehiculo = (event: EventSelectType) => {
    const marca = event.target.value;
    // modelos[marca]
    console.log(modelos)
    console.log(marca)
    setMarca(marca)
  }
  
  return (
    <>
      <Container>
        <ContainerTitle>
          <TxtFormulario>Formulario</TxtFormulario>
          <TxtPrueba>de Prueba</TxtPrueba>
        </ContainerTitle>

        <ImgPortada src="./src/assets/imgs/Laptop.png" alt="imagen-portada" />
      </Container>

      <ContainerForm>
        <div style={{ marginBottom: "65px" }}>
          <TitleDescForm>Nuevo formulario</TitleDescForm>
          <DescFrom>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the bed industry's standard dummy
            text ever since.
          </DescFrom>
        </div>

        <TitleFrom>Datos del vendedor:</TitleFrom>

        <FirstRowForm>
          <CustomInput $widthInput={"65%"}>
            <CustomInputForm type="text" />
            <CustomSpanForm>
              Nombre completo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"35%"}>
            <CustomInputForm type="text" />
            <CustomSpanForm>
              Rut Vendedor<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>
        </FirstRowForm>

        <TitleFrom>Datos del vehículo:</TitleFrom>

        <SecondRowForm>
          <CustomInput $widthInput={"30%"}>
            <CustomInputForm type="text" />
            <CustomSpanForm>
              Patente del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <CustomSelectForm onChange={handleMarcaVehiculo} name="marcaVehiculo">
              <option></option>
              {marcas.map((marca) => (
                <option key={marca.id} value={marca.name}>
                  {marca.name}
                </option>
              ))}
            </CustomSelectForm>
            <CustomSpanForm>
              Marca del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <CustomSelectForm name="modeloVehiculo" />
            <CustomSpanForm>
              Modelo del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <CustomInputForm type="text" />
            <CustomSpanForm>
              Color del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <CustomInputForm type="text" />
            <CustomSpanForm>
              Precio del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>
        </SecondRowForm>

        <BtnSubmit>Enviar</BtnSubmit>
      </ContainerForm>
    </>
  );
};
