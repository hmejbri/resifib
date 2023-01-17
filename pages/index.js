import Head from "next/head";
import React, { useRef } from "react";
import ResponsiveAppBar from "../components/Navbar";
import Part2 from "../components/Part2";
import Part3 from "../components/part3";

export default function Home() {
	const refCat = useRef(null);
	const refProd = useRef(null);

	return (
		<div id="body">
			<Head>
				<title>Resifib</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<ResponsiveAppBar refCat={refCat} refProd={refProd} />

			<Part2 />

			<br />

			<center>
				<h1>Catégories</h1>
			</center>

			<div style={{ minHeight: "60em" }}>
				<br />
				<Part3 refCat={refCat} refProd={refProd} />
			</div>

			<br />
		</div>
	);
}
