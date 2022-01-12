import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Box } from "@mui/system";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const AdminDashboardHome = () => {
	return (
		<div>
			<Grid container spacing={2}>
				<Grid item md={4} xs={12}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								sx={{ p: 3, bgcolor: "#1976D2", color: "white" }}
								display='flex'
								alignItems='center'>
								<SchoolIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "#1976D2" }}>
								<Typography variant='h4' component='div'>
									Students
								</Typography>
								<Typography variant='h5' component='div'>
									500
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4} xs={12}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								sx={{ p: 3, bgcolor: "#1976D2", color: "white" }}
								display='flex'
								alignItems='center'>
								<CoPresentIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "#1976D2" }}>
								<Typography variant='h4' component='div'>
									Teachers
								</Typography>
								<Typography variant='h5' component='div'>
									500
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
				<Grid item md={4} xs={12}>
					<Paper elevation={3}>
						<Box display='flex' justifyContent='space-between'>
							<Box
								sx={{ p: 3, bgcolor: "#1976D2", color: "white" }}
								display='flex'
								alignItems='center'>
								<LocalAtmIcon sx={{ fontSize: 50 }} />
							</Box>
							<Box sx={{ textAlign: "right", m: 3, color: "#1976D2" }}>
								<Typography variant='h4' component='div'>
									Income
								</Typography>
								<Typography variant='h5' component='div'>
									500$
								</Typography>
							</Box>
						</Box>
					</Paper>
				</Grid>
			</Grid>

			<Box>
				<Paper elevation={3} sx={{ my: 3 }}>
					<Typography
						variant='h4'
						component='div'
						sx={{ py: 1.5, color: "#1976D2" }}>
						Latest Notices
					</Typography>
					<Grid
						container
						spacing={2}
						sx={{ maxHeight: "50vh", overflowY: "scroll", py: 2 }}>
						{Array.from({ length: 4 }).map((_, idx) => (
							<Grid item md={12} xs={12}>
								<Card
									sx={{ textAlign: "left", mx: 2, color: "#1976D2" }}
									elevation={3}>
									<CardHeader
										avatar={<Avatar sx={{ bgcolor: "red" }}>A</Avatar>}
										title='Md Ahsan Habib'
										subheader='Janurary 14, 2022'
									/>
									<CardContent>
										<Typography variant='body2' color='text.secondary'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Dolore, hic libero odio nemo modi saepe maiores
											perspiciatis enim illo iste temporibus aliquid laudantium
											voluptas accusamus, totam, placeat est quia sed dicta
											nulla mollitia assumenda voluptatem tempora! Eaque
											exercitationem accusantium est officiis, aliquam,
											excepturi suscipit at minus aliquid dolores dolore dicta?
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Box>
		</div>
	);
};

export default AdminDashboardHome;
