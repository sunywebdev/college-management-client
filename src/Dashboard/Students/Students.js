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

export default function Students() {
	const [students, setStudents] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://ancient-plains-93212.herokuapp.com/students`)
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);

	const columns = [
		{ field: "id", headerName: "Roll", width: 100 },
		{ field: "name", headerName: "Name", width: 200 },
		{ field: "dept", headerName: "Department", width: 130 },
		{ field: "semester", headerName: "Semester", width: 110 },
		{ field: "section", headerName: "Section", width: 100 },
		{ field: "session", headerName: "Session", width: 100 },
		{ field: "std_id", headerName: "College ID", width: 130 },
		{ field: "teacher", headerName: "Guide Teacher", width: 130 },
		{ field: "address", headerName: "Address", width: 100 },
		{ field: "course", headerName: "Course", width: 100 },
		{ field: "gender", headerName: "Gender", width: 100 },
		{ field: "dob", headerName: "Date Of Birth", width: 100 },
		{ field: "email", headerName: "Email", width: 200 },
		{ field: "phone", headerName: "Phone", width: 100 },
	];

	return (
		<div style={{ height: 450, width: "100%" }}>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				All Students
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
