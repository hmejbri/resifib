const router = require("express").Router();
const pool = require("./database");
const verifToken = require("./verifToken");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary");

router.post("/api/ajouterProduits", verifToken, async (req, res) => {
	const data = req.body;

	await cloudinary.config({
		cloud_name: "bazztn",
		api_key: "924787155451585",
		api_secret: "TPI1xg8r0tbZPuiedjW4tLfmSwg",
	});

	data.forEach((element) => {
		pool.query(
			`INSERT INTO public.produits(nom,categorie,description,date_creation,date_modification)
			VALUES($1,$2,$3,CURRENT_TIMESTAMP,CURRENT_TIMESTAMP) RETURNING *`,
			[element.nom, element.categorie, element.description],
			(err, result) => {
				if (err) {
					console.log(err.toString());
					return res.sendStatus(400);
				} else {
					if (element.images.length == 0)
						pool.query(
							`INSERT INTO public.images(url,id_produit) VALUES($1,$2)`,
							[
								"https://resifib-dashboard.herokuapp.com/public/aucune-image.png",
								result.rows[0].id,
							],
							(err) => {
								if (err) {
									console.log(err.toString());
									return res.sendStatus(400);
								}
							}
						);
					else
						element.images.forEach(async (image) => {
							var path = "";

							await cloudinary.v2.uploader.upload(
								image.url,
								{ public_id: randomString(40) },
								async function (error, image1) {
									if (error) console.log(error.toString());
									console.log(image1.url);
									path = image1.url;
								}
							);

							pool.query(
								`INSERT INTO public.images(url,id_produit) VALUES($1,$2)`,
								[path, result.rows[0].id],
								(err) => {
									if (err) {
										console.log(err.toString());
										return res.sendStatus(400);
									}
								}
							);
						});
				}
			}
		);
	});

	return res.sendStatus(200);
});

function randomString(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}

	return result;
}

router.get("/api/produits", (req, res) => {
	pool.query(
		`WITH prod AS (SELECT * from public.produits)
		SELECT prod.id, nom, categorie, description, date_creation, date_modification, url FROM prod, public.images 
		where public.images.id_produit = prod.id
		order by prod.id DESC`,
		[],
		async (err, result) => {
			if (err) {
				console.log(err.toString());
				res.sendStatus(400);
			} else {
				const data = await groupResult(result.rows);
				res.status(200).send(data);
			}
		}
	);
});

const groupResult = async (data) => {
	var tmp = [];
	var old_id = null;
	var images = [];

	await data.forEach((val, index) => {
		if (index == 0) {
			images = [val.url];
			old_id = val.id;
		} else if (val.id !== old_id) {
			tmp.push(data[index - 1]);
			tmp[tmp.length - 1].url = images;
			images = [val.url];
			old_id = val.id;
		} else images.push(val.url);
	});

	tmp.push(data[data.length - 1]);
	if (tmp[tmp.length - 1]) tmp[tmp.length - 1].url = images;

	return tmp;
};

router.put("/api/supprimerProduits", verifToken, (req, res) => {
	const data = req.body;

	data.map((val) => {
		pool.query(
			"DELETE FROM public.images WHERE id_produit = $1 RETURNING *",
			[val],
			(err, result) => {
				if (err) {
					console.log(err.toString());
					return res.sendStatus(400);
				} else {
					pool.query("DELETE FROM public.produits WHERE id = $1", [val], (err) => {
						if (err) {
							console.log(err.toString());
							return res.sendStatus(400);
						}
					});
				}
			}
		);
	});

	res.sendStatus(200);
});

router.post("/api/login", (req, res) => {
	var { utilisateur, mdp } = req.body;

	if (utilisateur == process.env.USER && mdp == process.env.MDP) {
		const user = { id: utilisateur, mdp: process.env.MDP };

		const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
		res.header("auth-token", token).json({
			message: token,
		});
	} else res.sendStatus(400);
});

router.post("/api/loggedIn", verifToken, (req, res) => {
	if (req.user.id == process.env.USER && req.user.mdp == process.env.MDP) res.sendStatus(200);
	else res.sendStatus(400);
});

router.put("/api/modifierProduit", verifToken, (req, res) => {
	const { nom, categorie, description, id } = req.body;

	pool.query(
		`UPDATE public.produits SET nom = $1, categorie = $2, description = $3, date_modification = CURRENT_TIMESTAMP
	WHERE id = $4`,
		[nom, categorie, description, id],
		(err) => {
			if (err) {
				console.log(err.toString());
				res.sendStatus(400);
			} else res.sendStatus(200);
		}
	);
});

router.get("/api/categories", (req, res) => {
	pool.query(`SELECT DISTINCT categorie from public.produits`, [], async (err, result) => {
		if (err) {
			console.log(err.toString());
			res.sendStatus(400);
		} else {
			const T = [];
			await result.rows.map((val) => T.push(val.categorie));
			res.status(200).send(T);
		}
	});
});

module.exports = router;
