import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import { FooterContainer } from "containers/footer";
import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
	return (
		<div>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<FooterContainer />
		</div>
	);
}

export default MainLayout;
