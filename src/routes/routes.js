import Home from "../pages/Home/Home";
import LoginForm from "../pages/Login/LoginForm";

export const routes = [
	{
		id: 0,
		path: "/home",
		element: <Home />,
		isPrivate: false,
		isAdmin: false,
	},
	{
		id: 1,
		path: "/login",
		element: <LoginForm />,
		isPrivate: false,
		isAdmin: false,
	},
	{
		id: 2,
		path: "/product/:id",
		element: <Home />,
		isPrivate: false,
		isAdmin: false,
	},
	{
		id: 3,
		path: "/user",
		element: <Home />,
		isPrivate: true,
		isAdmin: false,
	},
	{
		id: 4,
		path: "/create-product",
		element: <Home />,
		isPrivate: true,
		isAdmin: true,
	},
];
