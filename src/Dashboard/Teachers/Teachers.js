import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Teachers = () => {
	const [teachers, setTeachers] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/teachers`)
			.then((res) => res.json())
			.then((data) => setTeachers(data));
	}, []);
	let serial = 1;
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>No</TableCell>
							<TableCell align='left'>Name</TableCell>
							<TableCell align='left'>Gender</TableCell>
							<TableCell align='left'>Dept</TableCell>
							<TableCell align='left'>Mobile No</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{teachers?.length > 0 ? (
							<>
								{teachers?.map((teacher) => (
									<TableRow
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell component='th' scope='row'>
											{serial++}
										</TableCell>
										<TableCell align='left'>{teacher?.name}</TableCell>
										<TableCell align='left'>{teacher?.gender}</TableCell>
										<TableCell align='left'>{teacher?.department}</TableCell>
										<TableCell align='left'>{teacher?.mobile}</TableCell>
									</TableRow>
								))}
							</>
						) : (
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Teachers;
