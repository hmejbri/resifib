import {
	Avatar,
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
			const tmp = allProduits.filter(
				(val) => val.categorie.trim() == cat
			);
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
					<Grid item xs={6} md={4}>
						<Zoom
							ref={ref}
							in={isIntersecting}
							style={{ transitionDelay: "100ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/8dGWHXP/3.jpg"
								className={
									categorie
										? categorie == "POTS DE FLEURS"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie("POTS DE FLEURS")
								}
							/>
						</Zoom>
						<br />
						<h6>POTS DE FLEURS</h6>
					</Grid>
					<Grid item xs={6} md={4}>
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "300ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/34RRKyW/2.jpg"
								className={
									categorie
										? categorie == "ÉSPACES ÉLÉGANTS"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie("ÉSPACES ÉLÉGANTS")
								}
							/>
						</Zoom>
						<br />
						<h6>ÉSPACES ÉLÉGANTS</h6>
					</Grid>

					<Grid item xs={6} md={4}>
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "500ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/6wcKcJp/5.jpg"
								className={
									categorie
										? categorie == "ÉVIER DE CUISINE"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie("ÉVIER DE CUISINE")
								}
							/>
						</Zoom>
						<br />
						<h6>ÉVIER DE CUISINE </h6>
					</Grid>
					<Grid item xs={6} md={4}>
						<Zoom
							ref={ref}
							in={isIntersecting}
							style={{ transitionDelay: "700ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/Nm6Dfhm/1.jpg"
								className={
									categorie
										? categorie ==
										  "REVETEMENT POUR SOL ET MUR"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie(
										"REVETEMENT POUR SOL ET MUR"
									)
								}
							/>
						</Zoom>
						<br />
						<h6>REVETEMENT POUR SOL ET MUR</h6>
					</Grid>
					<Grid item xs={6} md={4}>
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "900ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/YbJNtf0/6.jpg"
								className={
									categorie
										? categorie ==
										  "PRODUITS EN POLYMÈRE RENFORCÉ ET FIBRE DE VERRE (FRP)"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie(
										"PRODUITS EN POLYMÈRE RENFORCÉ ET FIBRE DE VERRE (FRP)"
									)
								}
							/>
						</Zoom>
						<br />
						<h6>
							PRODUITS EN POLYMÈRE RENFORCÉ ET FIBRE DE VERRE
							(FRP)
						</h6>
					</Grid>

					<Grid item xs={6} md={4}>
						<Zoom
							in={isIntersecting}
							style={{ transitionDelay: "1100ms" }}
						>
							<Avatar
								sx={{
									width: { xs: "120px", md: "200px" },
									height: { xs: "120px", md: "200px" },
								}}
								src="https://i.ibb.co/pQ9dJm2/4.jpg"
								className={
									categorie
										? categorie == "PLAN DE TRAVAIL GRANIT"
											? "clickedCat"
											: "blurryCat"
										: "category"
								}
								onClick={() =>
									handleCategorie("PLAN DE TRAVAIL GRANIT")
								}
							/>
						</Zoom>
						<br />
						<h6>PLAN DE TRAVAIL GRANIT </h6>
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
					<Zoom
						in={isIntersecting}
						style={{ transitionDelay: "100ms" }}
					>
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
