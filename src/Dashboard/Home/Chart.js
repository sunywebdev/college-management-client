import { Typography } from "@mui/material";
import React from "react";
import {
	ResponsiveContainer,
	ComposedChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
} from "recharts";

const data = [
	{
		name: "10/01/2022",
		Computer: 150,
		Electronics: 150,
		Electrical: 120,
		Automobile: 135,
		Pharmacy: 100,
		Civil: 140,
	},
	{
		name: "11/01/2022",
		Computer: 130,
		Electronics: 120,
		Electrical: 110,
		Automobile: 140,
		Pharmacy: 150,
		Civil: 138,
	},
	{
		name: "12/01/2022",
		Computer: 125,
		Electronics: 125,
		Electrical: 143,
		Automobile: 132,
		Pharmacy: 100,
		Civil: 130,
	},
	{
		name: "13/01/2022",
		Computer: 145,
		Electronics: 100,
		Electrical: 70,
		Automobile: 130,
		Pharmacy: 90,
		Civil: 140,
	},
	{
		name: "14/01/2022",
		Computer: 145,
		Electronics: 125,
		Electrical: 130,
		Automobile: 130,
		Pharmacy: 100,
		Civil: 110,
	},
];

const Chart = () => {
	return (
		<div style={{ width: "100%", height: 300 }}>
			<Typography
				variant='h4'
				component='div'
				sx={{ pb: 1.5, color: "#1976D2", fontWeight: "bold" }}>
				Student Summary
			</Typography>
			<ResponsiveContainer>
				<ComposedChart
					width='100%'
					height={400}
					data={data}
					margin={{
						top: 20,
						right: 20,
						bottom: 20,
						left: 20,
					}}>
					<CartesianGrid stroke='#f5f5f5' />
					<XAxis dataKey='name' scale='band' />
					<YAxis />
					<Tooltip />
					<Legend />
					<Bar dataKey='Computer' barSize={20} fill='#413ea0' />
					<Bar dataKey='Electronics' barSize={20} fill='#EDC164' />
					<Bar dataKey='Electrical' barSize={20} fill='#1976D2' />
					<Bar dataKey='Automobile' barSize={20} fill='#DEDB74' />
					<Bar dataKey='Pharmacy' barSize={20} fill='#6F6F1E' />
					<Bar dataKey='Civil' barSize={20} fill='#00495F' />
				</ComposedChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;
