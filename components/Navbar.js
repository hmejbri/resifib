import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const ResponsiveAppBar = ({ refCat, refProd }) => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const scrollToCategories = () => {
		refCat.current.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	const scrollToProduits = () => {
		refProd.current.scrollIntoView({ behavior: "smooth", block: "center" });
	};

	return (
		<AppBar style={{ backgroundColor: "#232A64" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
					>
						RESIFIB
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							<MenuItem
								key="Accueil"
								onClick={() => {
									handleCloseNavMenu();
									scrollToCategories();
								}}
							>
								<Typography textAlign="center">
									Accueil
								</Typography>
							</MenuItem>
							<MenuItem
								key="Catégories"
								onClick={() => {
									handleCloseNavMenu();
									scrollToCategories();
								}}
							>
								<Typography textAlign="center">
									Catégories
								</Typography>
							</MenuItem>
							<MenuItem
								key="Produits"
								onClick={() => {
									handleCloseNavMenu();
									scrollToProduits();
								}}
							>
								<Typography textAlign="center">
									Produits
								</Typography>
							</MenuItem>
							<MenuItem
								key="Contacter"
								onClick={handleCloseNavMenu}
							>
								<Typography textAlign="center">
									Contacter
								</Typography>
							</MenuItem>
						</Menu>
					</Box>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							flexGrow: 1,
							display: { xs: "flex", md: "none" },
						}}
					>
						RESIFIB
					</Typography>
					<Box
						style={{ marginLeft: "70%" }}
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}
					>
						<Button
							key="Accueil"
							onClick={() => {
								handleCloseNavMenu();
								window.scrollTo(0, 0);
							}}
							sx={{
								my: 2,
								color: "white",
								display: "block",
							}}
						>
							Accueil
						</Button>
						<Button
							key="Catégories"
							onClick={() => {
								handleCloseNavMenu();
								scrollToCategories();
							}}
							sx={{
								my: 2,
								color: "white",
								display: "block",
							}}
						>
							Catégories
						</Button>
						<Button
							key="Produits"
							onClick={() => {
								handleCloseNavMenu();
								scrollToProduits();
							}}
							sx={{
								my: 2,
								color: "white",
								display: "block",
							}}
						>
							Produits
						</Button>
						<Button
							key="Contacter"
							onClick={handleCloseNavMenu}
							sx={{
								my: 2,
								color: "white",
								display: "block",
							}}
						>
							Contacter
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
