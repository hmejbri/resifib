import { Box, Grid } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
export default function Footer() {
	return (
		<div className="footer">
			<Grid container>
				<Grid item xs={4}>
					<br></br>
					<FacebookIcon
						style={{ marginTop: "-0.1em" }}
					></FacebookIcon>
					RESIFIB
				</Grid>
				<Grid item xs={4}>
					<br></br>
					<LocationOnIcon
						style={{ marginTop: "-0.1em" }}
					></LocationOnIcon>
					Megrine,Sidi_rezig
				</Grid>
				<Grid item xs={4}>
					<br></br>
					<ForwardToInboxIcon
						style={{ marginTop: "-0.1em" }}
					></ForwardToInboxIcon>
					EMAIL
				</Grid>
			</Grid>
			<Grid container>
				<Grid item xs={12}></Grid>
			</Grid>
			<br></br>
			<Grid container>
				<Grid item xs={4}>
					<InstagramIcon
						style={{ marginTop: "-0.1em" }}
					></InstagramIcon>
					RESIFIB
				</Grid>
				<Grid item xs={4}></Grid>
				<Grid item xs={4}></Grid>
				<Grid item xs={12}>
					{" "}
					<br></br>
				</Grid>
			</Grid>
		</div>
	);
}
