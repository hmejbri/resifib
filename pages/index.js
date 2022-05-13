import React from "react";
import Card from "../components/CardProduit";
import BlogCardDemo from "../components/CardProduit";
import ResponsiveAppBar from "../components/Navbar";
import Part2 from "../components/Part2";
import Part3 from "../components/part3";

export default function Home() {
	return (
		<div>
			<ResponsiveAppBar />

			<div>
				<Part2 />
			</div>
			<hr></hr>
			<br></br>
			<div>
				<Part3 />
			</div>
			<br></br>
			<hr></hr>
			<br></br>
		</div>
	);
}
