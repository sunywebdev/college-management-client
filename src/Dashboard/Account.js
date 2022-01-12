import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const Account = () => {
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell align='right'>No</TableCell>
							<TableCell align='right'>Name</TableCell>
							<TableCell align='right'>Roll No</TableCell>
							<TableCell align='right'>Due</TableCell>
							<TableCell align='right'>Details</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
							<TableCell component='th' scope='row'>
								aa
							</TableCell>
							<TableCell align='right'>aa</TableCell>
							<TableCell align='right'>aa</TableCell>
							<TableCell align='right'>aa</TableCell>
							<TableCell align='right'>
								<Button variant='contained'>
									<InfoIcon />
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Account;
