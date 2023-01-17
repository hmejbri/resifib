/* const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: process.env.DB_PASS,
	database: "resifib",
	host: "localhost",
	port: 5432,
});

module.exports = pool;
 */

var pg = require("pg");
var client = new pg.Client(
	"postgres://tbdnierh:fBiG7Nw0YWl05cfBdhHbemv-rHWlzrWH@tyke.db.elephantsql.com/tbdnierh"
);

client.connect(function (err) {
	if (err) {
		return console.error("could not connect to postgres", err);
	}
});

module.exports = client;
