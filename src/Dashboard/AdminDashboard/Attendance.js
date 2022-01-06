import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

const Attendance = () => {
	return (
		<Container>
			<Grid item xs={12} md={12}>
				<Paper className='container' sx={{ overflow: "auto" }}>
					<Table size='small' aria-label='a dense table'>
						<TableHead>
							<TableRow>
								<TableCell align='right'>No</TableCell>
								<TableCell align='right'>Name</TableCell>
								<TableCell align='right'>Roll No</TableCell>
								<TableCell align='right'>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell align='right'>aa</TableCell>
								<TableCell align='right'>aa</TableCell>
								<TableCell align='right'>aa</TableCell>
								<TableCell align='right'>
									<Button variant='contained' sx={{ mx: 0.5 }}>
										<DoneIcon /> Present
									</Button>
									<Button variant='contained' sx={{ mx: 0.5 }}>
										<CloseIcon /> Absent
									</Button>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Paper>
			</Grid>
		</Container>
	);
};

export default Attendance;
