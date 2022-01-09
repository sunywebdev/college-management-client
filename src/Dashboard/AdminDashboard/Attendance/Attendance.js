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
		entryTime: "2022-1-2 13:31:58",
	},
	{
		name: "Ahsan Mustafa",
		roll: 172020,
		department: "Computer",
		entryTime: "2022-1-2 11:31:00",
	},
	{
		name: "Mohiuddin Sakib",
		roll: 172001,
		department: "Computer",
		entryTime: "2022-1-2 12:30:40",
	},
	{
		name: "Md Safayet",
		roll: 172016,
		department: "Computer",
		entryTime: "2022-1-2 11:30:00",
	},
];
const msToTime = (milliseconds) => {
	var hours = milliseconds / (1000 * 60 * 60);
	var absoluteHours = Math.floor(hours);
	var h = absoluteHours > 9 ? absoluteHours : "0" + absoluteHours;
	var minutes = (hours - absoluteHours) * 60;
	var absoluteMinutes = Math.floor(minutes);
	var m = absoluteMinutes > 9 ? absoluteMinutes : "0" + absoluteMinutes;
	var seconds = (minutes - absoluteMinutes) * 60;
	var absoluteSeconds = Math.floor(seconds);
	var s = absoluteSeconds > 9 ? absoluteSeconds : "0" + absoluteSeconds;
	return h + " Hour, " + m + " Minutes, " + s + " Second";
};

console.log(students);

const collegeTime = new Date("2022-1-2 11:30:00");

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
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row'>
								{student.roll}
							</TableCell>
							<TableCell align='left'>{student.name}</TableCell>
							<TableCell align='left'>{student.department}</TableCell>
							<TableCell align='left'>{student.entryTime}</TableCell>
							<TableCell align='left'>
								{msToTime(new Date(student?.entryTime) - collegeTime)}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
