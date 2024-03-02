import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { PatternFormat } from "react-number-format";

const ControlledPatternField = ({ name, control, ...numberfield }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { value = null, onChange } = field;

        return (
          <PatternFormat
            {...numberfield}
            customInput={TextField}
            value={value}
            onValueChange={(data) => {
              if (!data.value) return onChange(null);

              onChange(data.value);
            }}
          />
        );
      }}
    />
  );
};

export default ControlledPatternField;
