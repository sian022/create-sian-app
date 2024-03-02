import { Controller } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

const ControlledTextField = (props) => {
  const { name, control, onChange: onValueChange, ...textfield } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { ref, value, onChange: setValue } = field;

        return (
          <MuiTextField
            {...textfield}
            inputRef={ref}
            value={value}
            onChange={(e) => {
              if (onValueChange) return setValue(onValueChange(e));

              setValue(e);
            }}
          />
        );
      }}
    />
  );
};

export default ControlledTextField;
