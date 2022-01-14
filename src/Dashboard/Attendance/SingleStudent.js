import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const SingleStudent = ({ roll }) => {
	console.log(roll);
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

	const collegeTime = "11:30:00";
	const [student, setStudent] = React.useState([]);
	React.useEffect(() => {
		fetch(
			`https://ancient-plains-93212.herokuapp.com/findstudents?roll=${roll}`,
		)
			.then((res) => res.json())
			.then((data) => setStudent(data));
	}, [roll]);

	return (
		<div>
			<ul style={{ textAlign: "left" }}>
				<li>
					<b>Name : </b>
					{student.name}
				</li>
				<li>
					<b>Roll : </b>
					{student.id}
				</li>
				<li>
					<b>Department : </b>
					{student.dept}
				</li>
				<li>
					<b>Attendance List : </b>
					<TableContainer component={Paper} elevation={5} sx={{ mt: 1.5 }}>
						<Table aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell align='center' sx={{ fontWeight: "bold" }}>
										Status
									</TableCell>
									<TableCell align='center' sx={{ fontWeight: "bold" }}>
										Date
									</TableCell>
									<TableCell align='center' sx={{ fontWeight: "bold" }}>
										Entry Time{" "}
									</TableCell>
									<TableCell align='center' sx={{ fontWeight: "bold" }}>
										Late
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{student?.attendanceList?.map((attend, key) => (
									<TableRow
										key={key}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell align='center'>{attend?.status}</TableCell>
										<TableCell align='center'>{attend?.date}</TableCell>
										<TableCell align='center'>{attend?.time}</TableCell>
										<TableCell align='center'>
											{timeToSec(collegeTime) >= timeToSec(attend.time)
												? "Ontime"
												: formatSeconds(
														timeToSec(attend.time) - timeToSec(collegeTime),
												  )}
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</li>
			</ul>
		</div>
	);
};

export default SingleStudent;
