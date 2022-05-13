import { Container, Grid, Grow } from "@mui/material";
import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import CardProduit from "./CardProduit";
const callouts = [
	{
		name: "Desk and Office",
		description: "Work from home accessories",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
		imageAlt:
			"Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
		href: "#",
	},
	{
		name: "Self-Improvement",
		description: "Journals and note-taking",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
		imageAlt:
			"Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
		href: "#",
	},
	{
		name: "Travel",
		description: "Daily commute essentials",
		imageSrc:
			"https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
		imageAlt:
			"Collection of four insulated travel bottles on wooden shelf.",
		href: "#",
	},
];
export default function Part3() {
	return (
		<>
			<div style={{ marginLeft: "5em" }}>
				<Grid container>
					<Grid item xs={12} md={4}>
						<Grow
							in={true}
							style={{ transformOrigin: "0 0 0" }}
							{...{ timeout: 1000 }}
						>
							<Card
								className="category"
								style={{ width: "18rem" }}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>Cuisine</Card.Title>
									<Card.Text>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Grow>
					</Grid>
					<Grid item xs={12} md={4}>
						<Grow
							in={true}
							style={{ transformOrigin: "0 0 0" }}
							{...{ timeout: 2000 }}
						>
							<Card
								className="category"
								style={{ width: "18rem" }}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>Jardin</Card.Title>
									<Card.Text>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Grow>
					</Grid>

					<Grid item xs={12} md={4}>
						<Grow
							in={true}
							style={{ transformOrigin: "0 0 0" }}
							{...{ timeout: 3000 }}
						>
							<Card
								style={{ width: "18rem" }}
								className="category"
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>Cuisine</Card.Title>
									<Card.Text>
										Some quick example text to build on the
										card title and make up the bulk of the
										card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Grow>
					</Grid>
				</Grid>
			</div>

			<hr />

			<Container maxWidth="md">
				<Grid container>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>

					<Grid item md={4}></Grid>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>

					<Grid item md={4}></Grid>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>

					<Grid item md={4}></Grid>
					<Grid item md={4} xs={12}>
						<CardProduit />
						<br />
					</Grid>
				</Grid>
			</Container>
		</>
	);
}
