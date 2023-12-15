import { Login } from "./Login";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoutes";
import { useAuth } from "./contexts/authContext";
import UserList from "./contexts/UserList";
export default function App() {
	const { authenticated } = useAuth();

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index element={<UserList />} />
          <Route path="home" element={<ProtectedRoute authenticated={authenticated}><UserList/></ProtectedRoute>} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/profile"
						element={
							<ProtectedRoute authenticated={authenticated}>
								<Profile />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}
