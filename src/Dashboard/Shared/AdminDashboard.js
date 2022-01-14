import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet } from "react-router-dom";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import AssessmentIcon from "@mui/icons-material/Assessment";

const drawerWidth = 250;

function DashboardHome(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Paper
				elevation={3}
				sx={{ py: 2, textAlign: "center", bgcolor: "#1976D2" }}>
				<Typography variant='h2' component='div' sx={{ color: "white" }}>
					NIT
				</Typography>
				<Typography
					variant='h6'
					component='div'
					sx={{ color: "white", fontWeight: "bold" }}>
					Polytechnic Institute
				</Typography>
				<Typography variant='body' component='div' sx={{ color: "white" }}>
					(Muradpur, Chattogram)
				</Typography>
			</Paper>

			<List
				sx={{
					"& .MuiListItemIcon-root": { justifyContent: "center" },
					"& .MuiAccordionSummary-content": { margin: "11px 15px" },
					"& .Mui-expanded": {
						height: "auto",
					},
					"& .MuiAccordionDetails-root": { p: 0 },
					"& .MuiAccordionSummary-content .MuiTypography-body1": { pl: 2 },
					"& .MuiListItemText-root, .MuiAccordionSummary-content, .MuiSvgIcon-root":
						{
							color: "#1976D2",
						},
				}}>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to=''>
					<ListItem button>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</Link>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='attendance'>
					<ListItem button>
						<ListItemIcon>
							<CoPresentIcon />
						</ListItemIcon>
						<ListItemText primary={"Attendance"} />
					</ListItem>
				</Link>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<GroupsIcon />
						<Typography>Students</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='students'>
							<ListItem button>
								<ListItemIcon>
									<GroupIcon />
								</ListItemIcon>
								<ListItemText primary={"All Students"} />
							</ListItem>
						</Link>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='addStudents'>
							<ListItem button>
								<ListItemIcon>
									<PersonAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Add Students"} />
							</ListItem>
						</Link>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<GroupsIcon />
						<Typography>Teachers</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='teachers'>
							<ListItem button>
								<ListItemIcon>
									<GroupsIcon />
								</ListItemIcon>
								<ListItemText primary={"Teachers"} />
							</ListItem>
						</Link>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='addTeachers'>
							<ListItem button>
								<ListItemIcon>
									<PersonAddIcon />
								</ListItemIcon>
								<ListItemText primary={"Add Teachers"} />
							</ListItem>
						</Link>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<InboxIcon /> <Typography>Notice</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='addNotices'>
							<ListItem button>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={"Add Notices"} />
							</ListItem>
						</Link>
						<Link
							className='color-theme'
							style={{
								textDecoration: "none",
								fontWeight: "bold",
								fontSize: "15px",
							}}
							to='allNotices'>
							<ListItem button>
								<ListItemIcon>
									<InboxIcon />
								</ListItemIcon>
								<ListItemText primary={"All Notices"} />
							</ListItem>
						</Link>
					</AccordionDetails>
				</Accordion>
				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='report'>
					<ListItem button>
						<ListItemIcon>
							<AssessmentIcon />
						</ListItemIcon>
						<ListItemText primary={"Report"} />
					</ListItem>
				</Link>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<LocalLibraryIcon />
						<Typography>Library</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<LocalAtmIcon />
						<Typography>Fees</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<DirectionsBusFilledIcon />
						<Typography>Transport</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='panel1a-content'
						id='panel1a-header'>
						<LocalAtmIcon />
						<Typography>Salary</Typography>
					</AccordionSummary>
					<AccordionDetails></AccordionDetails>
				</Accordion>

				<Link
					className='color-theme'
					style={{
						textDecoration: "none",
						fontWeight: "bold",
						fontSize: "15px",
					}}
					to='account'>
					<ListItem button>
						<ListItemIcon>
							<LocalAtmIcon />
						</ListItemIcon>
						<ListItemText primary={"Account"} />
					</ListItem>
				</Link>
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position='fixed'
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: "none" } }}>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' noWrap component='div'>
						NIT DASHBOARD
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				onClick={() => setMobileOpen(false)}
				component='nav'
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label='mailbox folders'>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true,
					}}
					sx={{
						display: { xs: "block", sm: "none" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}>
					{drawer}
				</Drawer>
				<Drawer
					variant='permanent'
					sx={{
						display: { xs: "none", sm: "block" },
						"& .MuiDrawer-paper": {
							boxSizing: "border-box",
							width: drawerWidth,
						},
					}}
					open>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component='main'
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}>
				<Toolbar />
				<Outlet></Outlet>
			</Box>
		</Box>
	);
}

DashboardHome.propTypes = {
	window: PropTypes.func,
};

export default DashboardHome;
