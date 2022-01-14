import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	Grid,
	Paper,
	Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";

const HomeNotice = () => {
	const [notices, setNotices] = useState([]);
	useEffect(() => {
		fetch(`https://ancient-plains-93212.herokuapp.com/notices`)
			.then((res) => res.json())
			.then((data) => setNotices(data.reverse()));
	}, []);
	return (
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
					{notices?.map((notice, key) => (
						<Grid key={key} item md={12} xs={12}>
							<Card
								sx={{ textAlign: "left", mx: 2, color: "#1976D2" }}
								elevation={3}>
								<CardHeader
									avatar={<Avatar sx={{ bgcolor: "red" }}></Avatar>}
									title={`${notice?.postedBy} (${notice?.role})`}
									subheader={`${notice?.time}`}
								/>
								<CardContent>
									<Typography variant='h6' color='text.secondary'>
										{notice?.title}
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										{notice?.notice}
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Paper>
		</Box>
	);
};

export default HomeNotice;
