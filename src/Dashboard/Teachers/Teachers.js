import * as React from "react";
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarExport,
	gridClasses,
} from "@mui/x-data-grid";
import { Typography } from "@mui/material";

function CustomToolbar() {
	return (
		<GridToolbarContainer className={gridClasses.toolbarContainer}>
			<GridToolbarExport />
		</GridToolbarContainer>
	);
}

export default function Teachers() {
	const [students, setStudents] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://ancient-plains-93212.herokuapp.com/teachers`)
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);

	const columns = [
		{ field: "id", headerName: "ID", width: 100 },
		{ field: "name", headerName: "Name", width: 220 },
		{ field: "department", headerName: "Department", width: 150 },
		{ field: "gender", headerName: "Gender", width: 150 },
		{ field: "mobile", headerName: "Mobile", width: 200 },
	];

	return (
		<div style={{ height: 450, width: "100%" }}>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				All Teachers
			</Typography>
			<DataGrid
				rows={students}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				components={{
					Toolbar: CustomToolbar,
				}}
			/>
		</div>
	);
}
