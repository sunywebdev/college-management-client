import React from "react";
import { useForm } from "react-hook-form";
import {
	Box,
	Button,
	Grid,
	TextField,
} from "@mui/material";
import axios from "axios";
import Swal from "sweetalert2";

const AddNotices = () => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		console.log(data);
		axios
			.post(`http://localhost:5000/notices`, data)
			.then(function (response) {
				Swal.fire({
					icon: "success",
					title: "New Notice Published Successfully",
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
							<TextField
								sx={{ width: "100%", mb: 2, mx: 0.5 }}
								id='outlined-basic'
								label='Role'
								variant='outlined'
								{...register("role", { required: true })}
							/>
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
		</div>
	);
};

export default AddNotices;
