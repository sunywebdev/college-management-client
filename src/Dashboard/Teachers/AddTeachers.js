import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	Backdrop,
	Box,
	Button,
	CircularProgress,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const AddTeachers = () => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`https://ancient-plains-93212.herokuapp.com/teachers`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Teacher Added Successfully",
					showConfirmButton: false,
					timer: 1500,
				});
				setLoading(false);
				reset();
			})
			.catch(function (error) {
				console.log("error", error);
				console.log(error);
			});
	};

	return (
		<div>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				Add New Teacher
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={8} sx={{ mx: "auto" }}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Teacher ID'
							variant='outlined'
							{...register("id", { required: true })}
						/>
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
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={loading}>
				<CircularProgress color='inherit' />
			</Backdrop>
		</div>
	);
};

export default AddTeachers;
