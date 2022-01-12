import React from "react";
import { useParams } from "react-router-dom";

const SingleStudent = () => {
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
					time: "11:30:00",
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

	const collegeTime = "11:30:00";

	const roll = useParams();
	var student = students.find(
		(student) => student.roll === parseInt(roll?.roll),
	);

	return (
		<div>
			<ul style={{ textAlign: "left" }}>
				<li>
					<b>Name :</b>
					{student.name}
				</li>
				<li>
					<b>Roll :</b>
					{student.roll}
				</li>
				<li>
					<b>Department :</b>
					{student.department}
				</li>
				<li>
					<b>Attendance List :</b>
					{student.attendanceList.map((attend, key) => (
						<ul key={key} style={{ margin: "7px 0" }}>
							<li>
								<b>Status : </b>
								{attend?.status}
							</li>
							<li>
								<b>Date : </b>
								{attend?.date}
							</li>
							<li>
								<b>Entry Time : </b>
								{attend?.time}
							</li>
							<li>
								<b>Late : </b>
								{attend.time === "11:30:00"
									? "Ontime"
									: formatSeconds(
											timeToSec(attend.time) - timeToSec(collegeTime),
									  )}
							</li>
						</ul>
					))}
				</li>
			</ul>
		</div>
	);
};

export default SingleStudent;
