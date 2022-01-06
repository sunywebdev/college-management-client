import React, { useState } from "react";
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

const AddTeachers = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(`http://localhost:5000/teachers`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Teacher Added Successfully",
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
						</Box>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Mobile No'
							variant='outlined'
							{...register("mobile", { required: true })}
						/>
						<Button
							type='submit'
							variant='contained'
							sx={{ width: "100%", mb: 2 }}>
							Add Teacher
						</Button>
					</form>
				</Grid>
			</Grid>
		</div>
	);
};

export default AddTeachers;
