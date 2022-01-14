import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import InfoIcon from "@mui/icons-material/Info";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import SingleStudent from "./SingleStudent";

/* const students = [
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
			{
				status: "Present",
				date: "10/01/2022",
				time: "12:26:57",
				count: 1,
			},
			{
				status: "Present",
				date: "11/01/2022",
				time: "12:31:57",
				count: 1,
			},
			{
				status: "Present",
				date: "12/01/2022",
				time: "12:30:57",
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
			{
				status: "Present",
				date: "10/01/2022",
				time: "12:10:57",
				count: 1,
			},
			{
				status: "Present",
				date: "11/01/2022",
				time: "12:15:57",
				count: 1,
			},
			{
				status: "Present",
				date: "12/01/2022",
				time: "12:25:57",
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
			{
				status: "Present",
				date: "10/01/2022",
				time: "12:26:57",
				count: 1,
			},
			{
				status: "Present",
				date: "11/01/2022",
				time: "12:56:57",
				count: 1,
			},
			{
				status: "Present",
				date: "12/01/2022",
				time: "12:30:57",
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
			{
				status: "Present",
				date: "10/01/2022",
				time: "12:10:57",
				count: 1,
			},
			{
				status: "Present",
				date: "11/01/2022",
				time: "12:55:57",
				count: 1,
			},
			{
				status: "Present",
				date: "12/01/2022",
				time: "12:50:57",
				count: 1,
			},
		],
	},
	{
		_id: "61e1428585f17a5f0da9567f",
		dept: "Computer",
		course: "Diploma",
		session: "18-19",
		semester: "6th",
		std_id: "CMTB-094",
		name: "Shoyeb Mohammed Suny",
		section: "B",
		id: "172015",
		gender: "Male",
		dob: "13/07/1998",
		email: "suny.webdev@gmail.com",
		phone: "01861917938",
		address: "Chattogram",
		teacher: "Iram",
		photosample: "Yes",
		attendanceList: [
			{
				status: "Present",
				date: "09/01/2022",
				time: "12:36:57",
				count: 1,
			},
			{
				status: "Present",
				date: "10/01/2022",
				time: "12:26:57",
				count: 1,
			},
			{
				status: "Present",
				date: "11/01/2022",
				time: "12:31:57",
				count: 1,
			},
			{
				status: "Present",
				date: "12/01/2022",
				time: "12:30:57",
				count: 1,
			},
		],
		unique_id: 1,
	},
]; */

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

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 500,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function BasicTable() {
	const [students, setStudents] = React.useState([]);
	React.useEffect(() => {
		fetch(`https://ancient-plains-93212.herokuapp.com/students`)
			.then((res) => res.json())
			.then((data) => setStudents(data));
	}, []);

	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const [roll, setRoll] = React.useState();
	return (
		<>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				Attendance
			</Typography>
			<TableContainer component={Paper} elevation={3}>
				<Table sx={{ minWidth: 650 }} aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Roll</TableCell>
							<TableCell align='left'>Name</TableCell>
							<TableCell align='left'>Department</TableCell>
							<TableCell align='left'>Entry Time</TableCell>
							<TableCell align='left'>Late ?</TableCell>
							<TableCell align='left'>Leave Time</TableCell>
							<TableCell align='left'>Action</TableCell>
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
									{student.id}
								</TableCell>
								<TableCell align='left'>{student.name}</TableCell>
								<TableCell align='left'>{student.dept}</TableCell>
								<TableCell align='left'>
									{
										student.attendanceList[student.attendanceList.length - 1]
											.time
									}
								</TableCell>
								<TableCell align='left'>
									{timeToSec(collegeTime) >=
									timeToSec(
										student.attendanceList[student.attendanceList.length - 1]
											.time,
									)
										? "Ontime"
										: formatSeconds(
												timeToSec(
													student.attendanceList[
														student.attendanceList.length - 1
													].time,
												) - timeToSec(collegeTime),
										  )}
								</TableCell>
								<TableCell align='left'>{student.dept}</TableCell>
								<TableCell align='left'>
									<Button variant='contained' onClick={handleOpen}>
										<InfoIcon
											sx={{ mr: 1 }}
											onClick={() => setRoll(student.id)}
										/>
										Details
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<Box sx={style}>
						<SingleStudent roll={roll} />
					</Box>
				</Fade>
			</Modal>
		</>
	);
}
