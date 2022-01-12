import React from "react";
import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const AddStudents = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(`http://localhost:5000/students`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Student Added Successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
	};
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item md={8} sx={{ mx: "auto" }}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Name'
							variant='outlined'
							{...register("name", { required: true })}
						/>
						<Box sx={{ display: "flex" }}>
							<FormControl sx={{ width: "100%", mb: 2, mr: 0.5 }}>
								<InputLabel id='demo-simple-select-label'>Gender</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Gender'
									{...register("gender", { required: true })}>
									<MenuItem value={"Male"}>Male</MenuItem>
									<MenuItem value={"Female"}>Female</MenuItem>
									<MenuItem value={"Other"}>Other</MenuItem>
								</Select>
							</FormControl>
							<TextField
								sx={{ width: "100%", mb: 2, ml: 0.5 }}
								id='outlined-basic'
								label='Session'
								variant='outlined'
								{...register("session", { required: true })}
							/>
						</Box>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Roll No'
							variant='outlined'
							{...register("roll", { required: true })}
						/>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Reg No'
							variant='outlined'
							{...register("reg", { required: true })}
						/>
						<Box sx={{ display: "flex" }}>
							<FormControl sx={{ width: "100%", mb: 2, mr: 0.5 }}>
								<InputLabel id='demo-simple-select-label'>Semester</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Semester'
									{...register("semester", { required: true })}>
									<MenuItem value={"1st"}>1st</MenuItem>
									<MenuItem value={"2nd"}>2nd</MenuItem>
									<MenuItem value={"3rd"}>3rd</MenuItem>
								</Select>
							</FormControl>
							<FormControl sx={{ width: "100%", mb: 2, mx: 0.5 }}>
								<InputLabel id='demo-simple-select-label'>
									Department
								</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Department'
									{...register("department", { required: true })}>
									<MenuItem value={"Computer"}>Computer</MenuItem>
									<MenuItem value={"Civil"}>Civil</MenuItem>
									<MenuItem value={"Arc"}>Arc</MenuItem>
								</Select>
							</FormControl>
							<FormControl sx={{ width: "100%", mb: 2, ml: 0.5 }}>
								<InputLabel id='demo-simple-select-label'>Section</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Section'
									{...register("section", { required: true })}>
									<MenuItem value={"A"}>A</MenuItem>
									<MenuItem value={"B"}>B</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Mobile No'
							variant='outlined'
							{...register("cellNo", { required: true })}
						/>
						<Button
							type='submit'
							variant='contained'
							sx={{ width: "100%", mb: 2 }}>
							Add Student
						</Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

export default AddStudents;
