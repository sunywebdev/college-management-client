import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { Box } from "@mui/system";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const HomeBanner = () => {
	return (
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
	);
};

export default HomeBanner;
