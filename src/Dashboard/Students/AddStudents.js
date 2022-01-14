import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
	Backdrop,
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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

const AddStudents = () => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`https://ancient-plains-93212.herokuapp.com/students`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Student Added Successfully",
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
	const [value, setValue] = React.useState(new Date());
	return (
		<div>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				Add New Students
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={10} sx={{ mx: "auto" }}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Grid container spacing={2}>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Name'
									variant='outlined'
									{...register("name", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<FormControl sx={{ width: "100%" }}>
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
							</Grid>
							<Grid item md={6} xs={12}>
								<FormControl sx={{ width: "100%" }}>
									<InputLabel id='demo-simple-select-label'>Section</InputLabel>
									<Select
										labelId='demo-simple-select-label'
										id='demo-simple-select'
										label='Course'
										{...register("course", { required: true })}>
										<MenuItem value={"Diploma"}>Diploma</MenuItem>
										<MenuItem value={"Step"}>Step</MenuItem>
									</Select>
								</FormControl>
							</Grid>
							<Grid item md={6} xs={12}>
								{" "}
								<TextField
									sx={{
										width: "100%",
									}}
									id='outlined-basic'
									label='Session'
									variant='outlined'
									{...register("session", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Roll No'
									variant='outlined'
									{...register("id", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								{" "}
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Reg No'
									variant='outlined'
									{...register("reg", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<FormControl sx={{ width: "100%" }}>
									<InputLabel id='demo-simple-select-label'>
										Semester
									</InputLabel>
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
							</Grid>
							<Grid item md={6} xs={12}>
								<FormControl sx={{ width: "100%" }}>
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
							</Grid>
							<Grid item md={6} xs={12}>
								<FormControl sx={{ width: "100%" }}>
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
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Guide Teacher'
									variant='outlined'
									{...register("teacher", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Mobile No'
									variant='outlined'
									{...register("cellNo", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Email'
									variant='outlined'
									{...register("email", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<TextField
									sx={{ width: "100%" }}
									id='outlined-basic'
									label='Address'
									variant='outlined'
									{...register("address", { required: true })}
								/>
							</Grid>
							<Grid item md={6} xs={12}>
								<LocalizationProvider dateAdapter={AdapterDateFns}>
									<MobileDatePicker
										label='Date Of Birth'
										value={value}
										onChange={(newValue) => {
											setValue(newValue);
										}}
										renderInput={(params) => (
											<TextField
												fullWidth
												{...register("dob", { required: true })}
												{...params}
											/>
										)}
									/>
								</LocalizationProvider>
							</Grid>
							<Grid item md={12} xs={12}>
								<Button
									type='submit'
									variant='contained'
									sx={{ width: "100%" }}>
									Add Student
								</Button>
							</Grid>
						</Grid>
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

export default AddStudents;
