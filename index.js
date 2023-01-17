const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const server = require("http").Server(app);
var compression = require("compression");
var helmet = require("helmet");

dotenv.config();
app.use(compression()); //Compress all routes
app.use(helmet());

//import routes
const dashboardRoute = require("./dashboard");

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Route middlewares
app.use("/public", express.static("public"));
app.use(dashboardRoute);

port = process.env.PORT || 3001;

server.listen(port, () => console.log("listening on port " + port));
