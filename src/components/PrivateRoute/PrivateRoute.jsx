import React from "react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
	const auth = true;
	return auth ? children : <Navigate to={`/login`} />;
};

export const AdminRoute = ({ children }) => {
	const auth = true;
	// Neu chua login => login
	return auth ? children : <Navigate to={`/home`} />;
	// Neu login roi => check if is admin or not
};
