import { Button, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CardProduit({ data }) {
	const [elevation, setElevation] = useState(5);
	return (
		<Paper
			elevation={elevation}
			style={{ width: "25em", height: "12em", borderRadius: "10px" }}
			className="cardPaper"
		>
			<div>
				<Grid container>
					<Grid item xs={3}>
						<img
							className="cardImage"
							style={{
								marginLeft: "-80%",
								marginTop: "1em",
								borderRadius: "20px",
								border: "1px inset",
								height: "10em",
								width: "10em",
							}}
							src={data.url[0]}
						></img>
					</Grid>
					<Grid
						item
						xs={9}
						style={{
							marginTop: "1em",
						}}
					>
						<Typography
							variant="caption"
							style={{
								color: "gray",
							}}
						>
							{new Date(data.date_modification).toDateString()}
						</Typography>

						<p
							style={{
								fontWeight: "bold",
							}}
							className="nomProduit"
						>
							{data.nom}
						</p>

						<p className="description">{data.description}</p>

						<center>
							<Button variant="contained" style={{ marginTop: "-0.5em" }}>
								Voir plus..
							</Button>
						</center>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
}
