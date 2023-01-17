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
				<Typography
					variant="h1"
					component="div"
					gutterBottom
					style={{ color: "white" }}
				>
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
					style={{
						maxWidth: "80%",
						color: "white",
						display: "inline",
					}}
				>
					Vous avez une idée que nous exécutons pour un résultat
				</Typography>

				<br />
				<Typography
					variant="h4"
					component="div"
					gutterBottom
					style={{
						maxWidth: "80%",
						color: "#36ff6b",
						display: "inline",
					}}
				>
					DESSINE TON AVENIR
				</Typography>
				<br />

				<Typography
					variant="h6"
					component="div"
					gutterBottom
					style={{ maxWidth: "80%", color: "white" }}
				>
					Du concept à la production, nous sommes en mesure de
					produire votre premier prototype et nous avons les outils et
					les connaissances nécessaires pour donner vie à votre
					prochain projet d&apos;idée de conception. Nous coordonnons
					chaque aspect de votre prochain prototype.
				</Typography>
			</center>
		</LazyHero>
	);
}
