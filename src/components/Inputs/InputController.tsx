import { Controller } from "react-hook-form";
import { CustomInputForm } from "../../styledComponents/FormularioPageStyled/formularioPageStyled";
import { control } from "../../types/react.hook.form";
import { FC } from "react";

type inputControllerProps = {
  control: control;
  name: string;
  rules: Record<string, unknown>;
  type: string;
};

export const InputController: FC<inputControllerProps> = ({
  control,
  name,
  rules,
  type,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        // fieldState: { error }
      }) => (
        <>
          <CustomInputForm
            type={type} 
            value={value}
            onChange={onChange}
            onBlur={onBlur}  
          />
        </>
      )}
    />
  );
};
