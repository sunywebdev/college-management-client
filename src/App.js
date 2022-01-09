import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./Dashboard/AdminDashboard/Students";
import Teachers from "./Dashboard/AdminDashboard/Teachers";
import AddStudents from "./Dashboard/AdminDashboard/AddStudents";
import AddTeachers from "./Dashboard/AdminDashboard/AddTeachers";
import Account from "./Dashboard/AdminDashboard/Account";
import Attendance from "./Dashboard/AdminDashboard/Attendance/Attendance";
import AddNotices from "./Dashboard/AdminDashboard/AddNotices";
import AllNotices from "./Dashboard/AdminDashboard/AllNotices";
import AdminDashboardHome from "./Dashboard/AdminDashboard/AdminDashboardHome";
import AdminDashboard from "./Dashboard/Shared/AdminDashboard";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<AdminDashboard />}>
						<Route exact path='/' element={<AdminDashboardHome />} />
						<Route path='students' element={<Students />} />
						<Route path='teachers' element={<Teachers />} />
						<Route path='addStudents' element={<AddStudents />} />
						<Route path='addTeachers' element={<AddTeachers />} />
						<Route path='account' element={<Account />} />
						<Route path='attendance' element={<Attendance />} />
						<Route path='addNotices' element={<AddNotices />} />
						<Route path='allNotices' element={<AllNotices />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
