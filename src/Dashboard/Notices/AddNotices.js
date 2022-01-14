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

const AddNotices = () => {
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		setLoading(true);
		axios
			.post(`https://ancient-plains-93212.herokuapp.com/notices`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Notice Published Successfully",
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
				Add New Notices
			</Typography>
			<Grid container spacing={2}>
				<Grid item md={8} sx={{ mx: "auto" }}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Notice Title'
							variant='outlined'
							{...register("title", { required: true })}
						/>
						<Box sx={{ display: "flex" }}>
							<TextField
								sx={{ width: "100%", mb: 2, mr: 0.5 }}
								id='outlined-basic'
								label='Posted By'
								variant='outlined'
								{...register("postedBy", { required: true })}
							/>
							<FormControl sx={{ width: "100%" }}>
								<InputLabel id='demo-simple-select-label'>Role</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									label='Role'
									{...register("role", { required: true })}>
									<MenuItem value={"Chairman"}>Chairman</MenuItem>
									<MenuItem value={"Principal"}>Principal</MenuItem>
									<MenuItem value={"Register"}>Register</MenuItem>
									<MenuItem value={"Instractor"}>Instractor</MenuItem>
								</Select>
							</FormControl>

							<TextField
								sx={{ width: "100%", mb: 2, ml: 0.5 }}
								name='date'
								id='outlined-basic'
								value={new Date().toLocaleString()}
								variant='outlined'
								label='Date Time'
								{...register("time", { required: true })}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Box>
						<TextField
							sx={{ width: "100%", mb: 2 }}
							id='outlined-basic'
							label='Notice'
							variant='outlined'
							multiline
							rows={4}
							{...register("notice", { required: true })}
						/>

						<Button
							type='submit'
							variant='contained'
							sx={{ width: "100%", mb: 2 }}>
							Publish Notice
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

export default AddNotices;
