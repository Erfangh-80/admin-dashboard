import { Controller, FieldError, UseControllerProps } from "react-hook-form";
import { TextError } from "../atoms";

interface IProps<T> extends UseControllerProps<T> {
  error: FieldError | undefined;
}

export const ControlTextInput = <T extends FieldError>({
  name,
  error,
  control,
}: IProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <>
          <input onChange={(text) => onChange(text)} />
          {error && <TextError textError={error?.message} />}
        </>
      )}
    />
  );
};
