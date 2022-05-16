import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import { Button, Container, Fade, Grid, Typography } from "@mui/material";

export default function Part2() {
	const [current, setCurrent] = useState(0);
	const [paragraphs, setParagraphs] = useState([]);

	useEffect(() => {
		setParagraphs([
			<Fade in={current === 0} {...{ timeout: 1000 }}>
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lacus
					nec lorem porta euismod. Nullam vel pellentesque lacus, eu fermentum neque.
					Curabitur congue a leo semper sagittis. Cras bibendum sodales diam in imperdiet.
					Fusce mollis consequat tempus. Nulla facilisi. Phasellus quis molestie nibh.
					Praesent nec dictum orci. Nullam malesuada eleifend sollicitudin.
				</Typography>
			</Fade>,
			<Fade in={current === 1} {...{ timeout: 1000 }}>
				<Typography variant="body1">
					Vivamus nec mi et risus lobortis posuere. Duis dictum elementum tincidunt. Etiam
					ac est massa. Maecenas egestas risus eu ligula vestibulum, ut vestibulum nibh
					venenatis. Donec commodo, justo eu consequat ultrices, nulla neque faucibus
					nulla, a convallis massa odio fermentum sem. Nullam nec leo suscipit tellus
					pretium ultrices. Aenean sagittis erat in augue condimentum malesuada. Nulla mi
					felis, luctus et diam in, convallis lobortis ipsum. Pellentesque dignissim
					rhoncus sapien, non eleifend tellus vestibulum vitae. In hac habitasse platea
					dictumst.
				</Typography>
			</Fade>,
			<Fade in={current === 2} {...{ timeout: 1000 }}>
				<Typography variant="body1">
					In eu diam dui. Vestibulum a vulputate risus. Cras id velit id eros placerat
					viverra. Proin id vestibulum lacus. Fusce feugiat nec sapien non euismod.
					Pellentesque dignissim ipsum a quam congue tempor. Quisque luctus luctus diam ut
					facilisis. Nulla vitae eleifend dui. Fusce vel vestibulum neque, vitae
					vestibulum enim.
				</Typography>
			</Fade>,
		]);
	}, [current]);

	return (
		<div style={{ marginTop: "5em", flexGrow: 1 }}>
			<Container maxWidth="xl">
				<Grid container>
					<Grid item xs={12} lg={6}>
						<ImageSlider
							slides={SliderData}
							current={current}
							setCurrent={setCurrent}
						/>
					</Grid>
					<Grid item lg={1}></Grid>
					<Grid item xs={12} lg={5}>
						<center>
							<div
								style={{
									marginTop: "20%",
								}}
							>
								<h1>Qui somme nous ?</h1>
								<br />
								<div style={{ height: "10em" }}>{paragraphs[current]}</div>
								<br />
								<Button variant="contained" style={{ backgroundColor: "#232A64" }}>
									Voir plus..
								</Button>
							</div>
						</center>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
