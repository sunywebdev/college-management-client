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

const HomeNotice = () => {
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
										Dolore, hic libero odio nemo modi saepe maiores perspiciatis
										enim illo iste temporibus aliquid laudantium voluptas
										accusamus, totam, placeat est quia sed dicta nulla mollitia
										assumenda voluptatem tempora! Eaque exercitationem
										accusantium est officiis, aliquam, excepturi suscipit at
										minus aliquid dolores dolore dicta?
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
