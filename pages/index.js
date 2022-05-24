import React, { useRef } from "react";
import Footer from "../components/footer";
import ResponsiveAppBar from "../components/Navbar";
import Part2 from "../components/Part2";
import Part3 from "../components/part3";

export default function Home() {
	const refCat = useRef(null);
	const refProd = useRef(null);

	return (
		<div>
			<ResponsiveAppBar refCat={refCat} refProd={refProd} />

			<div>
				<Part2 />
			</div>

			<hr />

			<center>
				<h1>Catégories</h1>
			</center>

			<div style={{ minHeight: "60em" }}>
				<br />
				<Part3 refCat={refCat} refProd={refProd} />
			</div>

			<Footer></Footer>
		</div>
	);
}
