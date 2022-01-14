import { Grid } from "@mui/material";
import React from "react";
import Chart from "./Chart";
import HomeBanner from "./HomeBanner";
import HomeNotice from "./HomeNotice";
import StaticDatePickerLandscape from "./StaticDatePickerLandscape";

const AdminDashboardHome = () => {
	return (
		<div>
			<HomeBanner />
			<Grid container spacing={2} alignItems='center' sx={{ mt: 1.5 }}>
				<Grid item md={12} xs={12} sx={{ mt: 2, mb: 4 }}>
					<Chart />
				</Grid>
				<Grid item md={6} xs={12}>
					<StaticDatePickerLandscape />
				</Grid>
				<Grid item md={6} xs={12}>
					<HomeNotice />
				</Grid>
			</Grid>
		</div>
	);
};

export default AdminDashboardHome;
