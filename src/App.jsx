import { createBrowserRouter } from "react-router-dom";

import { Login } from "./Login";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoutes";
import Dashboard from "./Dashboard";
import { useAuth } from "./contexts/authContext";
import UserList from "./contexts/UserList";
export default function App() {
	const { authenticated } = useAuth();
	const router = createBrowserRouter([
		{
			path: "/home",
			element: (
				<ProtectedRoute authenticated={authenticated}>
					<UserList />
				</ProtectedRoute>
			),
			errorElement: <h1>Mofa</h1>,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/profile",
			element: (
				<ProtectedRoute authenticated={authenticated}>
					<Profile />
				</ProtectedRoute>
			),
			errorElement: <h1>Mofa</h1>,
		},
	]);

	return <RouterProvider router={router} />;
}
