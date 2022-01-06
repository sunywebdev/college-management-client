import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Students = () => {
	const [students, setStudents] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/students`)
			.then((res) => res.json())
			.then((data) => setStudents(data));
	},[]);
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
							<TableCell align='left'>Roll No</TableCell>
							<TableCell align='left'>Reg No</TableCell>
							<TableCell align='left'>Semester</TableCell>
							<TableCell align='left'>Session</TableCell>
							<TableCell align='left'>Dept</TableCell>
							<TableCell align='left'>Section</TableCell>
							<TableCell align='left'>Mobile No</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{students?.length > 0 ? (
							<>
								{students?.map((student) => (
									<TableRow
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell component='th' scope='row'>
											{serial++}
										</TableCell>
										<TableCell align='left'>{student?.name}</TableCell>
										<TableCell align='left'>{student?.gender}</TableCell>
										<TableCell align='left'>{student?.roll}</TableCell>
										<TableCell align='left'>{student?.reg}</TableCell>
										<TableCell align='left'>{student?.semester}</TableCell>
										<TableCell align='left'>{student?.session}</TableCell>
										<TableCell align='left'>{student?.dept}</TableCell>
										<TableCell align='left'>{student?.section}</TableCell>
										<TableCell align='left'>{student?.cellNo}</TableCell>
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

export default Students;
