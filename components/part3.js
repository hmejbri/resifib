import { CircularProgress, Container, Grid, Pagination, Zoom } from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import CardProduit from "./CardProduit";

export default function Part3({ refCat, refProd }) {
	const [produits, setProduits] = useState([]);
	const [allProduits, setAllProduits] = useState([]);
	const [categorie, setCategorie] = useState();
	const [isIntersecting, setIntersecting] = useState(false);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const ref = useRef();
	const nbProduits = 10;

	useEffect(() => {
		const prodFetch = async () => {
			const response = await fetch(process.env.API + "produits", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
			});

			const result = await response.json();
			setAllProduits(result);
			setProduits(result);
		};

		prodFetch();

		const observer = new IntersectionObserver(([entry], observer) => {
			setIntersecting(entry.isIntersecting);
			if (entry.intersectionRatio > 0) observer.unobserve(ref.current);
		});

		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	const handleCategorie = (cat) => {
		setCurrentPage(1);

		if (categorie == cat) {
			setProduits(allProduits);
			setCategorie();
		} else {
			const tmp = allProduits.filter((val) => val.categorie.trim() == cat);
			setProduits(tmp);
			setCategorie(cat);
		}
		refProd.current.scrollIntoView({ behavior: "smooth", block: "center" });

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const changePage = (event, value) => {
		setCurrentPage(value);
		refProd.current.scrollIntoView({ behavior: "smooth", block: "center" });

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 100);
	};

	return (
		<div>
			<center>
				<Grid container style={{ marginBottom: "5em" }} ref={refCat}>
					<Grid
						item
						xs={12}
						md={4}
						className={
							categorie
								? categorie == "Pots de Fleurs"
									? "clickedCat"
									: "blurryCat"
								: "category"
						}
						sx={{
							marginBottom: {
								xs: "2em",
							},
						}}
					>
						<Zoom in={isIntersecting} style={{ transitionDelay: "100ms" }}>
							<Card
								style={{ width: "18rem" }}
								ref={ref}
								onClick={() => handleCategorie("Pots de Fleurs")}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>Pots de Fleurs</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Zoom>
					</Grid>
					<Grid
						item
						xs={12}
						md={4}
						className={
							categorie
								? categorie == "test1"
									? "clickedCat"
									: "blurryCat"
								: "category"
						}
						sx={{
							marginBottom: {
								xs: "2em",
							},
						}}
					>
						<Zoom in={isIntersecting} style={{ transitionDelay: "300ms" }}>
							<Card
								style={{ width: "18rem" }}
								onClick={() => handleCategorie("test1")}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>test1</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Zoom>
					</Grid>

					<Grid
						item
						xs={12}
						md={4}
						className={
							categorie
								? categorie == "test2"
									? "clickedCat"
									: "blurryCat"
								: "category"
						}
					>
						<Zoom in={isIntersecting} style={{ transitionDelay: "500ms" }}>
							<Card
								style={{ width: "18rem" }}
								onClick={() => handleCategorie("test2")}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>test2</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
								<ListGroup className="list-group-flush"></ListGroup>
							</Card>
						</Zoom>
					</Grid>
				</Grid>
			</center>

			<hr />

			<center>
				<h1>Produits</h1>
			</center>

			<br ref={refProd} />

			{loading ? (
				<center>
					<CircularProgress />
				</center>
			) : (
				<Container maxWidth="md">
					<Zoom in={isIntersecting} style={{ transitionDelay: "100ms" }}>
						<Grid container>
							{produits
								.slice(
									(currentPage - 1) * nbProduits,
									(currentPage - 1) * nbProduits + nbProduits
								)
								.map((val, index) => {
									return (
										<>
											<Grid
												item
												md={4}
												xs={12}
												sx={{
													marginLeft: {
														xs: "20%",
														sm: "30%",
														md: "0%",
													},
												}}
											>
												<CardProduit data={val} />
												<br />
											</Grid>

											{index == 0 || index % 2 == 0 ? (
												<Grid item md={4}></Grid>
											) : (
												""
											)}
										</>
									);
								})}
						</Grid>
					</Zoom>

					<br />
					<div style={{ display: "flex", justifyContent: "center" }}>
						<Pagination
							color="primary"
							defaultPage={currentPage}
							count={Math.ceil(produits.length / nbProduits)}
							onChange={changePage}
						/>
					</div>
				</Container>
			)}
		</div>
	);
}
