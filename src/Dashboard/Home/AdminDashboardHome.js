import { Grid } from "@mui/material";
import React from "react";
import HomeBanner from "./HomeBanner";
import HomeNotice from "./HomeNotice";
import StaticDatePickerLandscape from "./StaticDatePickerLandscape";

const AdminDashboardHome = () => {
	return (
		<div>
			<HomeBanner />
			<Grid container spacing={2} alignItems='center'>
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
