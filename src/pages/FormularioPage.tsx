import { useState } from "react";
import { marcas } from "../constants/marcasVehiculos";
import {
  Container,
  ContainerForm,
  ContainerTitle,
  CustomInput,
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
  CustomOptionSelect,
} from "../styledComponents/FormularioPageStyled/formularioPageStyled";
import { EventSelectType, useStateProp } from "../types/react";
import { modelos } from "../constants/modeloVehiculos";
import { InputController } from "../components/Inputs/InputController";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../store";
import { insertNewcar } from "../store/slices/car";
import { NAME_ES_REGEX } from "../constants/Regex";
import { v4 } from 'uuid'

type modelsProps = {
  id: number;
  name: string;
};

type regiterCar = {
  id: number;
  nombre: string;
  rut: number;
  patente: string;
  marca: string;
  modelo: string;
  color: string;
  precio: number;
};

export const FormularioPage = () => {
  const dispatch = useAppDispatch()
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: {
      nombre: "",
      rut: 0,
      patente: "",
      marca: "",
      modelo: "",
      color: "",
      precio: 0
    },
  });

  const [models, setModels]: useStateProp<modelsProps[] | null> =
    useState(null);
  const [marca, setMarca]: useStateProp<string> = useState("");
  const [modelSelected, setModelSelected]: useStateProp<string> =
    useState("");

  const disabledSelect = models === null ? true : false;
  const listCars = useAppSelector((state) =>  state.car)

  const handleMarcaVehiculo = (event: EventSelectType) => {
    const marca = event.target.value;
    setMarca(marca);
    setModels(modelos[marca]);
  };

  const handleModelCar = (event: EventSelectType) => {
    const model = event.target.value;
    setModelSelected(model);
  };

  const handlerRegister = () => {
    const newCar: regiterCar = {
      id: listCars.length + 1,
      nombre: getValues().nombre,
      rut: getValues().rut,
      patente: getValues().patente,
      marca: marca,
      modelo: modelSelected,
      color: getValues().color,
      precio: getValues().precio,
    };

    reset();
    setMarca("")
    setModels(null)
    setModelSelected("")
    dispatch(insertNewcar(newCar));
  };

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
            <InputController
              control={control}
              rules={{
                required: "Campo requerido",
              }}
              name="nombre"
              type="text"
            />
            <CustomSpanForm>
              Nombre completo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"35%"}>
            <InputController
              control={control}
              rules={{
                required: "Campo requerido",
              }}
              name="rut"
              type="text"
            />
            <CustomSpanForm>
              Rut Vendedor<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>
        </FirstRowForm>

        <TitleFrom>Datos del vehículo:</TitleFrom>

        <SecondRowForm>
          <CustomInput $widthInput={"30%"}>
            <InputController
              control={control}
              rules={{ required: "Campo requerido" }}
              name="patente"
              type="text"
            />
            <CustomSpanForm>
              Patente del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <CustomSelectForm
              onChange={handleMarcaVehiculo}
              name="marca"
              style={{ cursor: "pointer" }}
            >
              <CustomOptionSelect
                selected={true}
                disabled={true}
              ></CustomOptionSelect>
              {marcas.map((marca) => (
                <CustomOptionSelect key={marca.id} value={marca.name}>
                  {marca.name}
                </CustomOptionSelect>
              ))}
            </CustomSelectForm>
            <CustomSpanForm>
              Marca del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $disabled={disabledSelect} $widthInput={"30%"}>
            <CustomSelectForm
              onChange={handleModelCar}
              disabled={disabledSelect}
              name="modelo"
            >
              <CustomOptionSelect
                selected={true}
                disabled={true}
              ></CustomOptionSelect>
              {models != null &&
                models.map((model: modelsProps) => (
                  <CustomOptionSelect key={model.id} value={model.name}>
                    {model.name}
                  </CustomOptionSelect>
                ))}
            </CustomSelectForm>
            <CustomSpanForm $disabled={disabledSelect}>
              Modelo del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <InputController
              control={control}
              rules={{ required: "Campo requerido" }}
              name="color"
              type="text"
            />
            <CustomSpanForm>
              Color del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>

          <CustomInput $widthInput={"30%"}>
            <InputController
              control={control}
              rules={{ required: "Campo requerido" }}
              name="precio"
              type="text"
            />
            <CustomSpanForm>
              Precio del vehículo<CustomSymbolForm>*</CustomSymbolForm>
            </CustomSpanForm>
          </CustomInput>
        </SecondRowForm>

        <BtnSubmit onClick={handleSubmit(handlerRegister)}>Enviar</BtnSubmit>
      </ContainerForm>
    </>
  );
};
