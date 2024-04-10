// index.js

const express = require("express");
const ConnectToMongo = require("./db");
const app = express();
const port = process.env.PORT;
var cors = require("cors");

app.use(express.json());
// available routes
const corsOptions = {
	origin: "https://inotes-amber.vercel.app",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// const allowedOrigins = ["https://inotes-amber.vercel.app"];
app.use(cors(corsOptions));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

ConnectToMongo()
	.then(() => {
		app.listen(port, () => {
			console.log(`Server is running on port http://localhost:${port}`);
		});
	})
	.catch((error) => {
		console.error("Error starting server:", error);
	});
