import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "./date.scss";

const Datepickers = ({ label }) => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  return (
    <div className="date">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={label}
          size="small"
          value={selectedDate}
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
              width: "100%",
            },
          }}
          fullWidth
          // onChange={setSelectedDate((e) => e.target.value)}
          // renderInput={(props) => <TextField {...props} size="small" />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Datepickers;
