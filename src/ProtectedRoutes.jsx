import { Navigate, Outlet } from "react-router-dom";
// import PropTypes from "prop-types";

const ProtectedRoute = ({ authenticated}) => {
	console.log(authenticated, "auth");
	// const rolesNeeded = !!roles?.length;
	// const incomingUserRole = ["amdin"];

	// const rolesMatch = rolesNeeded
	// 	? incomingUserRole.some((r) => roles.indexOf(r) >= 0)
	// 	: true;

	if (!authenticated) {
		return <Navigate to="/login" replace={true} />;
	}
	return <>{authenticated ? <Outlet/> : null} </>;
};

export default ProtectedRoute;
