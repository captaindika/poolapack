const express = require("express");
const app = express();
const port = 3000;
// const db = require("./src/config/db");
// const User = require("./src/model/user");
const user = require("./src/route/user");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.NODE_DOCKER_PORT || 3000;
const db = require("./src/model");

db.sequelize.sync();
// db.authenticate()
// 	.then(async () => {
// 		console.log("Database connected");
// 		await User.sync({ force: false });
// 	})
// 	.catch((err) => console.log("Fail to connect DB: ", err.message));

app.use(cors());
app.use(express.json());
app.use("/api", user);
app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
