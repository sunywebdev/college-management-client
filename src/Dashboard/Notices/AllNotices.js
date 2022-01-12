import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AllNotices = () => {
	const [notices, setNotices] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/notices`)
			.then((res) => res.json())
			.then((data) => setNotices(data));
	}, []);
	let serial = 1;
	return (
		<div>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
					<TableHead>
						<TableRow>
							<TableCell align='left'>No</TableCell>
							<TableCell align='left'>Title</TableCell>
							<TableCell align='left'>Posted by</TableCell>
							<TableCell align='left'>Role</TableCell>
							<TableCell align='left'>Time</TableCell>
							<TableCell align='left'>Notice</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{notices?.length > 0 ? (
							<>
								{notices?.map((notice) => (
									<TableRow
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell component='th' scope='row'>
											{serial++}
										</TableCell>
										<TableCell align='left'>{notice?.title}</TableCell>
										<TableCell align='left'>{notice?.postedBy}</TableCell>
										<TableCell align='left'>{notice?.role}</TableCell>
										<TableCell align='left'>{notice?.time}</TableCell>
										<TableCell align='left'>{notice?.notice}</TableCell>
									</TableRow>
								))}
							</>
						) : (
							<TableRow
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
								<TableCell align='left'>N/A</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default AllNotices;
