import * as React from "react";
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarExport,
	gridClasses,
} from "@mui/x-data-grid";

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
		{ field: "id", headerName: "Roll", width: 100 },
		{ field: "name", headerName: "Name", width: 200 },
		{ field: "dept", headerName: "Department", width: 130 },
		{ field: "semester", headerName: "Semester", width: 110 },
		{ field: "section", headerName: "Section", width: 100 },
		{ field: "session", headerName: "Session", width: 100 },
		{ field: "teacher", headerName: "Guide Teacher", width: 130 },
		{ field: "address", headerName: "Address", width: 100 },
	];

	return (
		<div style={{ height: 500, width: "100%" }}>
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
