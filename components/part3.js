import {
	CircularProgress,
	Container,
	Grid,
	Pagination,
	Zoom,
} from "@mui/material";
import React, { useState, useRef, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import CardProduit from "./CardProduit";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		neutral: {
			main: "#187025",
			contrastText: "#fff",
		},
	},
});

export default function Part3({ refCat, refProd }) {
	const [produits, setProduits] = useState([]);
	const [allProduits, setAllProduits] = useState([]);
	const [categorie, setCategorie] = useState();
	const [isIntersecting, setIntersecting] = useState(false);
	const [loading, setLoading] = useState(false);
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
			setProduits(result.slice(0, nbProduits));
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
		if (categorie == cat) setCategorie();
		else setCategorie(cat);
		refProd.current.scrollIntoView({ behavior: "smooth", block: "center" });

		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1000);
	};

	const changePage = (event, value) => {
		setProduits(
			allProduits.slice(
				(value - 1) * nbProduits,
				(value - 1) * nbProduits + nbProduits
			)
		);
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
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "100ms" }}
						>
							<Card
								style={{ width: "18rem" }}
								ref={ref}
								onClick={() =>
									handleCategorie("Pots de Fleurs")
								}
							>
								<Card.Img
									variant="top"
									src="data:image/jpeg;base64,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"
								/>
								<Card.Body>
									<Card.Title>Pots de Fleurs</Card.Title>
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
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "300ms" }}
						>
							<Card
								style={{ width: "18rem", minHeight: "22em" }}
								onClick={() => handleCategorie("test1")}
							>
								<Card.Img
									variant="top"
									src="data:image/jpeg;base64,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"
								/>
								<Card.Body>
									<Card.Title>Évier en granit</Card.Title>
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
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "500ms" }}
						>
							<Card
								style={{ width: "18rem", maxHeight: "25em" }}
								onClick={() => handleCategorie("test2")}
							>
								<Card.Img
									variant="top"
									src="https://static.cotemaison.fr/medias_11964/w_600,h_600,c_fill,g_north/v1617543550/la-cuisine-imite-le-bois-a-la-perfection_6125959.jpg"
								/>
								<Card.Body>
									<Card.Title>test2</Card.Title>
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
				<Zoom in={isIntersecting} style={{ transitionDelay: "300ms" }}>
					<Container maxWidth="md">
						<Grid container>
							{produits.map((val, index) => {
								return (
									<>
										{categorie &&
										val.categorie.trim() !== categorie ? (
											""
										) : (
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

												{index == 0 ||
												index % 2 == 0 ? (
													<Grid item md={4}></Grid>
												) : (
													""
												)}
											</>
										)}
									</>
								);
							})}
						</Grid>
						<br />
						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<ThemeProvider theme={theme}>
								<Pagination
									color="neutral"
									count={Math.ceil(
										allProduits.length / nbProduits
									)}
									onChange={changePage}
								/>
							</ThemeProvider>
						</div>
					</Container>
				</Zoom>
			)}
		</div>
	);
}
