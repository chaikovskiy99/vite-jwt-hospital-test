import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [authenticated, setAuthenticated] = useState(false);
	const [roles, setRole] = useState(["amdin"]);
	const [loggedInUserDetail, setLoggedInUserDetail] = useState({});

	/**
	 * Write the code for login logic here, if login is successful, set authenticated to true,
	 * also set incoming user role
	 */

	const login = async ({ email, password }) => {
		const response = await axios.post("http://localhost:3100/auth/login", {
			email,
			password,
		});
		if (response.status === 201) {
			console.log("logged in ");

			if (response.data) {
				console.log(response.data);
				setAuthenticated(true);
				console.log(response.data.user);
				setLoggedInUserDetail({
					id: response.data.user.id,
					email: response.data.user.email,
					roles: response.data.user.roles,
					fullName: response.data.user.fullName,
				});

				localStorage.setItem("access_token", response.data.access_token);
			}
			Promise.resolve(true);
			// if (response.data.role) {
			// 	setRole([...response.data.role]);
			// }
		} else Promise.resolve(false);
	};

	/**
	 * white logout logic here, after logout has successfully run we want to
	 * set the value of authenticated to false. Also unset roles to empty array once user logs out.
	 */
	const logout = () => {};

	return (
		<AuthContext.Provider value={{ authenticated, roles, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
}

const useAuth = () => {
	const { authenticated, roles, login, logout } = useContext(AuthContext);
	return { authenticated, roles, login, logout };
};
// eslint-disable-next-line react-refresh/only-export-components
export { useAuth };

AuthProvider.propTypes = {
	children: PropTypes.element,
};
