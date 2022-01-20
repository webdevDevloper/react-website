import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, route }) {
	const auth = true;
	return auth ? children : <Navigate to={`${route.path}`} />;
}

export default PrivateRoute;
