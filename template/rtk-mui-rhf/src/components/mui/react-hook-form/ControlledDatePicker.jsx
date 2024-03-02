import moment from "moment";

import { Controller } from "react-hook-form";
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker";

const ControlledDatePicker = ({ name, control, ...datepicker }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const { value = null, onChange } = field;

        return (
          <MuiDatePicker
            {...datepicker}
            value={value}
            onChange={(value) => {
              if (!moment(value).isValid()) return;

              onChange(moment(value).format());
            }}
          />
        );
      }}
    />
  );
};

export default ControlledDatePicker;
