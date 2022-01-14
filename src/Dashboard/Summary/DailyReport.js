import React, { useEffect } from "react";
import { useState } from "react";
import report from "./report";
import { PieChart, Pie, Tooltip } from "recharts";
import "./DailyReport.css";
import "bootstrap/dist/css/bootstrap.min.css";
const data01 = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
	{ name: "Group E", value: 278 },
	{ name: "Group F", value: 189 },
];

const data02 = [
	{ name: "Group A", value: 2400 },
	{ name: "Group B", value: 4567 },
	{ name: "Group C", value: 1398 },
	{ name: "Group D", value: 9800 },
	{ name: "Group E", value: 3908 },
	{ name: "Group F", value: 4800 },
];

const DailyReport = () => {
	const [computer_A_18_19, setComputer_A_18_19] = useState([]);

	const [computer_B_18_19, setComputer_B_18_19] = useState([]);

	const [computer_A_19_20, setComputer_A_19_20] = useState([]);
	const [computer_B_19_20, setComputer_B_19_20] = useState([]);

	const [computer_A_20_21, setComputer_A_20_21] = useState([]);
	const [computer_B_20_21, setComputer_B_20_21] = useState([]);

	const [computer_A_21_22, setComputer_A_21_22] = useState([]);
	const [computer_B_21_22, setComputer_B_21_22] = useState([]);

	// const [civil_A_18_19, setCivil_A_18_19] = useState([])
	// const [civil_B_18_19, setCivil_B_18_19] = useState([])

	// const [civil_A_19_20, setCivil_A_19_20] = useState([])
	// const [civil_B_19_20, setCivil_B_19_20] = useState([])

	// const [civil_A_20_21, setCivil_A_20_21] = useState([])
	// const [civil_B_20_21, setCivil_B_20_21] = useState([])

	// const [mechanical_A_18_19, setMechanical_A_18_19] = useState([])
	// const [mechanical_B_18_19, setMechanical_B_18_19] = useState([])

	// const [mechanical_A_19_20, setMechanical_A_19_20] = useState([])
	// const [mechanical_B_19_20, setMechanical_B_19_20] = useState([])

	// const [mechanical_A_20_21, setMechanical_20_21] = useState([])
	// const [mechanical_B_20_21, setMechanical_B_20_21] = useState([])

	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();

	today = dd + "/" + mm + "/" + yyyy;

	console.log(today);
	// const totalMemberInCmt = (report.filter(element => element.dept === "Computer")).length
	// const totalMemberInCmt_A_18_19 = (report.filter(element => element.dept === "Computer" && element.section === "A")).length
	// const today_present_in_cmt_A_18_19 = report.filter(element => {
	//     let td = element.attendanceList.filter(item => item.status === "Present" && item.date == today)
	//     return td
	// })
	// console.log(today_present_in_cmt_A_18_19)
	// const totalMemberInCmt_B_18_19 = (report.filter(element => element.dept === "Computer" && element.section === "B")).length

	// console.log(totalMemberInCmt_B_18_19)

	const [current, setCurrent] = useState("Computer");

	let cmt_18_19_sec_A_list = [];
	let cmt_18_19_sec_B_list = [];
	let cmt_19_20_sec_A_list = [];
	let cmt_19_20_sec_B_list = [];
	let cmt_20_21_sec_A_list = [];
	let cmt_20_21_sec_B_list = [];
	let cmt_21_22_sec_A_list = [];
	let cmt_21_22_sec_B_list = [];
	useEffect(() => {
		const cmt_18_19_sec_A = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "A" &&
				elem.session === "18-19",
		);

		const cmt_18_19_sec_B = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "B" &&
				elem.session === "18-19",
		);

		const cmt_19_20_sec_A = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "A" &&
				elem.session === "19-20",
		);

		const cmt_19_20_sec_B = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "B" &&
				elem.session === "19-20",
		);

		const cmt_20_21_sec_A = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "A" &&
				elem.session === "20-21",
		);

		const cmt_20_21_sec_B = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "B" &&
				elem.session === "20-21",
		);

		const cmt_21_22_sec_A = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "A" &&
				elem.session === "21-22",
		);

		const cmt_21_22_sec_B = report.filter(
			(elem) =>
				elem.dept === current &&
				elem.section === "B" &&
				elem.session === "21-22",
		);

		if (cmt_18_19_sec_A.length > 0) {
			cmt_18_19_sec_A.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_18_19_sec_A_list.push(item);
				}),
			);
			setComputer_A_18_19(cmt_18_19_sec_A_list);
		}

		if (cmt_18_19_sec_B.length > 0) {
			cmt_18_19_sec_B.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_18_19_sec_B_list.push(item);
				}),
			);
			setComputer_B_18_19(cmt_18_19_sec_B_list);
		}
		if (cmt_19_20_sec_A.length > 0) {
			cmt_19_20_sec_A.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_19_20_sec_A_list.push(item);
				}),
			);
			setComputer_A_19_20(cmt_19_20_sec_A_list);
		}

		if (cmt_19_20_sec_B.length > 0) {
			cmt_19_20_sec_B.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_19_20_sec_B_list.push(item);
				}),
			);
			setComputer_B_19_20(cmt_19_20_sec_B_list);
		}
		if (cmt_20_21_sec_A.length > 0) {
			cmt_20_21_sec_A.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_20_21_sec_A_list.push(item);
				}),
			);
			setComputer_A_20_21(cmt_20_21_sec_A_list);
		}

		if (cmt_20_21_sec_B.length > 0) {
			cmt_20_21_sec_B.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_20_21_sec_B_list.push(item);
				}),
			);
			setComputer_B_20_21(cmt_20_21_sec_B_list);
		}
		if (cmt_21_22_sec_A.length > 0) {
			cmt_21_22_sec_A.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_21_22_sec_A_list.push(item);
				}),
			);
			setComputer_A_21_22(cmt_21_22_sec_A_list);
		}

		if (cmt_21_22_sec_B.length > 0) {
			cmt_21_22_sec_B.filter((elem) =>
				elem.attendanceList.filter((item) => {
					return cmt_21_22_sec_B_list.push(item);
				}),
			);
			setComputer_B_21_22(cmt_21_22_sec_B_list);
		}

		// eslint-disable-next-line
	}, []);

	return (
		<div className='container mt-4'>
			<div className='row'>
				<select
					className='form-select'
					aria-label='Default select example'
					onChange={(e) => setCurrent(e.target.value)}>
					<option value='Computer'>Computer</option>
					<option value='Civil'>Civil</option>
					<option value='Mechanical'>Mechanical</option>
				</select>
				<div className='card col-md-6'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 18-19
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-A
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "A" &&
												item.session === "18-19",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_A_18_19.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "A" &&
											item.session === "18-19",
									).length -
										computer_A_18_19.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={[
											{
												name: "Total Student ",
												value: report.filter(
													(item) =>
														item.dept === current &&
														item.section === "A" &&
														item.session === "18-19",
												).length,
											},
											{
												name: "Today Present ",
												value: computer_A_18_19.filter(
													(item) => item.status === "Present",
												).length,
											},
											{
												name: "Today Absent ",
												value:
													report.filter(
														(item) =>
															item.dept === current &&
															item.section === "A" &&
															item.session === "18-19",
													).length -
													computer_A_18_19.filter(
														(item) => item.status === "Present",
													).length,
											},
										]}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 18-19
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-B
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "B" &&
												item.session === "18-19",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_B_18_19.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "B" &&
											item.session === "18-19",
									).length -
										computer_B_18_19.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={[
											{
												name: "Total Student ",
												value: report.filter(
													(item) =>
														item.dept === current &&
														item.section === "B" &&
														item.session === "18-19",
												).length,
											},
											{
												name: "Today Present ",
												value: computer_B_18_19.filter(
													(item) => item.status === "Present",
												).length,
											},
											{
												name: "Today Absent ",
												value:
													report.filter(
														(item) =>
															item.dept === current &&
															item.section === "B" &&
															item.session === "18-19",
													).length -
													computer_B_18_19.filter(
														(item) => item.status === "Present",
													).length,
											},
										]}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 19-20
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-A
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "A" &&
												item.session === "19-20",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_A_19_20.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "A" &&
											item.session === "19-20",
									).length -
										computer_A_19_20.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 19-20
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-A
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "B" &&
												item.session === "19-20",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_B_19_20.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "B" &&
											item.session === "19-20",
									).length -
										computer_B_19_20.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>
					<hr />
				</div>

				<div className='card col-md-6'>
					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 20-21
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-A
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "A" &&
												item.session === "20-21",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_A_20_21.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "A" &&
											item.session === "20-21",
									).length -
										computer_A_20_21.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 20-21
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-B
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "B" &&
												item.session === "20-21",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_B_20_21.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "B" &&
											item.session === "20-21",
									).length -
										computer_B_20_21.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>
					<hr />
					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 21-22
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-A
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "A" &&
												item.session === "21-22",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_A_21_22.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "A" &&
											item.session === "21-22",
									).length -
										computer_B_21_22.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>

					<div className='row'>
						<div className='col-md-6'>
							<div className='card-body'>
								<h5 className='card-title'>Department: {current}</h5>
								<h6 className='card-subtitle mb-2 text-muted'>
									Session: 21-22
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Section: {`${current}`}-B
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Total Student:
									{
										report.filter(
											(item) =>
												item.dept === current &&
												item.section === "B" &&
												item.session === "21-22",
										).length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Present:{" "}
									{
										computer_A_21_22.filter((item) => item.status === "Present")
											.length
									}
								</h6>
								<h6 className='card-subtitle mb-2 text-muted'>
									Today Absent:{" "}
									{report.filter(
										(item) =>
											item.dept === current &&
											item.section === "B" &&
											item.session === "21-22",
									).length -
										computer_B_21_22.filter((item) => item.status === "Present")
											.length}
								</h6>
							</div>
						</div>
						<div className='col-md-6'>
							<div className='card-body'>
								<PieChart width={100} height={200}>
									<Pie
										dataKey='value'
										isAnimationActive={false}
										data={data01}
										cx='50%'
										cy='50%'
										outerRadius={80}
										fill='#1976D2'
										label
									/>
									<Pie
										dataKey='value'
										data={data02}
										cx={500}
										cy={200}
										innerRadius={40}
										outerRadius={80}
										fill='#1976D2'
									/>
									<Tooltip />
								</PieChart>
							</div>
						</div>
					</div>
					<hr />
				</div>
			</div>
		</div>
	);
};

export default DailyReport;
