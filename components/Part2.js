import { Typography } from "@mui/material";
import React from "react";
import LazyHero from "react-lazy-hero";

export default function Part2() {
	return (
		<LazyHero
			imageSrc="https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFLblZNeWxJSkwuX0FDX1NMMTUwMF8uanBn.jpg"
			color="#0000"
			opacity="0.7"
			minHeight="100vh"
			parallaxOffset={10}
		>
			<center>
				<Typography variant="h1" component="div" gutterBottom style={{ color: "white" }}>
					R
					<Typography
						variant="h1"
						component="div"
						gutterBottom
						style={{ color: "#36ff6b", display: "inline" }}
					>
						E
					</Typography>
					SIF
					<Typography
						variant="h1"
						component="div"
						gutterBottom
						style={{ color: "#36ff6b", display: "inline" }}
					>
						I
					</Typography>
					B
				</Typography>

				<Typography
					variant="h6"
					component="div"
					gutterBottom
					style={{ maxWidth: "80%", color: "white" }}
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis ex
					nunc, quis tincidunt lectus porta vitae. Curabitur ultricies suscipit tempor.
					Aenean aliquam ornare mi nec interdum. Vestibulum et ipsum in sem congue
					accumsan. In hac habitasse platea dictumst. Duis porta urna eu erat euismod
					interdum.
				</Typography>
			</center>
		</LazyHero>
	);
}
