import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const students = [
	{
		name: "Shoyeb Mohammed Suny",
		roll: 172015,
		department: "Computer",
		attendanceList: [
			{
				status: "Present",
				date: "09/01/2022",
				time: "12:36:57",
				count: 1,
			},
		],
	},
	{
		name: "Ahsan Mustafa",
		roll: 172020,
		department: "Computer",
		attendanceList: [
			{
				status: "Present",
				date: "09/01/2022",
				time: "12:05:57",
				count: 1,
			},
		],
	},
	{
		name: "Mohiuddin Sakib",
		roll: 172001,
		department: "Computer",
		attendanceList: [
			{
				status: "Present",
				date: "09/01/2022",
				time: "12:36:57",
				count: 1,
			},
		],
	},
	{
		name: "Md Safayet",
		roll: 172016,
		department: "Computer",
		attendanceList: [
			{
				status: "Present",
				date: "09/01/2022",
				time: "12:36:57",
				count: 1,
			},
		],
	},
];

function timeToSec(str) {
	var p = str.split(":"),
		s = 0,
		m = 1;

	while (p.length > 0) {
		s += m * parseInt(p.pop(), 10);
		m *= 60;
	}

	return s;
}
function formatSeconds(seconds) {
	var date = new Date(1970, 0, 1);
	date.setSeconds(seconds);
	return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}
console.log(students);

const collegeTime = "11:30:00";

export default function BasicTable() {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Roll</TableCell>
						<TableCell align='left'>Name</TableCell>
						<TableCell align='left'>Department</TableCell>
						<TableCell align='left'>Entry Time</TableCell>
						<TableCell align='left'>Late</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{students.map((student) => (
						<TableRow
							key={student.roll}
							sx={{
								"&:last-child td, &:last-child th": { border: 0 },
							}}>
							<TableCell component='th' scope='row'>
								{student.roll}
							</TableCell>
							<TableCell align='left'>{student.name}</TableCell>
							<TableCell align='left'>{student.department}</TableCell>
							<TableCell align='left'>
								{student.attendanceList[0].time}
							</TableCell>
							<TableCell align='left'>
								{formatSeconds(
									timeToSec(student.attendanceList[0].time) -
										timeToSec(collegeTime),
								)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
