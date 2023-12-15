import { Navigate } from "react-router-dom";
// import PropTypes from "prop-types";

const ProtectedRoute = ({ authenticated, children }) => {
	console.log(authenticated, "auth");
	// const rolesNeeded = !!roles?.length;
	// const incomingUserRole = ["amdin"];

	// const rolesMatch = rolesNeeded
	// 	? incomingUserRole.some((r) => roles.indexOf(r) >= 0)
	// 	: true;

	if (!authenticated) {
		return <Navigate to="/login" replace={true} />;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
