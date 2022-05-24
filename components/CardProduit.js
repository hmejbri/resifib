import { Button, Grid, Paper, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 800,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};
export default function CardProduit({ data }) {
	const [elevation, setElevation] = useState(5);
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
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
							<Button
								onClick={handleOpen}
								variant="contained"
								style={{ marginTop: "-0.5em" }}
							>
								Voir plus..
							</Button>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby="modal-modal-title"
								aria-describedby="modal-modal-description"
							>
								<Box sx={style}>
									<center>
										<img
											style={{ height: "300px" }}
											src={data.url[0]}
										></img>

										<Typography sx={{ mt: 2 }}>
											{data.description}
										</Typography>
									</center>
								</Box>
							</Modal>
						</center>
					</Grid>
				</Grid>
			</div>
		</Paper>
	);
}
