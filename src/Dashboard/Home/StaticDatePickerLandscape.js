import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Paper } from "@mui/material";

export default function StaticDatePickerLandscape() {
	const [value, setValue] = React.useState(new Date());

	return (
		<Paper elevation={3}>
			<LocalizationProvider dateAdapter={AdapterDateFns}>
				<StaticDatePicker
					orientation='landscape'
					openTo='day'
					value={value}
					shouldDisableDate={isWeekend}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Paper>
	);
}
