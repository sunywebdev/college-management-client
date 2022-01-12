import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from "./Dashboard/Students/Students";
import Teachers from "./Dashboard/Teachers/Teachers";
import AddStudents from "./Dashboard/Students/AddStudents";
import AddTeachers from "./Dashboard/Teachers/AddTeachers";
import Account from "./Dashboard/Account";
import Attendance from "./Dashboard/Attendance/Attendance";
import AddNotices from "./Dashboard/Notices/AddNotices";
import AllNotices from "./Dashboard/Notices/AllNotices";
import AdminDashboard from "./Dashboard/Shared/AdminDashboard";
import SingleStudent from "./Dashboard/Attendance/SingleStudent";
import AdminDashboardHome from "./Dashboard/Home/AdminDashboardHome";

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
						<Route path='attendance/:roll' element={<SingleStudent />} />
						<Route path='addNotices' element={<AddNotices />} />
						<Route path='allNotices' element={<AllNotices />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
