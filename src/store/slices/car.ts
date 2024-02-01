import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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

const initialState: listCarsProps[] = [];

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    insertNewcar: (state, action: PayloadAction<object>) => {
      state.push(action.payload);
    },
    removeCar: (state, action: PayloadAction<object>) => {
      const removeCar = action.payload;
      console.log(removeCar)
      console.log(state.filter(
        (carStored) => carStored.id !== removeCar.id
      ));
      
      state = state.filter(
        (carStored) => carStored.id !== removeCar.id
      );
    },
  },
});

export const { insertNewcar, removeCar } = carSlice.actions;
export default carSlice.reducer;
